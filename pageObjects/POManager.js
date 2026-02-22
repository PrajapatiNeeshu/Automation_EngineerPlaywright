import LoginPage from './LoginPage.js';
import DashBoardPage from './DashBoardPage.js';
import CartPage from './CartPage.js';
import OrdersReviewPage from './OrdersReviewPage.js';
import OrdersHistoryPage from './OrdersHistoryPage.js';

class POManager {
  constructor(page) {
    this.page = page;
    this.loginpage = new LoginPage(this.page);
    this.dashboardpage = new DashBoardPage(this.page);
    this.cartpage = new CartPage(this.page);
    this.ordersreviewpage = new OrdersReviewPage(this.page);
    this.ordershistorypage = new OrdersHistoryPage(this.page);
  }

  getLoginPage() {
    return this.loginpage;
  }

  getloginPage() {
    return this.loginpage;
  }

  getDashboardPage() {
    return this.dashboardpage;
  }

  getCartPage() {
    return this.cartpage;
  }

  getOrdersReviewPage() {
    return this.ordersreviewpage;
  }

  getOrdersHistoryPage() {
    return this.ordershistorypage;
  }
}

export default POManager;