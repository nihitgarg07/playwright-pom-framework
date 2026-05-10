# Playwright Automation Framework

Automation framework built using Playwright with:

- UI Automation
- API Automation
- Page Object Model (POM)
- Allure Reporting
- Fixtures
- Reusable Utilities

---

# 📁 Project Structure

```bash
project-root/

├── api/
├── config/
├── fixtures/
├── pages/
├── test_data/
├── tests/
│   ├── api/
│   ├── ui/
├── utils/
├── playwright.config.js
├── package.json
```

---

# 🚀 Features

✅ UI Automation  
✅ API Automation  
✅ Page Object Model  
✅ Reusable API Client  
✅ Fixtures Support  
✅ Allure Reporting  
✅ JSON Test Data Support  
✅ Environment Config Support

---

# 🛠️ Tech Stack

- JavaScript
- Playwright
- Node.js
- Allure Reports

---

# 📦 Installation

```bash
npm install
```

---

# ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run UI tests:

```bash
npx playwright test tests/ui
```

Run API tests:

```bash
npx playwright test tests/api
```

Run specific test:

```bash
npx playwright test --grep "Verify Create Booking"
```

---

# 📊 Allure Reporting

Generate report:

```bash
npx allure generate ./allure-results --clean -o allure-report
```

Open report:

```bash
npx allure open allure-report
```

---

# 🔐 Environment Config

Environment variables are managed using:

```bash
config/env.js
```

---

# 👨‍💻 Author

Nihit