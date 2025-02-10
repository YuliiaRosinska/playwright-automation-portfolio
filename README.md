# Playwright Automation - Sauce Demo 🛒

Automated end-to-end testing for [Sauce Demo](https://www.saucedemo.com/) using **Playwright + TypeScript**.

## 🚀 Project Overview

This project automates key **E2E user flows** for the **Sauce Demo** e-commerce platform, including:

- ✅ **User login/logout**
- ✅ **Product selection & cart management**
- ✅ **Checkout process validation**

## 📂 Project Structure

- tests
  - login.spec.ts
  - cart.spec.ts
- pages (POM)
  - LoginPage.ts
  - ProductsPage.ts
- config
  - auth.config.ts #Credentials & test data
  - playwright.config.ts
- package.json

## 🛠 Setup & Installation

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-username/playwright-automation.git
```

```sh
cd playwright-automation
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Configure environment variables

Store credentials in GitHub Secrets or create a .env file:

```sh
USERNAME=standard_user
PASSWORD=secret_sauce
```

### ▶️ Running Tests

Run all tests

```sh
npx playwright test
```

Run a specific test file

```sh
npx playwright test tests/login.spec.ts
```

## E2E Test Scenarios

### Login Flow

• ✅ test_successful_login_with_valid_credentials

• ❌ test_login_with_invalid_password_fails

• 🔒 test_redirect_to_login_when_accessing_cart_without_authentication

### Shopping Cart & Checkout

• 🛒 test_add_product_to_cart

• ❌ test_removed_product_not_in_checkout

• 💳 test_complete_purchase_flow

## 🏗 Project Enhancements (Future Work)

- [ ] Integrate Allure Reporting for test insights 📊
- [ ] Implement CI/CD with GitHub Actions 🚀
