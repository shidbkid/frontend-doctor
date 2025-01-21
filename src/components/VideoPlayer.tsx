"use client";

import React, { useEffect, useRef } from "react";
import shaka from "shaka-player";

export default function VideoPlayer({ videoUrl }: { videoUrl: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = new shaka.Player(videoRef.current);

      // Handle player errors
      player.addEventListener("error", (event: Event) => {
        console.error("Shaka Player Error:", event);
      });

      // Load the video
      player
        .load(videoUrl)
        .then(() => {
          console.log("Video loaded successfully");
        })
        .catch((error: shaka.util.Error) => {
          console.error("Error loading video:", error);
        });

      // Cleanup on unmount
      return () => {
        player.destroy();
      };
    }
  }, [videoUrl]);

  return (
    <div className="w-full h-auto bg-black flex justify-center items-center">
      <video
        ref={videoRef}
        className="w-full max-w-4xl h-auto"
        controls
        autoPlay
      />
    </div>
  );
}
