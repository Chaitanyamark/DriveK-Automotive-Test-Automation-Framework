# DriveK Automotive Test Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-1.56%2B-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![Browsers](https://img.shields.io/badge/Browsers-Chromium%20%7C%20Firefox-orange)
![License](https://img.shields.io/badge/License-Portfolio-lightgrey)

A professional **QA automation framework built with Playwright and TypeScript** for testing real-world automotive user journeys on the public [DriveK](https://www.drivek.it/) platform.

The project demonstrates modern test automation practices including **Page Object Model, reusable fixtures, cross-browser testing, TypeScript type safety, automated reporting, and failure diagnostics**.

---

## Project Overview

This project was created as a practical QA automation portfolio to demonstrate how a scalable Playwright framework can be designed and maintained for a real-world automotive web application.

The framework is designed around realistic automotive scenarios such as:

- Automotive website navigation
- Vehicle discovery
- Vehicle information validation
- Vehicle comparison
- Cross-browser validation
- Regression test execution
- CI/CD integration

The framework will continue to evolve as additional UI, API, and end-to-end scenarios are added.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Playwright** | Web UI automation |
| **TypeScript** | Programming language |
| **Node.js** | Runtime environment |
| **Playwright Test** | Test runner and assertions |
| **Page Object Model** | Maintainable page abstraction |
| **Playwright Fixtures** | Reusable test setup |
| **Chromium** | Cross-browser testing |
| **Firefox** | Cross-browser testing |
| **HTML Reporter** | Test execution reporting |
| **Git / GitHub** | Source control |
| **GitHub Actions** | CI/CD integration |

---

## Framework Architecture

```text
drivek-playwright-automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── src/
│   ├── fixtures/
│   │   └── testFixtures.ts
│   │
│   ├── pages/
│   │   ├── HomePage.ts
│   │   ├── VehiclePage.ts
│   │   └── ComparePage.ts
│   │
│   └── utils/
│
├── tests/
│   ├── ui/
│   │   ├── home.spec.ts
│   │   ├── vehicle.spec.ts
│   │   └── compare.spec.ts
│   │
│   └── api/
│
├── test-data/
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md