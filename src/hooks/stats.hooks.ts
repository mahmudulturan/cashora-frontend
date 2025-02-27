import { useQuery } from "@tanstack/react-query";
import { getAdminStats } from "@/services/stats";
import { useAuth } from "./auth.hook";

export const useGetAdminStats = () => {
    const { user } = useAuth();
    return useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => await getAdminStats(),
        enabled: user?.role === 'admin'
    });
}

