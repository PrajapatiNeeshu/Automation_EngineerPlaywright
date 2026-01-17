


const {test, expect} = require('@playwright/test');



//Lecture-24 in this lecture we will be discussion about this playwright inspector and playwright code gen and debuggin of playright cde


test('@Web Browser Context-Validating Error login', async ({browser})=>
 {
   
      const context = await browser.newContext();
      const page =  await context.newPage();
    // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
      const userName = page.locator('#username');
      const signIn = page.locator("#signInBtn");
      const cardTitles =  page.locator(".card-body a");
      page.on('request',request=> console.log(request.url()));
      page.on('response',response=> console.log(response.url(), response.status()));
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await page.title());
      //css 
     await userName.fill("rahulshetty");
     await page.locator("[type='password']").fill("learning");
     await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    //type - fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
   console.log(await cardTitles.nth(1).textContent());
   const allTitles = await cardTitles.allTextContents();

   console.log(allTitles);

 });
//lecture 18 rahul sir
test('@Web UI Controls', async ({ page }) => {
  //const documentLink = page.locator("[href* = 'documents-request']");
  const documentLink = page.locator("[href*='documents-request']");

  
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    await userName.fill("rahulshettyacademy");
    await page.locator("[type='password']").fill("learning");
    const dropdown = page.locator("select.form-control");//select.form-control needs to make it .class or tagname.classname i choose tagname.class name
    await dropdown.selectOption("consult"); //only pass the value consult and it will be automatic select selectOption is method selec the dropdown methods
    await page.locator(".radiotextsty").last().click();//select with the help of class  selct last element last(); for user needs to select ye last radio button //for use admin
    //await page.locator(".radiotextsty").first().click(); // for select the admin value
    await page.locator("#okayBtn").click();
   // page.pause(); not needed this pause operation due to is working for that same
  

    //Lecture19
    console.log(await page.locator(".radiotextsty").last().isChecked());//print the value if checked or not should be print the value in this 
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    const termprint = await expect(page.locator("#terms")).toBeChecked();
//lecture 20
    //ischecked and tobe check will be print the false and true value 
               console.log(termprint);
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();// alway will be give the false value in this code..tobetrue another methids is there 
    
    page.locator()
    await expect(documentLink).toHaveAttribute("class", "blinkingText");


    
});
//Lectue 21
test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    //const userName = page.locator('#username');
    //await userName.fill("rahulshettyacademy");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

      const [newPage]= await Promise.all(//promis pending , ejected, fulfilled promise three type of promise in javascripts
//aleay write in [] newpage because it can be some multiple page and single page
     [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled. return the new page event as an object 
// we needs to open wait event before click hame esme clcick hone se phele listen krvana he 
      documentLink.click(),// new page opening 
     // both should be paralle go with these event on this sucessfull
     ]);
     //new page is opened


     //Lecture 22
     const  text = await newPage.locator(".red").textContent();
     //const  text = await page.locator(".red").textContent();
     // if we use page.locator then it will be focus on only parent age only so make it so needs to make it newpage only then it will be workd=s


     console.log(text);
     // y wala print hua he Please email us at mentor@rahulshettyacademy.com with below template to receive response
     const array = text.split("@");
     console.log(array);
     /*  Print hua ye 'Please email us at mentor',
  'rahulshettyacademy.com with below template to receive response '*/

     const domain = array[1].split(" ")[0];
     //rahulshettyacademy.com
     console.log(domain);

     //const usernametext= await page.locator("#username").fill(domain);
     //new code for that
     await page.locator("#username").fill(domain);
     console.log(await page.locator("#username").inputValue());// y dyanamically input value let ahe 
     await page.pause();// playwright inspector ko pause krta he jisse me usme debug kr sakta hu so please make sure it should be wokr in that
     
     
     
     //console.log(usernametext);
     //we can use inputvalue() insteaded when it will be run time filled so needs to input use
     
     //rahulshettyacademy.com

     /*
const [newPage, newpage1, newpage3]= await Promise.all(//promis pending , ejected, fulfilled promise three type of promise in javascripts
//aleay write in [] newpage because it can be some multiple page and single page
     [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled. return the new page event as an object 
// we needs to open wait event before click hame esme clcick hone se phele listen krvana he 
      documentLink.click(),// new page opening 
     // both should be paralle go with these event on this sucessfull
     ]);

You can create multiple window with newpage1 and newpage 2 as well so make it 


     */
  });



  //Lecture - 25 should not not get code gen due it can be done lots of fallback scenario should beused only simple logic for complex secnrion should not be get this section.



  test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  // page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.getByRole('link', { name: 'z10R' }).click();
  await page.getByRole('link', { name: 'Year Extended Warranty by OneAssist' }).click();
  await page.getByRole('button', { name: 'Proceed to Buy (1 item) Buy' }).click();
});

//lectutre-26
