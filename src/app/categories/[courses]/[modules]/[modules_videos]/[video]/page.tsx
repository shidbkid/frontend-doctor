"use client";

import { useSearchParams } from "next/navigation";
import { videos } from "@/data/videos";
import VideoPlayer from "@/components/VideoPlayer";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function VideoPage() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("videoId"); // Extract the videoId from the query

  // Find the selected video and its index in the array
  const selectedVideoIndex = videos.findIndex((video) => video.id === videoId);
  const selectedVideo = videos[selectedVideoIndex];

  // Determine the next video URL (if available)
  const nextVideo =
    selectedVideoIndex !== -1 && selectedVideoIndex + 1 < videos.length
      ? videos[selectedVideoIndex + 1]
      : null;
  const nextVideoUrl = nextVideo ? nextVideo.url : undefined;

  // State for notes
  const [notes, setNotes] = useState<string[]>([]);
  const [currentNote, setCurrentNote] = useState<string>("");

  // Function to add a note with a timestamp
  const addNote = (timestamp: number) => {
    if (currentNote.trim() === "") return;
    const formattedTimestamp = new Date(timestamp * 1000)
      .toISOString()
      .substr(11, 8);
    setNotes((prevNotes) => [...prevNotes, `${formattedTimestamp}: ${currentNote}`]);
    setCurrentNote(""); // Clear the input field
  };

  if (!videoId || !selectedVideo) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            Video not found.
          </h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row p-6 sm:p-8 lg:p-12">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md mb-8 lg:mb-0 lg:mr-8">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Video List</h2>
          <ul className="space-y-4">
            {videos.map((video) => (
              <li key={video.id}>
                <a
                  href={`?videoId=${video.id}`}
                  className={`block px-4 py-2 rounded-lg ${
                    video.id === videoId
                      ? "bg-hospitalBlue text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Video Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 text-hospitalBlue text-center">
            {selectedVideo.title}
          </h1>
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Advanced VideoPlayer */}
            <VideoPlayer
  videoUrl={selectedVideo.url}
  getCurrentTimestamp={(timestamp) => {
    const formattedTimestamp = new Date(timestamp * 1000)
      .toISOString()
      .substr(11, 8);
    setNotes((prevNotes) => [
      ...prevNotes,
      `${formattedTimestamp}: ${currentNote}`,
    ]);
    setCurrentNote("");
  }}
  captionsEnabled={true}
  nextVideoUrl={nextVideoUrl}
/>
            <p className="text-gray-700 mt-4">{selectedVideo.description}</p>
          </div>

          {/* Notes Section */}
          <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Notes</h2>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={3}
              placeholder="Write your notes here..."
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
            ></textarea>
            <button
              onClick={() => addNote(0)} // This button does not need videoRef anymore
              className="mt-4 bg-hospitalBlue text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Note
            </button>
            <ul className="mt-4 space-y-2">
              {notes.map((note, index) => (
                <li
                  key={index}
                  className="p-2 bg-white rounded-md shadow-sm text-gray-800"
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
