import {Page,Locator,expect} from '@playwright/test';


class OrdersHistoryPage
{
page:Page;
ordersTable:Locator;
rows:Locator;
orderdIdDetails:Locator;

//in ts we needs to declare the project key value as well for every locator
constructor(page:Page)
{
    this.page = page;
this.ordersTable = page.locator("tbody");
this.rows = page.locator("tbody tr");
this.orderdIdDetails =page.locator(".col-text");
}
async searchOrderAndSelect(orderId: string): Promise<void>
{

    await this.ordersTable.waitFor();
for(let i: number = 0; i < await this.rows.count(); ++i)
 {
    const rowOrderId: string | null = await this.rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderId ?? ""))
    {
        await this.rows.nth(i).locator("button").first().click();
        break;
    }
 }

}

async getOrderId()
{
    return await this.orderdIdDetails.textContent();
}

}
export default OrdersHistoryPage;
