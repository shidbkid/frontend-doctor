
import axios from "axios";
import API_BASE_URL from "@/config/apiConfig";

export interface Category {
  id: number;
  name: string;
  description: string;
}

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    console.log("Fetching categories from:", `${API_BASE_URL}/categories`);
    const response = await axios.get(`${API_BASE_URL}/categories`);
    console.log("Fetched data:", response.data);
    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("❌ Error fetching categories:", error.response?.data || error.message);
    } else {
      console.error("❌ Error fetching categories:", error);
    }
    throw new Error("Failed to load categories");
  }
};






// export const categories = [
//     {
//       id: "cardiothoracic",
//       title: "Cardiothoracic Surgery",
//       description: "Explore surgeries related to the heart and lungs.",
//       image: "/images/cardiothoracic.jpg",
//     },
//     {
//       id: "orthopedic",
//       title: "Orthopedic Surgery",
//       description: "Learn about joint replacement and modern orthopedic techniques.",
//       image: "/images/orthopedic.jpg",
//     },
//     {
//       id: "neurosurgery",
//       title: "Neurosurgery",
//       description: "Techniques for brain and spinal cord disorders.",
//       image: "/images/neurosurgery.jpg",
//     },
//     {
//       id: "plastic",
//       title: "Plastic Surgery",
//       description: "Enhance your skills in reconstructive and cosmetic surgery.",
//       image: "/images/plastic.jpg",
//     },
//     {
//       id: "pediatric",
//       title: "Pediatric Surgery",
//       description: "Specialized surgeries for children and infants.",
//       image: "/images/pediatric.jpg",
//     },
//     {
//       id: "general",
//       title: "General Surgery",
//       description: "Master foundational surgical techniques and procedures.",
//       image: "/images/general.jpg",
//     },
//   ];
  