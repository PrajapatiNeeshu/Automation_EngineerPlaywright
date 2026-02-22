class DashBoardPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator(".card-body");
    this.productstext = page.locator(".card-body b");
    this.cart = page.locator("[routerlink*='cart']");
  }
  async searchProductAddToCart(productName) {
    await this.products.first().waitFor({ state: 'visible' });
    
    const titles = await this.productstext.allTextContents();
    console.log('Available products on dashboard:', titles); 
    
    const count = await this.products.count();
    console.log('Total product count:', count);
    
    let found = false;
    for (let i = 0; i < count; i++) {
      const productText = await this.products.nth(i).locator("b").textContent();
      const productNameLower = productName.trim().toLowerCase();
      const productTextLower = productText ? productText.trim().toLowerCase() : '';
      console.log(`Checking product ${i}: "${productText}" vs searching for "${productName}"`);
      
      if (productTextLower === productNameLower) {
        console.log(`✓ Found matching product: ${productName}`);
        const addToCartButton = this.products.nth(i).locator("text=Add To Cart");
        await addToCartButton.waitFor({ state: 'visible' });
        await addToCartButton.click();
        await this.page.waitForLoadState('networkidle');
        console.log('✓ Product added to cart');
        found = true;
        break;
      }
    }
    
    if (!found) {
      console.warn(`⚠ Product "${productName}" not found on dashboard`);
    }
  }

  async navigateToCart() {
    await this.cart.click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToOrders() {
    const ordersButton = this.page.locator("button[routerlink*='myorders']");
    await ordersButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}

export default DashBoardPage;