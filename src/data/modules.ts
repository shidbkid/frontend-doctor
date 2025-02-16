import axios from "axios";
import API_BASE_URL from "@/config/apiConfig";

export interface Module {
  id: number;
  title: string;
  description: string;
  position: number;
  createdAt: string;
  updatedAt: string;
  course: {
    id: number;
    title: string;
  };
  videos: any[]; // Assuming videos will be an array, update type if needed
}

export const fetchModules = async (courseId: number): Promise<Module[]> => {
  try {
    console.log(`Fetching modules for course ${courseId} from:`, `${API_BASE_URL}/modules?courseId=${courseId}`);
    const response = await axios.get(`${API_BASE_URL}/modules`, {
      params: { courseId }, // Send courseId as query param
    });

    // Ensure videos array exists
    const modules = response.data.map((module: Module) => ({
      ...module,
      videos: module.videos || [], // If videos is undefined, set it to an empty array
    }));

    console.log("✅ Fetched modules:", modules);
    return modules;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("❌ Error fetching modules:", error.response?.data || error.message);
    } else {
      console.error("❌ Error fetching modules:", error);
    }
    throw new Error("Failed to load modules");
  }
};

