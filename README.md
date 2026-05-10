# Playwright Automation Framework

A scalable Playwright Automation Framework built using JavaScript with support for:

- UI Automation
- API Automation
- Page Object Model (POM)
- Allure Reporting
- Environment Variables (.env)
- Reusable API Client
- Fixtures
- JSON Test Data Handling

---

# 🚀 Features

✅ UI Automation using Playwright  
✅ API Automation using Playwright Request Context  
✅ Page Object Model (POM) Design Pattern  
✅ Reusable API Client Architecture  
✅ Fixtures Support  
✅ Environment Variable Support (.env)  
✅ JSON Test Data Management  
✅ Allure Reporting Integration  
✅ GitHub Integrated Project Structure  

---

# 📁 Project Structure

```bash
project-root/

├── api/
│   ├── authApi.js
│   ├── bookingApi.js
│
├── config/
│   └── env.js
│
├── fixtures/
│   └── baseTest.js
│
├── pages/
│
├── test_data/
│
├── tests/
│   ├── api/
│   └── ui/
│
├── utils/
│   ├── apiClient.js
│   ├── constants.js
│   ├── fileChooser.js
│   └── openNewPage.js
│
├── .env
├── .gitignore
├── playwright.config.js
├── package.json
└── README.md
```

---

# 🛠️ Tech Stack

- JavaScript
- Playwright
- Node.js
- Allure Reports
- Dotenv

---

# 📦 Installation

Clone repository:

```bash
git clone <your-repository-url>
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Configuration

Create `.env` file in root folder:

```env
UI_BASE_URL=https://practice.expandtesting.com

API_BASE_URL=https://restful-booker.herokuapp.com
```

---

# ▶️ Running Tests

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

Run headed mode:

```bash
npx playwright test --headed
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

# 📌 Framework Highlights

- Centralized API request handling
- Reusable headers and endpoints
- Dynamic token generation
- Reusable fixtures
- Clean folder architecture
- Modular and scalable framework design

---

# 👨‍💻 Author

Nihit Garg