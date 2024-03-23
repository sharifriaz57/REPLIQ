import axios from "axios";

const prefix = `https://dummyjson.com`;

export const AppRequest = {
    AxiosGet: async (url = '/') => {
        try {
            const response = await axios.get(`${prefix}/${url}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return { error: error };
        }
    },
    AxiosPost: async (url = '/', data = {}) => {
        try {
            const response = await axios.post(`${prefix}/${url}`, data);
            return response.data;
        } catch (error) {
            console.error(error);
            return { error: error };
        }
    },
}