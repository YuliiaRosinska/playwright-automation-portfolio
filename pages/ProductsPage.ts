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

  get inventoryItems() {
    return this.inventoryList.getByTestId('inventory-item')
  }

  get productsSort() {
    return this.page.getByTestId('product-sort-container')
  }

  getProductByIndex(index: number) {
    return this.inventoryItems.nth(index)
  }

  async navigateToProductDetails(index: number) {
    await this.getProductByIndex(index).locator('.inventory_item_name').click()
  }

  async getProductDetails(index: number) {
    const product = this.getProductByIndex(index)
    return {
      title: await product.locator('.inventory_item_name').textContent(),
      description: await product.locator('.inventory_item_desc').textContent(),
      price: await product.locator('.inventory_item_price').textContent(),
    }
  }

  async getAllProductsDetails() {
    const products = this.inventoryItems
    return {
      titles: await products.locator('.inventory_item_name').allTextContents(),
      prices: await products.locator('.inventory_item_price').allTextContents(),
    }
  }

  async addProductToCart(productIndex: number) {
    await this.getProductByIndex(productIndex).getByText('Add to cart').click()
  }
}
