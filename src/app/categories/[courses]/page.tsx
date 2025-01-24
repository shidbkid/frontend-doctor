"use client";

import { useSearchParams } from "next/navigation";
import { courses } from "@/data/courses";
import Link from "next/link";
import Layout from "@/components/Layout"; // Import the Layout component

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId"); // Get the query parameter

  // Filter courses by the provided categoryId
  const filteredCourses = courses.filter((course) => course.categoryId === categoryId);

  if (!categoryId) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            Please select a category to view courses.
          </h2>
        </div>
      </Layout>
    );
  }

  if (filteredCourses.length === 0) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            No courses available for this category.
          </h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6 sm:p-8 lg:p-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-hospitalBlue">
          Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/categories/courses/modules?courseId=${course.id}`}
              className="block p-6 rounded-lg shadow-md bg-white hover:bg-hospitalBlue hover:text-white transition-colors"
            >
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
