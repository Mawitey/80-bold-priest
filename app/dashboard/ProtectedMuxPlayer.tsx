"use client";

import MuxPlayer from "@mux/mux-player-react";

export default function ProtectedMuxPlayer({
  playbackId,
  playbackToken,
  thumbnailToken,
  storyboardToken,
}: {
  playbackId: string;
  playbackToken: string;
  thumbnailToken: string;
  storyboardToken: string;
}) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      tokens={{
        playback: playbackToken,
        thumbnail: thumbnailToken,
        storyboard: storyboardToken,
      }}
      metadata={{
        video_id: "glory-of-god-part-1",
        video_title: "ክብሪ ኣምላኽ (1ይ ክፋል)",
      }}
      accentColor="#ff8a1f"
    />
  );
}
