"use client";

import React, { useEffect, useRef } from "react";
import shaka from "shaka-player";

export interface VideoPlayerProps {
  videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const setupPlayer = async () => {
      if (!videoRef.current) return;

      const player = new shaka.Player(videoRef.current);

      try {
        await player.load(videoUrl);
        console.log("Video loaded successfully!");
      } catch (error) {
        console.error("Error loading video:", error);
      }

      return () => {
        player.destroy(); // Cleanup
      };
    };

    setupPlayer();
  }, [videoUrl]);

  return (
    <div>
      <video
        ref={videoRef}
        className="w-full h-auto"
        controls
        autoPlay
        style={{ borderRadius: "8px" }}
      />
    </div>
  );
}
