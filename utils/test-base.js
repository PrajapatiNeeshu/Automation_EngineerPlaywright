import { test } from '@playwright/test';

export const customtest = test.extend({
    testDataForOrder: [
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
    ]
});




