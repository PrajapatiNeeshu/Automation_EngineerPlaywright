import LoginPage from './LoginPage';
import DashBoardPage from './DashBoardPage';
import CartPage from './CartPage';
import OrdersReviewPage from './OrdersReviewPage';
import OrdersHistoryPage from './OrdersHistoryPage';
import { Page } from '@playwright/test';

class POManager {
  private page: Page;
  private loginpage: LoginPage;
  private dashboardpage: DashBoardPage;
  private cartpage: CartPage;
  private ordersreviewpage: OrdersReviewPage;
  private ordershistorypage: OrdersHistoryPage;

  constructor(page: Page) {
    this.page = page;
    this.loginpage = new LoginPage(this.page);
    this.dashboardpage = new DashBoardPage(this.page);
    this.cartpage = new CartPage(this.page);
    this.ordersreviewpage = new OrdersReviewPage(this.page);
    this.ordershistorypage = new OrdersHistoryPage(this.page);
  }

  getLoginPage(): LoginPage {
    return this.loginpage;
  }

  getDashboardPage(): DashBoardPage {
    return this.dashboardpage;
  }

  getCartPage(): CartPage {
    return this.cartpage;
  }

  getOrdersReviewPage(): OrdersReviewPage {
    return this.ordersreviewpage;
  }

  getOrdersHistoryPage(): OrdersHistoryPage {
    return this.ordershistorypage;
  }
}

export default POManager;