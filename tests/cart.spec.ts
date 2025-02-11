import { test, expect } from '@playwright/test'
import { credentials } from '@config/auth.config'
import { LoginPage } from '@pages/LoginPage'
import { ProductsPage } from '@pages/ProductsPage'
import { CartPage } from '@pages/CartPage'

let loginPage: LoginPage
let productsPage: ProductsPage
let cartPage: CartPage

test.describe('Cart', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    productsPage = new ProductsPage(page)
    cartPage = new CartPage(page)

    await loginPage.navigate()
    await loginPage.login(
      credentials.standard_user.username,
      credentials.standard_user.password,
    )
  })

  test('[TC-6] Add product to cart', async () => {
    await productsPage.addProductToCart(0)
    await productsPage.addProductToCart(3)
    await expect(productsPage.cartBadge).toHaveText('2')
  })

  test('[TC-7] Remove product from cart', async () => {
    await productsPage.addProductToCart(0)
    await productsPage.addProductToCart(1)
    await productsPage.cartButton.click()

    await cartPage.removeProductFromCart(0)
    await expect(productsPage.cartBadge).toHaveText('1')
    await cartPage.removeProductFromCart(0)
    await expect(productsPage.cartBadge).toBeHidden()
  })
})
