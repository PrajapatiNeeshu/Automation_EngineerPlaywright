"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiHelper = void 0;
const test_1 = require("@playwright/test");
class ApiHelper {
    constructor(request, baseURL) {
        this.request = request;
        this.baseURL = baseURL;
    }
    get(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
                const response = yield this.request.get(`${this.baseURL}${endpoint}${queryString}`);
                return {
                    status: response.status(),
                    ok: response.ok(),
                    data: response.ok() ? yield response.json() : undefined
                };
            }
            catch (error) {
                return {
                    status: 500,
                    ok: false,
                    error: (error === null || error === void 0 ? void 0 : error.message) || 'Unknown error occurred'
                };
            }
        });
    }
    post(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.request.post(`${this.baseURL}${endpoint}`, {
                    data
                });
                return {
                    status: response.status(),
                    ok: response.ok(),
                    data: response.ok() ? yield response.json() : undefined
                };
            }
            catch (error) {
                return {
                    status: 500,
                    ok: false,
                    error: (error === null || error === void 0 ? void 0 : error.message) || 'Unknown error occurred'
                };
            }
        });
    }
    put(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.request.put(`${this.baseURL}${endpoint}`, {
                    data
                });
                return {
                    status: response.status(),
                    ok: response.ok(),
                    data: response.ok() ? yield response.json() : undefined
                };
            }
            catch (error) {
                return {
                    status: 500,
                    ok: false,
                    error: (error === null || error === void 0 ? void 0 : error.message) || 'Unknown error occurred'
                };
            }
        });
    }
    delete(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.request.delete(`${this.baseURL}${endpoint}`);
                return {
                    status: response.status(),
                    ok: response.ok()
                };
            }
            catch (error) {
                return {
                    status: 500,
                    ok: false,
                    error: (error === null || error === void 0 ? void 0 : error.message) || 'Unknown error occurred'
                };
            }
        });
    }
    validateSuccessResponse(response_1) {
        return __awaiter(this, arguments, void 0, function* (response, expectedStatus = 200) {
            (0, test_1.expect)(response.ok).toBeTruthy();
            (0, test_1.expect)(response.status).toBe(expectedStatus);
            (0, test_1.expect)(response.data).toBeDefined();
        });
    }
    validateErrorResponse(response, expectedStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, test_1.expect)(response.ok).toBeFalsy();
            (0, test_1.expect)(response.status).toBe(expectedStatus);
            (0, test_1.expect)(response.data).toBeUndefined();
        });
    }
}
exports.ApiHelper = ApiHelper;
