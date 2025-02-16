"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { fetchModules, Module } from "@/data/modules";

export default function ModulesPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");

  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!courseId) return;

    setLoading(true);
    fetchModules(parseInt(courseId))
      .then((data) => {
        setModules(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err.message);
        setError("Failed to load modules.");
        setLoading(false);
      });
  }, [courseId]);

  if (!courseId) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            Please select a course to view modules.
          </h2>
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">Loading modules...</h2>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-red-500">{error}</h2>
        </div>
      </Layout>
    );
  }

  if (modules.length === 0) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            No modules available for this course.
          </h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6 sm:p-8 lg:p-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-hospitalBlue">
          Modules
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={`/categories/courses/modules/modules_videos?moduleId=${module.id}`}
              className="block p-6 rounded-lg shadow-md bg-white hover:bg-hospitalBlue hover:text-white transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
              <p className="text-gray-600">{module.videos.length} videos</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
