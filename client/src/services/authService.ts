const API_URL = 'http://localhost:3000'

interface AuthCredential {
    email: string;
    password: string;
}

interface UserProfile {
    userId: number;
    email:string;
}

    const signUp = async (credential: AuthCredential): Promise<void> => {
        const response = await fetch(`${API_URL}/auth/signup`, {
            method: `POST`,
            headers: {
                'Content-Type' : 'appliaction/json'
            },
            body: JSON.stringify(credential)
        })

        if(!response.ok) {
            throw new Error('failed to facth profile. Token may be invalid')
        }
        return response.json();
    }

    const getProfile = async (): Promise<any> => {
        const token = localStorage.getItem("accesstoken");
        if (!token) {
            throw new Error('no access token found')
        }

        const response = await fetch(`${API_URL}/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }) 

        if(!response.ok) {
            throw new Error('Failed to fetch profile')
        }
    }

export const authService = {
    signUp,
    getProfile
}