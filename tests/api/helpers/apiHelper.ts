import { APIRequestContext, expect } from '@playwright/test';

export interface ApiResponse<T> {
    status: number;
    ok: boolean;
    data?: T;
    error?: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export class ApiHelper {
    private baseURL: string;
    private request: APIRequestContext;

    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }

    async get<T>(endpoint: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
        try {
            const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
            const response = await this.request.get(`${this.baseURL}${endpoint}${queryString}`);
            
            return {
                status: response.status(),
                ok: response.ok(),
                data: response.ok() ? await response.json() : undefined
            };
        } catch (error: any) {
            return {
                status: 500,
                ok: false,
                error: error?.message || 'Unknown error occurred'
            };
        }
    }

    async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
        try {
            const response = await this.request.post(`${this.baseURL}${endpoint}`, {
                data
            });

            return {
                status: response.status(),
                ok: response.ok(),
                data: response.ok() ? await response.json() : undefined
            };
        } catch (error: any) {
            return {
                status: 500,
                ok: false,
                error: error?.message || 'Unknown error occurred'
            };
        }
    }

    async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
        try {
            const response = await this.request.put(`${this.baseURL}${endpoint}`, {
                data
            });

            return {
                status: response.status(),
                ok: response.ok(),
                data: response.ok() ? await response.json() : undefined
            };
        } catch (error: any) {
            return {
                status: 500,
                ok: false,
                error: error?.message || 'Unknown error occurred'
            };
        }
    }

    async delete(endpoint: string): Promise<ApiResponse<void>> {
        try {
            const response = await this.request.delete(`${this.baseURL}${endpoint}`);

            return {
                status: response.status(),
                ok: response.ok()
            };
        } catch (error: any) {
            return {
                status: 500,
                ok: false,
                error: error?.message || 'Unknown error occurred'
            };
        }
    }

    async validateSuccessResponse(response: ApiResponse<any>, expectedStatus = 200) {
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(expectedStatus);
        expect(response.data).toBeDefined();
    }

    async validateErrorResponse(response: ApiResponse<any>, expectedStatus: number) {
        expect(response.ok).toBeFalsy();
        expect(response.status).toBe(expectedStatus);
        expect(response.data).toBeUndefined();
    }
}