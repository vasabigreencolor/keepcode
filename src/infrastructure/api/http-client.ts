interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

export class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async request<T>(url: string, options: RequestOptions): Promise<T> {
    const response = await fetch(`${this.baseURL}${url}`, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Network response was not ok');
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }

    return response as unknown as T;
  }

  async get<T>(url: string, headers?: Record<string, string>): Promise<T> {
    const options: RequestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };
    return await this.request<T>(url, options);
  }

  async post<T>(url: string, data: unknown, headers?: Record<string, string>): Promise<T> {
    const options: RequestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    };
    return await this.request<T>(url, options);
  }
}