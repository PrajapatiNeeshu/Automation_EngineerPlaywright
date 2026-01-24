import {test, expect} from '@playwright/test';
class CartPage
{   
constructor(page)
{
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");

}
async VerifyProductIsDisplayed(productName)
{
    // Wait for page to fully load
    await this.page.waitForLoadState('networkidle');
    
    // Try to find the product with the selector
    const productLocator = this.getProductLocator(productName);
    
    try {
      // First check if the product locator exists
      await productLocator.waitFor({ state: 'visible', timeout: 5000 });
      const bool = await productLocator.isVisible();
      console.log(`Product "${productName}" visibility: ${bool}`);
      expect(bool).toBeTruthy();
    } catch (error) {
      // If not found, try to list all available products
      console.log(`Product not found with h3 selector, checking available products...`);
      const allProducts = await this.page.locator("h3").allTextContents();
      console.log('Available products in cart:', allProducts);
      
      // Check if product exists (case-insensitive)
      const productExists = allProducts.some(p => p.toLowerCase().includes(productName.toLowerCase()));
      console.log(`Product exists in cart: ${productExists}`);
      expect(productExists).toBeTruthy();
    }
}
async Checkout()
{
    await this.checkout.click();
}

 getProductLocator(productName)
{
    return  this.page.locator("h3:has-text('"+productName+"')");//created dyanmically product name 
}

}
export default CartPage;