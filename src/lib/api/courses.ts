import { CoursesResponse } from "@/src/types/course";

const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getCourses = async (): Promise<CoursesResponse> => {
    try {
        const res = await fetch(`${backendUrl}/api/courses`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!res.ok) throw new Error("Failed to fetch courses");
        
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching courses:", error);
        return { data: [], meta: { pagination: { page: 0, pageSize: 0, pageCount: 0, total: 0 } } };
    }
}
