import { useQuery } from "@tanstack/react-query";
import { getCourseModules } from "../api/api";

export function useCourseModules(course_id:string) {
    return useQuery({
        queryKey: ["modules", course_id],
        queryFn: () => getCourseModules(course_id!),
        enabled: !!course_id,
        
    })
}