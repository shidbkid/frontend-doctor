"use client";

import { fetchCategories } from "@/data/categories";
import { useEffect } from "react";

const TestFetch = () => {
  useEffect(() => {
    fetchCategories()
      .then((data) => console.log("✅ Categories fetched:", data))
      .catch((error) => console.error("❌ Fetch error:", error.message));
  }, []);

  return <p>Check the console for API logs</p>;
};

export default TestFetch;
