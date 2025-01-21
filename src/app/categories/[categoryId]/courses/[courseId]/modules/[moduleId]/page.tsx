"use client";

import { useParams } from "next/navigation";
import { modules } from "@/data/modules";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function VideosPage() {
  const { moduleId } = useParams();

  const module = modules.find((mod) => mod.id === moduleId);

  if (!module) return <div>Module not found.</div>;

  return (
    <div>
      <Navbar />
      <div className="py-16 px-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mt-10 mb-8">{module.title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {module.videos.map((video) => (
            <Link
              key={video.id}
              href={`/videos/${video.id}`}
              className="block p-6 rounded-lg shadow-lg bg-white hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold">{video.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
