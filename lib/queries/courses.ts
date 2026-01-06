import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCourseModules, getAdminDashboardData, courseCreate } from "../api/api";

export function useCourseModules(course_id:string) {
    return useQuery({
        queryKey: ["modules", course_id],
        queryFn: () => getCourseModules(course_id!),
        enabled: !!course_id,
        
    })
}

export function useAdminDashboard() {
    return useQuery({
        queryKey: ["admin", "dashboard"],
        queryFn: () => getAdminDashboardData(),
    })
}

export function useCreateCourse() {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: ({ data, onProgress }: { 
            data: Parameters<typeof courseCreate>[0], 
            onProgress: (percent: number) => void 
        }) => courseCreate(data, onProgress),
        onSuccess: () => {
            // Invalidate and refetch dashboard data
            queryClient.invalidateQueries({ queryKey: ["admin", "dashboard"] });
        },
    })
}