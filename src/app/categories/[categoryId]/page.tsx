"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { categories } from "../../../data/categories";
import { courses } from "../../../data/courses";

export default function CategoryDetailPage() {
  const params = useParams();
  const { categoryId } = params;

  // Find the category based on categoryId
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold text-red-500">Category Not Found</h1>
        <p className="text-gray-700 mt-4">
          The category you are looking for does not exist. Please go back and
          select a valid category.
        </p>
        <Link href="/categories">
          <a className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-full">
            Back to Categories
          </a>
        </Link>
      </div>
    );
  }

  // Filter courses that belong to this category
  const relatedCourses = courses.filter(
    (course) => course.categoryId === categoryId
  );

  return (
    <section className="py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-8">{category.title}</h1>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
        {category.description}
      </p>

      <h2 className="text-2xl font-semibold mb-6">Courses in {category.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedCourses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <a className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {course.title}
              </h3>
              <p className="text-gray-700">{course.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
