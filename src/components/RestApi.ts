import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',

  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const RestApi = async (url: string, data: Record<string, any>, useToken: boolean = true) => {
  try {
    const headers = useToken ? {} : { 'Content-Type': 'application/json' };
    const response = await api.post(url, JSON.stringify(data), { headers })
    return response?.data;
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      const { message, success } = error.response.data
      return { message, success }
    } else {
      return null;
    }
  }
}

export { RestApi };
