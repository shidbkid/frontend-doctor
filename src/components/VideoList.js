import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config/apiConfig";
import Link from 'next/link';

const VideoList = ({ courseId, moduleId }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Update the endpoint to fetch videos for specific course and module
    axios
      .get(`${API_BASE_URL}/courses/${courseId}/modules/${moduleId}/videos`)
      .then((response) => {
        setVideos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setError("Failed to load videos");
        setLoading(false);
      });
  }, [courseId, moduleId]);

  if (loading) return <p>Loading videos...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Module Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Link 
            href={`/categories/${courseId}/${moduleId}/videos/${video.id}`}
            key={video.id}
          >
            <div className="bg-white p-4 shadow rounded hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
              <p>👀 {video.views} | 👍 {video.likes} | 👎 {video.dislikes}</p>
              <div className="relative pt-[56.25%]">
                <video 
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  poster={video.thumbnail}
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
