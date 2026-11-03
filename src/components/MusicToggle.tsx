import React, { useSyncExternalStore } from "react";
import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isMusicMuted, setMusicMuted, subscribeToMusic } from "@/lib/background-music";

const MusicToggle = () => {
  // A shared store, because the desktop and mobile headers each render their own toggle.
  const muted = useSyncExternalStore(subscribeToMusic, isMusicMuted);

  return (
    <Button
      size="icon"
      onClick={() => setMusicMuted(!muted)}
      aria-label={muted ? "Play background music" : "Mute background music"}
      aria-pressed={muted}
      title={muted ? "Play music" : "Mute music"}
      className="comic-icon-btn relative"
    >
      <Music size={20} />
      {muted && (
        <span aria-hidden="true" className="absolute left-1/2 top-1/2 h-0.5 w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
      )}
    </Button>
  );
};

export default MusicToggle;
