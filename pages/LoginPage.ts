import { type Page } from '@playwright/test'

export class LoginPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get loginBox() {
    return this.page.locator('.login-box')
  }

  get usernameField() {
    return this.loginBox.locator('#user-name')
  }

  get passwrodField() {
    return this.loginBox.locator('#password')
  }

  get loginButton() {
    return this.loginBox.locator('#login-button')
  }

  get errorMessage() {
    return this.loginBox.locator('.error-message-container')
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/')
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username)
    await this.passwrodField.fill(password)
    await this.loginButton.click()
  }
}
