import { APIRequestContext } from '@playwright/test';

interface LoginPayLoad {
    userEmail: string;
    userPassword: string;
}

interface OrderPayLoad {
    orders: Array<{
        country: string;
        productOrderedId: string;
    }>;
}

interface LoginResponse {
    token: string;
    userId: string;
    message: string;
}

interface OrderResponse {
    message: string;
    productOrderId: string;
    orders: string[];
}

interface ApiResponse {
    token?: string;
    orderId?: string;
}

class APiUtils {
    apiContext: APIRequestContext;
    loginPayLoad: LoginPayLoad;

    constructor(apiContext: APIRequestContext, loginPayLoad: LoginPayLoad) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }
 
    async getToken(): Promise<string> {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
            data: this.loginPayLoad
        }); // 200, 201
        const loginResponseJson = await loginResponse.json() as LoginResponse;
        const token = loginResponseJson.token;
        console.log(token);
        return token;
    }
 
    async createOrder(orderPayLoad: OrderPayLoad): Promise<ApiResponse> {
        let response: ApiResponse = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
            data: orderPayLoad,
            headers: {
                'Authorization': response.token,
                'Content-Type': 'application/json'
            }
        });
 
        const orderResponseJson = await orderResponse.json() as OrderResponse;
        console.log(orderResponseJson);
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;
 
        return response;
    }
}
 
export { APiUtils };