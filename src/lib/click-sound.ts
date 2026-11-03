const MUTE_KEY = "click-sound-muted";

const readMuted = () => {
  try {
    return localStorage.getItem(MUTE_KEY) === "true";
  } catch {
    return false; // Storage can be blocked; sound simply stays on for this visit.
  }
};

let muted = readMuted();
let context: AudioContext | null = null;
let noise: AudioBuffer | null = null;

export const isClickSoundMuted = () => muted;

export const setClickSoundMuted = (value: boolean) => {
  muted = value;
  try {
    localStorage.setItem(MUTE_KEY, String(value));
  } catch {
    // Not persisted, but still applies until the page reloads.
  }
};

/** Schedules a web-shooter "thwip": a burst of noise with a falling filter sweep. */
export const scheduleThwip = (ctx: BaseAudioContext, at: number) => {
  if (!noise || noise.sampleRate !== ctx.sampleRate) {
    noise = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.2), ctx.sampleRate);
    const samples = noise.getChannelData(0);
    for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
  }

  const source = ctx.createBufferSource();
  source.buffer = noise;

  // A little pitch variation so repeated clicks don't sound like a loop.
  const pitch = 0.9 + Math.random() * 0.2;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 2.5;
  filter.frequency.setValueAtTime(5200 * pitch, at);
  filter.frequency.exponentialRampToValueAtTime(700 * pitch, at + 0.15);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(0.5, at + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.17);

  source.connect(filter).connect(gain).connect(ctx.destination);
  source.start(at);
  source.stop(at + 0.2);
};

export const playClickSound = () => {
  if (muted) return;
  const AudioContextClass = window.AudioContext;
  if (!AudioContextClass) return;

  // Browsers only allow audio after a user gesture, so this is created on the first click.
  context ??= new AudioContextClass();
  if (context.state === "suspended") void context.resume();
  scheduleThwip(context, context.currentTime);
};
