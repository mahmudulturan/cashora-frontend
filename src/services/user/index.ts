import axiosInstance from "@/lib/axiosInstances";
import { IResponseWithData } from "@/types/response";
import { IUser } from "@/types/user";

export const getUser = async () : Promise<IResponseWithData<IUser>> => {
    const response = await axiosInstance.get('/user/me');
    return response.data;
}



