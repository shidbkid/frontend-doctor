import axios from "axios";
import API_BASE_URL from "@/config/apiConfig";

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
  category: {
    id: number;
    name: string;
  };
}

export const fetchCourses = async (categoryId: number): Promise<Course[]> => {
  try {
    console.log(`Fetching courses for category ${categoryId} from:`, `${API_BASE_URL}/courses?categoryId=${categoryId}`);
    const response = await axios.get(`${API_BASE_URL}/courses`, {
      params: { categoryId }, // Send categoryId as query param
    });
    console.log("✅ Fetched courses:", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("❌ Error fetching courses:", error.response?.data || error.message);
    } else {
      console.error("❌ Error fetching courses:", error);
    }
    throw new Error("Failed to load courses");
  }
};
