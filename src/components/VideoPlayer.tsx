import React, { useEffect, useRef } from "react";
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import "video.js/dist/video-js.css";
import "videojs-seek-buttons";
import "videojs-seek-buttons/dist/videojs-seek-buttons.css";
import "videojs-http-source-selector";
import "videojs-http-source-selector/dist/videojs-http-source-selector.css";
import "videojs-contrib-quality-levels";

export interface VideoPlayerProps {
  videoUrl: string;
  captions?: { src: string; label: string; language: string }[];
  options?: VideoJsPlayerOptions;
  onTimestamp?: (timestamp: number) => void; // Callback to get the current timestamp
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  captions,
  options,
  onTimestamp,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && videoRef.current) {
      const playerOptions: VideoJsPlayerOptions = {
        ...options,
        autoplay: true,
        controls: true,
        preload: "auto",
        responsive: true,
        fluid: true,
        sources: [{ src: videoUrl, type: "video/mp4" }],
        controlBar: {
          children: [
            "playToggle",
            "volumePanel",
            "progressControl",
            "currentTimeDisplay",
            "timeDivider",
            "durationDisplay",
            "playbackRateMenuButton",
            "subsCapsButton",
            "fullscreenToggle",
          ],
        },
        plugins: {
          httpSourceSelector: {
            default: "auto",
          },
        },
      };

      const player = videojs(videoRef.current, playerOptions, () => {
        console.log("Video.js player is ready!");
      });

      player.on("timeupdate", () => {
        if (onTimestamp) {
          onTimestamp(player.currentTime());
        }
      });

      playerRef.current = player;

      return () => {
        if (playerRef.current) {
          playerRef.current.dispose();
        }
      };
    }
  }, [videoUrl, options, onTimestamp]);

  return (
    <div className="video-container" style={{ maxWidth: "100%", margin: "0 auto" }}>
      <div data-vjs-player style={{ position: "relative", paddingTop: "56.25%" }}>
        <video
          ref={videoRef}
          className="video-js vjs-default-skin"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default React.memo(VideoPlayer);
