import apiClient from "./api";

interface User {
    id: string;
    name: string;
}

interface SignInCredential {
    email: string;
    password: string;
}

interface SignUpCredential extends SignInCredential{

}

const signIn = async (credential: SignInCredential): Promise<{mesagge: string}> => {
    const response = await apiClient.post('/auth/signin', credential)
    return response.data
}
const signUp = async (credential: SignUpCredential): Promise<void> => {
    await apiClient.post('/auth/signup', credential)
}

const getProfile = async (): Promise<User> => {
    const response = await apiClient.get('auth/profile')
    return response.data
}

const logout = async (): Promise<void> => {
    await apiClient.delete('/auth/logout')
}

export const authService = {
    signIn,
    signUp,
    getProfile,
    logout
}