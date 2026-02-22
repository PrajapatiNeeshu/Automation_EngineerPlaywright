

//prefered the relstive xpth alwasy
//input[@value = 'Search store'][@type = ''text]
//Xpath havemultiple xpath 

//input[@type = 'submit' and @value = 'Search'] 
//And operator must be tru one 
// with the help of and attribute of that

//Or oerator must be true one 

//input[@type = 'submit1' or @value = 'Search']

//contains methods




import{test,expect,Locator} from "@playwright/test";


test("Xpath demo in playwright", async ({page}) => {
    // Navigate to the page
    await page.goto("https://demowebshop.tricentis.com/");
    
    // Wait for the page to load
    await page.waitForLoadState('domcontentloaded');

    // 1. Logo using Xpath
    const logo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();

    // 2. Find computer related products
    //contains() xpath
    const products: Locator = page.locator("//h2[.//a[contains(@href, 'computer')]]");
    const productCount: number = await products.count();
    console.log("Number of Computer related products ===>", productCount);
    await expect(productCount).toBeGreaterThan(0);


   // await products.textContent();
    //console.log(await products.textContent());
    //Throw error since Text matching with 3 elements. we can not perform any actio
    //  Error:- Strict mode Violation perfor the multiple action on multiple locator


    //

    //products.first().textContent();
    console.log("First computer related product:",await products.first().textContent());
    console.log("Last computer related product:",await products.last().textContent());
    console.log("Nth computer related product:",await products.nth(2).textContent());
    //below allTextContents will itrate the all product type of the all comman text
    //group of matching the group of methods

const  productTitle : String[] = await products.allTextContents();
console.log("All computer related title==>",productTitle)
for(let pt of productTitle){
    console.log(pt)
}



//start-with() method 

const buildingproduct:Locator = await page.locator("//h2/a[starts-with(@href , '/build')]")
//multiple elements with this
const count:number = await buildingproduct.count();
console.log(count);
expect(count).toBeGreaterThan(0);


//text() -- funcstion of the product 
const reglink = page.locator("//a[.= 'Register']");
await expect(reglink).toBeVisible();

//last() function

const lastitem:Locator= await page.locator("//div[@class = 'column follow-us']//li[last()]");
//expect(lastitem).toBeVisible();
expect(lastitem).toBeVisible();
console.log("last item :",await lastitem.textContent())

//position() --will extract the element based on the position

const position:Locator= await page.locator("//div[@class = 'column follow-us']//li[position()=3]");
expect(position).toBeVisible();
console.log("position :",await position.textContent())

//dynamic Xpath
//contains() and "or". and text() = start or text()= start xpth //button[@name = 'start' or @name = 'stop'] starts-with(@name, 'st')

















}




)




