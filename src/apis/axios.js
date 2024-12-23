import axios from 'axios';
import { useMemo } from 'react';

const BASE_URL = 'https://api.example.com';
const useApi = () => {
  const api = useMemo(() => {
    const instance = axios.create({
      baseURL: BASE_URL, // replace with your API base URL
    });

    // Set token from localStorage
    instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return instance;
  }, []);

  return api;
};

export default useApi;
