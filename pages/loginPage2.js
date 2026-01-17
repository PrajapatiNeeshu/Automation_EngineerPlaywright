class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = "#userEmail";
    this.password = "#userPassword";
    this.loginBtn = "#login";
  }
  async open() {
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  }
  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }
}

export default LoginPage;
