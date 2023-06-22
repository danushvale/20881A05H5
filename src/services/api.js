import axios from 'axios';

const BASE_URL = 'http://104.211.219.98/train';

export const registerCompany = async (registerData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, registerData);
        return response.data;
    } catch (error) {
        console.error('Error registering company:', error);
        throw error;
    }
};

export const authenticate = async (authData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth`, authData);
        console.log(response);
        return response.data.access_token;
    } catch (error) {
        console.error('Error authenticating:', error);
        throw error;
    }
};

export const getTrainData = async (accessToken) => {
    console.log(accessToken);
    try {
        const response = await axios.get(`${BASE_URL}/trains`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching train schedules:', error);
        throw error;
    }
};