/** Tame Impala - "Loser", the official audio upload. */
const VIDEO_ID = "MX7FSAnRPug";
const VOLUME = 35;
const MUTE_KEY = "background-music-muted";

// Only the parts of the YouTube IFrame API used here.
interface YouTubePlayer {
  playVideo(): void;
  pauseVideo(): void;
  setVolume(volume: number): void;
  getIframe(): HTMLIFrameElement;
}

declare global {
  interface Window {
    YT?: {
      Player: new (element: HTMLElement, options: object) => YouTubePlayer;
      PlayerState: { ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const readMuted = () => {
  try {
    return localStorage.getItem(MUTE_KEY) === "true";
  } catch {
    return false; // Storage can be blocked; music simply stays on for this visit.
  }
};

let muted = readMuted();
let player: YouTubePlayer | null = null;
let hasGesture = false;
let initialized = false;
const listeners = new Set<() => void>();

const sync = () => {
  if (!player || !hasGesture) return;
  if (muted) player.pauseVideo();
  else player.playVideo();
};

const createPlayer = () => {
  // Lives outside React so the music keeps playing across route changes.
  const host = document.createElement("div");
  const wrapper = document.createElement("div");
  wrapper.setAttribute("aria-hidden", "true");
  wrapper.style.cssText = "position:fixed;left:-9999px;top:0;width:200px;height:200px;";
  wrapper.append(host);
  document.body.append(wrapper);

  new window.YT!.Player(host, {
    width: 200,
    height: 200,
    videoId: VIDEO_ID,
    host: "https://www.youtube-nocookie.com",
    playerVars: { controls: 0, disablekb: 1, playsinline: 1 },
    events: {
      onReady: ({ target }: { target: YouTubePlayer }) => {
        target.getIframe().tabIndex = -1;
        target.setVolume(VOLUME);
        player = target;
        sync();
      },
      onStateChange: ({ data, target }: { data: number; target: YouTubePlayer }) => {
        if (data === window.YT!.PlayerState.ENDED) target.playVideo();
      },
      onError: ({ data }: { data: number }) => {
        console.warn("Background music unavailable, YouTube error", data);
      },
    },
  });
};

/** Browsers block audio until the visitor interacts, so playback starts on the first click or key press. */
export const initBackgroundMusic = () => {
  if (initialized) return;
  initialized = true;

  const onGesture = () => {
    hasGesture = true;
    window.removeEventListener("click", onGesture);
    window.removeEventListener("keydown", onGesture);
    sync();
  };
  // Listens on window so React handlers run first: clicking mute as the first click never starts the music.
  window.addEventListener("click", onGesture);
  window.addEventListener("keydown", onGesture);

  window.onYouTubeIframeAPIReady = createPlayer;
  const script = document.createElement("script");
  script.src = "https://www.youtube.com/iframe_api";
  document.head.append(script);
};

export const isMusicMuted = () => muted;

export const setMusicMuted = (value: boolean) => {
  muted = value;
  try {
    localStorage.setItem(MUTE_KEY, String(value));
  } catch {
    // Not persisted, but still applies until the page reloads.
  }
  listeners.forEach((listener) => listener());
  sync();
};

export const subscribeToMusic = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};
