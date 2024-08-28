import axios from 'axios';

export const getMe = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found');
    }
    try {
        const response = await axios.get('/api/auth/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.data) {
            throw new Error('No user data found');
        }
        return response.data;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        throw error;
    }
};

export const logout = () => {
    try {
        localStorage.removeItem('token');
    } catch (error) {
        console.error('Failed to remove token:', error);
        throw error;
    }
}