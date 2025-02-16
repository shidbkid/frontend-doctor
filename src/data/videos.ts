import axios from "axios";
import API_BASE_URL from "@/config/apiConfig";

export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string | null;
  duration: number;
  status: string;
  views: number;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
  module: {
    id: number;
    title: string;
    course: {
      id: number;
      title: string;
    };
  };
}

// Fetch all videos in a given module
export const fetchVideosByModuleId = async (moduleId: number): Promise<Video[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/videos`, {
      params: { moduleId }, // Query videos by module ID
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching videos:", error);
    throw new Error("Failed to load videos");
  }
};
