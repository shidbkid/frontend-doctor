import React, { useRef, useEffect } from "react";

interface VideoPlayerProps {
  videoUrl?: string; // Optional video URL
  getCurrentTimestamp?: (timestamp: number) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, getCurrentTimestamp }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;
  
    const videoElement = videoRef.current;
  
    const handleTimeUpdate = () => {
      if (getCurrentTimestamp) {
        getCurrentTimestamp(videoElement.currentTime); // Pass the updated currentTime
      }
    };
  
    videoElement.addEventListener("timeupdate", handleTimeUpdate);
  
    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [getCurrentTimestamp]); // Ensure the callback is properly registered
  

  if (!videoUrl) {
    return (
      <div className="text-center text-gray-500 bg-gray-200 p-4 rounded-lg">
        No video source available.
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto my-4">
      <div className="relative w-full h-0 pb-[56.25%]"> 
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          preload="auto"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{ backgroundColor: "black" }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
