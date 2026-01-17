// @ts-check
import { devices } from '@playwright/test';

const config = {
  testDir: './tests',
  retries :2,
  workers: 1,
  /* Maximum time one test can run for. */
  //10-
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  projects : [
    {
      name : 'safari',
      use: {

        browserName : 'webkit',
        headless : true,
        screenshot : 'off',
        trace : 'on',//off,on 
        ...devices['iPhone 11'], 
        viewport: {windowSize:{width:414,height:896}}   
      }

    },
    {
      name : 'chrome',
      use: {

        browserName : 'chromium',
        headless : true,// will run in browser mode it will not  be visible so far mak et good .
         
        screenshot : 'on',
        video: 'retain-on-failure', // capture video only when test fails
        ignoreHttpsErrors:true,
        permissions:['geolocation'],//allow geolocation permission
        geolocation:{latitude:12.9716,longitude:77.5946},//Bangalore location
        //viewport: {windowSize:{width:414,height:896}},
        trace : 'on',//off,on will come in zip file
        ...devices['iPhone 15 Plus'],
     //   viewport : {width:720,height:720}

        //SSL certificate error ignore
        ignoreHTTPSErrors : true
         }

    }
    ]

};

export default config;
//npx playwright test --config=playwright.config\ copy.js --project=safari
//npx playwright test --config=playwright.config\ copy.js --project=chrome

//