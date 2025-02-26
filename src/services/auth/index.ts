import axiosInstance from "@/lib/axiosInstances"

export const registerUser = async (data: any) => {
    const response = await axiosInstance.post('/auth/register', data)
    return response.data
}

export const loginUser = async (data: any) => {
    const response = await axiosInstance.post('/auth/login', data)
    return response.data
}



