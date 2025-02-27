import axiosInstance from "@/lib/axiosInstances";
import { IResponseWithData, IResponseWithPaginationData } from "@/types/response";
import { IUser } from "@/types/user";

export const getUser = async (): Promise<IResponseWithData<IUser>> => {
    const response = await axiosInstance.get('/user/me');
    return response.data;
}

export const getAllUsers = async (): Promise<IResponseWithPaginationData<IUser[]>> => {
    const response = await axiosInstance.get('/user/all');
    return response.data;
}

export const updateUser = async (data: Partial<IUser>): Promise<IResponseWithData<IUser>> => {
    const response = await axiosInstance.put('/user/me', data);
    return response.data;
}

export const updateUserStatus = async (userId: string, status: string): Promise<IResponseWithData<IUser>> => {
    const response = await axiosInstance.patch(`/user/status/${userId}`, { status });
    return response.data;
}

export const deleteUser = async (userId: string): Promise<IResponseWithData<IUser>> => {
    const response = await axiosInstance.delete(`/user/${userId}`);
    return response.data;
}


