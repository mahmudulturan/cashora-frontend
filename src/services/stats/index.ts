import axiosInstance from "@/lib/axiosInstances";
import { IResponseWithData } from "@/types/response";
import { IAdminStats } from "@/types/stats";

const getAdminStats = async (): Promise<IResponseWithData<IAdminStats>> => {
    const response = await axiosInstance.get('/stats/admin');
    return response.data;   
}

export { getAdminStats };

