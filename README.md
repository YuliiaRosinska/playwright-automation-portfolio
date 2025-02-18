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
  - ...
- pages (POM)
  - LoginPage.ts
  - ProductsPage.ts
  - ...
- config
  - auth.config.ts
  - playwright.config.ts
- package.json

## 🛠 Setup & Installation

### 1️⃣ Clone the repository

```sh
git clone https://github.com/YuliiaRosinska/playwright-automation-portfolio.git
```

```sh
cd playwright-automation-portfolio
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
