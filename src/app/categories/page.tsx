"use client";

import React, { useEffect, useState } from "react";
import { fetchCategories, Category } from "@/data/categories";
import Link from "next/link";
import Layout from "@/components/Layout";
import API_BASE_URL from "@/config/apiConfig";

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Using API URL:", API_BASE_URL); // Log API URL
    fetchCategories()
      .then((data) => {
        console.log("Fetched categories:", data); // Log fetched data
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error.response?.data || error.message); // Log detailed error
        setError("Failed to load categories");
        setLoading(false);
      });
  }, []);
  

  return (
    <Layout>
      <div className="p-6 sm:p-8 lg:p-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-hospitalBlue">
          Categories
        </h1>
        {loading ? (
          <p>Loading categories...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/courses?categoryId=${category.id}`}
                className="block p-6 rounded-lg shadow-md bg-white hover:bg-hospitalBlue hover:text-white transition-colors"
              >
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoriesPage;
