import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isClickSoundMuted, setClickSoundMuted } from "@/lib/click-sound";

const SoundToggle = () => {
  const [muted, setMuted] = useState(isClickSoundMuted);

  const toggle = () => {
    setClickSoundMuted(!muted);
    setMuted(!muted);
  };

  return (
    <Button
      size="icon"
      onClick={toggle}
      aria-label={muted ? "Turn click sounds on" : "Turn click sounds off"}
      aria-pressed={muted}
      className="comic-icon-btn"
    >
      {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </Button>
  );
};

export default SoundToggle;
