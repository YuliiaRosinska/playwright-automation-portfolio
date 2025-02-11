import { test, expect } from '@playwright/test'
import { credentials } from '@config/auth.config'
import { LoginPage } from '@pages/LoginPage'
import { ProductsPage } from '@pages/ProductsPage'
import { ProductDetailsPage } from '@pages/ProductDetailsPage'
import { convertPricesToNumbers, isAscending, isDescending } from '@utils/utils'

let loginPage: LoginPage
let productsPage: ProductsPage
let productDetailsPage: ProductDetailsPage

test.describe('Products', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    productsPage = new ProductsPage(page)
    productDetailsPage = new ProductDetailsPage(page)

    await loginPage.navigate()
    await loginPage.login(
      credentials.standard_user.username,
      credentials.standard_user.password,
    )
  })

  test('[TC-8] View product details', async () => {
    const productDetails = await productsPage.getProductDetails(1)

    await productsPage.navigateToProductDetails(1)
    await expect(productDetailsPage.backToProducts).toBeVisible()
    await expect(productDetailsPage.productTitle).toHaveText(
      productDetails.title,
    )
    await expect(productDetailsPage.productDescription).toHaveText(
      productDetails.description,
    )
    await expect(productDetailsPage.productPrice).toHaveText(
      productDetails.price,
    )
    await expect(productDetailsPage.addToCartButton).toBeVisible()
  })

  test('[TC-9] Sort products by price', async () => {
    let productsDetails = await productsPage.getAllProductsDetails()

    async function verifySortingForPrices(
      option: string,
      validator: (arr: any[]) => boolean,
    ) {
      await productsPage.productsSort.selectOption(option)
      productsDetails = await productsPage.getAllProductsDetails()
      const numericPrices = convertPricesToNumbers(productsDetails.prices)
      expect(validator(numericPrices)).toBe(true)
    }

    expect(isAscending(productsDetails.titles)).toBe(true)

    await productsPage.productsSort.selectOption('Name (Z to A)')
    productsDetails = await productsPage.getAllProductsDetails()
    expect(isDescending(productsDetails.titles)).toBe(true)

    await verifySortingForPrices('Price (low to high)', isAscending)
    await verifySortingForPrices('Price (high to low)', isDescending)
  })
})
