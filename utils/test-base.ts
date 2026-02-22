import { test as BaseTest } from '@playwright/test';

interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
}

const testDataForOrder: TestDataForOrder[] = [
    {
        username: "neeshubiet@gmail.com",
        password: "Nee@kumar1234",
        productName: "iphone 13 pro"
    },
    {
        username: "neeshubiet@gmail.com",
        password: "Nee@kumar1234",
        productName: "Zara coat 3"
    }
];

export const customtest = BaseTest.extend<{ testDataForOrder: TestDataForOrder[] }>({
    testDataForOrder: testDataForOrder
});




