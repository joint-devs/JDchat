import axios from 'axios';

export const api = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:5200/api`,
});

api.interceptors.request.use((config) => {
  //   config.headers!.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`;

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 413) {
      console.warn('Превышен допустимый размер тела запроса!');
    }

    if (axios.isCancel(error)) {
      console.info('Запрос отменен!');
    }
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data: response } = await axios.post(`/auth/refresh`, {});

        if (!response) {
          localStorage.clear();
          window.location.reload();
        }

        // localStorage.setItem(ACCESS_TOKEN_KEY, response);

        originalRequest.headers.Authorization = `Bearer ${response}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.clear();

        window.location.href = '/login';

        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
