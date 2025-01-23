"use client";

import { useSearchParams } from "next/navigation";
import { modules } from "@/data/modules";
import Link from "next/link";

export default function ModuleVideosPage() {
  const searchParams = useSearchParams();
  const moduleId = searchParams.get("moduleId"); // Extract the moduleId from the query

  // Find the selected module
  const selectedModule = modules.find((module) => module.id === moduleId);

  if (!moduleId || !selectedModule) {
    return <div>Module not found.</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-8">{selectedModule.title}</h1>
      <p className="text-center text-gray-600 mb-12">{selectedModule.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedModule.videos.map((video) => (
          <Link
            key={video.id}
            href={`/categories/courses/modules/modules_videos/video?videoId=${video.id}`}
            className="block p-6 rounded-lg shadow-lg bg-white hover:bg-gray-100"
          >
            <h3 className="text-xl font-semibold">{video.title}</h3>
            <p className="text-gray-600">{video.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
