import { type Page } from '@playwright/test'

export class CartPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get cartProducts() {
    return this.page.getByTestId('inventory-item')
  }

  getProductByIndex(index: number) {
    return this.cartProducts.nth(index)
  }

  async removeProductFromCart(productIndex: number) {
    await this.getProductByIndex(productIndex).getByText('Remove').click()
  }
}
