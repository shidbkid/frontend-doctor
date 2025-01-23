"use client";

import { categories } from "@/data/categories"; // Your categories data
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-8">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/courses?categoryId=${category.id}`}
            className="block p-6 rounded-lg shadow-lg bg-white hover:bg-gray-100"
          >
            <h3 className="text-xl font-semibold">{category.title}</h3>
            <p className="text-gray-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
