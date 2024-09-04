import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Agrega un interceptor para enviar el token en las cabeceras de cada petición
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
