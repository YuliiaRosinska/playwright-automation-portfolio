import { type Page } from '@playwright/test'

export class ProductsPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get cartButton() {
    return this.page.getByTestId('shopping-cart-link')
  }

  get cartBadge() {
    return this.page.getByTestId('shopping-cart-badge')
  }

  get inventoryList() {
    return this.page.locator('.inventory_list')
  }

  getProductByIndex(index: number) {
    return this.inventoryList.getByTestId('inventory-item').nth(index)
  }

  addProductToCart(productIndex: number) {
    return this.getProductByIndex(productIndex).getByTestId(
      'add-to-cart-sauce-labs-backpack',
    )
  }
}
