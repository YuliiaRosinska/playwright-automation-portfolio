import { test, expect } from '@playwright/test'
import { credentials } from '@config/auth.config'
import { LoginPage } from '@pages/LoginPage'
import { ProductsPage } from '@pages/ProductsPage'

let loginPage: LoginPage
let productsPage: ProductsPage

test.describe('Login page', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    productsPage = new ProductsPage(page)

    await loginPage.navigate()
  })

  test('[TC-1] Successful login', async () => {
    await loginPage.login(
      credentials.standard_user.username,
      credentials.standard_user.password,
    )
    await expect(productsPage.inventoryList).toBeVisible()
  })

  test('[TC-2] Login with empty username', async () => {
    await loginPage.login('', '')
    await expect(loginPage.errorMessage).toHaveText(
      'Epic sadface: Username is required',
    )
  })

  test('[TC-3] Login with empty password', async () => {
    await loginPage.login(credentials.standard_user.username, '')
    await expect(loginPage.errorMessage).toHaveText(
      'Epic sadface: Password is required',
    )
  })

  test('[TC-4] Login with invalid credentials', async () => {
    await loginPage.login(credentials.standard_user.username, 'wrong_password')
    await expect(loginPage.errorMessage).toHaveText(
      'Epic sadface: Username and password do not match any user in this service',
    )
  })

  test('[TC-5] Login with loched out user', async () => {
    await loginPage.login(
      credentials.locked_out_user.username,
      credentials.locked_out_user.password,
    )
    await expect(loginPage.errorMessage).toHaveText(
      'Epic sadface: Sorry, this user has been locked out.',
    )
  })
})
