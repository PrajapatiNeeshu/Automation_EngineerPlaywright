import { test } from '@playwright/test';

export const customtest = test.extend({
    testDataForOrder: [
        {
            username: "neeshubiet@gmail.com",
            password: "Nee@kumar1234",
            productName: "ZARA COAT 3"
        },
        {
            username: "neeshubiet@gmail.com",
            password: "Nee@kumar1234",
            productName: "ZARA COAT 3"
        }
    ]
});




