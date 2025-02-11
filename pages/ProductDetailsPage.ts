import { type Page } from '@playwright/test'

export class ProductDetailsPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get backToProducts() {
    return this.page.getByTestId('back-to-products')
  }

  get productTitle() {
    return this.page.getByTestId('inventory-item-name')
  }

  get productDescription() {
    return this.page.getByTestId('inventory-item-desc')
  }

  get productPrice() {
    return this.page.getByTestId('inventory-item-price')
  }

  get addToCartButton() {
    return this.page.getByTestId('add-to-cart')
  }
}
