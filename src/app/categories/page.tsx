"use client";

import { categories } from "@/data/categories"; // Your categories data
import Link from "next/link";
import Layout from "@/components/Layout"; // Assuming you have a Layout component

export default function CategoriesPage() {
  return (
    <Layout>
      <div className="p-6 sm:p-8 lg:p-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-hospitalBlue">
          Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/courses?categoryId=${category.id}`}
              className="block p-6 rounded-lg shadow-md bg-white hover:bg-hospitalBlue hover:text-white transition-colors"
            >
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
