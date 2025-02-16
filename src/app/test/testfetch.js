import { fetchCategories } from "../../data/categories.js"; // Adjust path accordingly

fetchCategories()
  .then((data) => console.log("✅ Categories fetched:", data))
  .catch((error) => console.error("❌ Fetch error:", error.message));
