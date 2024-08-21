import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api', // Base URL común para todas las solicitudes
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;