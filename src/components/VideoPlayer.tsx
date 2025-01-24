import React, { useEffect, useRef } from "react";
import shaka from "shaka-player";
import "shaka-player/dist/controls.css";
export interface VideoPlayerProps {
  videoUrl: string;
  getCurrentTimestamp?: (timestamp: number) => void; // Optional callback for timestamps
  captionsEnabled?: boolean; // Enable or disable captions
  nextVideoUrl?: string; // URL for autoplaying the next video
}

export default function VideoPlayer({
  videoUrl,
  getCurrentTimestamp,
  captionsEnabled = true,
  nextVideoUrl,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    shaka.polyfill.installAll();
    if (!videoRef.current || !containerRef.current) return;

    const initializeShakaPlayer = () => {
      if (!shaka.ui) {
        console.error("Shaka UI library not loaded");
        return;
      }
      if (!videoRef.current || !containerRef.current) {
        console.error("Video element or container not found.");
        return;
      }

      // Initialize Shaka Player
      const player = new shaka.Player(videoRef.current);
      const ui = new shaka.ui.Overlay(player, containerRef.current, videoRef.current);

      // Configure Shaka Player
      if (captionsEnabled) {
        player.configure({
          textDisplayFactory: shaka.ui.TextDisplayer,
        });
      }

      // Load the video
      player
        .load(videoUrl)
        .then(() => console.log("Video loaded successfully!"))
        .catch((error: shaka.util.Error) =>
          console.error("Error loading video:", error)
        );

      // Track timestamps
      const handleTimeUpdate = () => {
        if (videoRef.current && getCurrentTimestamp) {
          getCurrentTimestamp(videoRef.current.currentTime);
        }
      };

      // Autoplay next video
      const handleVideoEnded = () => {
        if (nextVideoUrl) {
          player
            .unload()
            .then(() => player.load(nextVideoUrl))
            .catch((error: shaka.util.Error) =>
              console.error("Error loading next video:", error)
            );
        }
      };

      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
      videoRef.current.addEventListener("ended", handleVideoEnded);

      // Cleanup
      return () => {
        videoRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current?.removeEventListener("ended", handleVideoEnded);
        ui.destroy();
        player.destroy();
      };
    };

    initializeShakaPlayer();
  }, [videoUrl, getCurrentTimestamp, captionsEnabled, nextVideoUrl]);

  return (
    <div ref={containerRef} className="shaka-container w-full rounded-lg">
      <video ref={videoRef} className="w-full h-auto" controls />
    </div>
  );
}
