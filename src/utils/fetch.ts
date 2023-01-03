import { FetchError } from '@/types/fetch';

const { VITE_BASE_URL } = import.meta.env;

const baseUrl = VITE_BASE_URL;

const header = {
  // authorization: '',
};

const getHeader = () => {
  return header;
};

type RequestData = { [key: string]: string | number | any[] };

const fetchApi = {
  async get<T>(path: string): Promise<T> {
    return fetch(`${baseUrl}${path}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: getHeader(),
    }).then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      }
      throw new FetchError(response);
    });
  },

  async post<T>(path: string, body: RequestData): Promise<T> {
    return fetch(`${baseUrl}${path}`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: getHeader(),
      body: JSON.stringify(body),
    }).then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      }
      throw new FetchError(response);
    });
  },

  async put<T>(path: string, body: RequestData): Promise<T> {
    return fetch(`${baseUrl}${path}`, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'include',
      headers: getHeader(),
      body: JSON.stringify(body),
    }).then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      }
      throw new FetchError(response);
    });
  },

  async patch<T>(path: string, body: RequestData): Promise<T> {
    return fetch(`${baseUrl}${path}`, {
      method: 'PATCH',
      mode: 'cors',
      credentials: 'include',
      headers: getHeader(),
      body: JSON.stringify(body),
    }).then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      }
      throw new FetchError(response);
    });
  },

  async delete<T>(path: string, body?: RequestData): Promise<T> {
    return fetch(`${baseUrl}${path}`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
      headers: getHeader(),
      body: JSON.stringify(body),
    }).then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      }
      throw new FetchError(response);
    });
  },
};

export default fetchApi;
