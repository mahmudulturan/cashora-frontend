import axiosInstance from "@/lib/axiosInstances"
import { IResponseBase, IResponseWithData } from "@/types/response"
import { IUser } from "@/types/user"

export const registerUser = async (data: Partial<IUser>): Promise<IResponseWithData<IUser>> => {
    const response = await axiosInstance.post('/auth/register', data)
    return response.data
}

export const loginUser = async (data: Partial<IUser>): Promise<IResponseWithData<IUser>> => {
    const response = await axiosInstance.post('/auth/login', data)
    return response.data
}

export const logoutUser = async (): Promise<IResponseBase> => {
    const response = await axiosInstance.get('/auth/logout')
    return response.data
}



