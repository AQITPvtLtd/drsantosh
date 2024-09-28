import { httpAxios } from "../helper/httpHelper";

export async function getBlog() {
  try {
    const response = await httpAxios.get("/api/get-blogs");
    return response.data; // Ensure that response has a valid structure
  } catch (error) {
    console.error("Error fetching blogs from API:", error);
    return { success: false, message: "Failed to fetch blogs" };
  }
}
