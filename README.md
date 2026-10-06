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
DriveK-Automotive-Test-Automation-Framework/
│
├── src/
│   ├── fixtures/
│   │   └── testFixtures.ts
│   │
│   └── pages/
│       ├── HomePage.ts
│       ├── VehiclePage.ts
│       └── ComparePage.ts
│
├── tests/
│   └── ui/
│       ├── home.spec.ts
│       ├── vehicle.spec.ts
│       └── compare.spec.ts
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
🧩 Design Pattern — Page Object Model
The framework follows the Page Object Model (POM) design pattern.
Page-specific actions are encapsulated inside dedicated page classes instead of being directly implemented inside test cases.
This keeps test cases focused on what is being validated, while page classes handle how the application is interacted with.
Example
import { Page, expect } from '@playwright/test';
export class VehiclePage {
  constructor(private readonly page: Page) {}
  async openDaciaDuster(): Promise<void> {
    await this.page.goto('https://www.drivek.it/dacia/duster/');
  }
  async verifyVehicleName(): Promise<void> {
    await expect(this.page.locator('body')).toContainText(/Duster/i);
  }
}
Why POM?
- Maintainability – UI changes can be handled within page classes.
- Reusability – Page actions can be reused across multiple tests.
- Readability – Tests focus on business scenarios rather than implementation details.
- Scalability – New pages and workflows can be added without duplicating automation logic.
- Separation of concerns – Test logic and page interaction logic remain separate.
🔧 Playwright Fixtures
The framework uses custom Playwright fixtures to provide page objects directly to test cases.
type Fixtures = {
  homePage: HomePage;
  vehiclePage: VehiclePage;
  comparePage: ComparePage;
};
The fixtures initialize the required page objects:
export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  vehiclePage: async ({ page }, use) => {
    await use(new VehiclePage(page));
  },
  comparePage: async ({ page }, use) => {
    await use(new ComparePage(page));
  }
});
This allows tests to remain clean and focused on the scenario being validated.
Example Test
import { test } from '../../src/fixtures/testFixtures';
test.describe('DriveK - Vehicle', () => {
  test('should display Dacia Duster information', async ({ vehiclePage }) => {
    await vehiclePage.openDaciaDuster();
    await vehiclePage.verifyVehicleName();
  });
});
🧪 Current Test Coverage
Home Page
Current validation includes:
- Navigate to the DriveK homepage
- Verify the page loads successfully
- Verify the expected DriveK URL
- Verify the page body is visible
Vehicle Page
Current validation includes:
- Navigate to the Dacia Duster page
- Verify vehicle information is displayed
- Validate the presence of the Duster vehicle name
Comparison Page
Current validation includes:
- Navigate to the vehicle comparison page
- Verify the comparison page loads successfully
- Verify the page body is visible
🌐 Cross-Browser Testing
The framework currently executes the test suite against:
- Chromium
- Firefox
Configured using Playwright projects:
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] }
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] }
  }
]
The same test suite can therefore be executed against multiple browser engines without changing the test implementation.
⚙️ Playwright Configuration
The framework is configured with:
- Base URL
- Test timeout
- Assertion timeout
- Parallel execution
- Chromium project
- Firefox project
- HTML reporting
- Failure screenshots
- Failure traces
- Failure videos
- CI-specific retries
Example:
use: {
  baseURL: 'https://www.drivek.it',
  trace: 'retain-on-failure',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  headless: true
}
📸 Failure Diagnostics
The framework uses Playwright's built-in debugging capabilities.
Screenshots
Screenshots are captured automatically when a test fails.
Trace
Playwright traces are retained on failure to help investigate:
- Locator failures
- Timing issues
- Navigation problems
- Unexpected page states
Video
Video recordings are retained for failed executions to support debugging and root-cause analysis.
▶️ Getting Started
Prerequisites
Make sure the following are installed:
- Node.js 20+
- npm
- Git
Verify Node.js:
node --version
Verify npm:
npm --version
📦 Installation
Clone the repository:
git clone https://github.com/Chaitanyamark/DriveK-Automotive-Test-Automation-Framework.git
Navigate to the project:
cd DriveK-Automotive-Test-Automation-Framework
Install dependencies:
npm install
Install Playwright browsers:
npx playwright install
🧪 Running Tests
Run the complete test suite
npm test
Run tests in headed mode
npm run test:headed
Run tests using Playwright Inspector
npm run test:debug
Run TypeScript type checking
npm run typecheck
Open the Playwright HTML report
npm run report
📊 Current Test Execution
The current suite executes the tests across Chromium and Firefox.
Example successful execution:
Running 6 tests using 6 workers
✓ [chromium] home
✓ [chromium] vehicle
✓ [chromium] compare
✓ [firefox] compare
✓ [firefox] home
✓ [firefox] vehicle
6 passed
🎯 Test Strategy
The framework is being developed around a layered QA automation strategy.
Functional Testing
Validate important user-facing functionality including:
- Page navigation
- Vehicle information
- Vehicle comparison
- Content validation
Cross-Browser Testing
Execute the same scenarios across:
- Chromium
- Firefox
Regression Testing
Build a reusable automated regression suite that can be executed repeatedly as the application evolves.
Negative Testing
Future scenarios will validate:
- Invalid selections
- Unsupported combinations
- Missing information
- Unexpected application states
🚘 Planned Automotive User Journeys
The next phase of automation will focus on realistic automotive workflows.
Vehicle Discovery
Open DriveK
      ↓
Search for a vehicle
      ↓
Apply filters
      ↓
Select vehicle
      ↓
Verify vehicle details
Vehicle Comparison
Select Vehicle A
       ↓
Select Vehicle B
       ↓
Open Comparison
       ↓
Validate comparison details
Future Network/API Validation
Where suitable and publicly accessible application/network endpoints can be identified, network or API-level validation will be added to complement the UI automation.
🗺️ Project Roadmap
Completed
- [x] Playwright + TypeScript framework
- [x] Page Object Model
- [x] Custom Playwright fixtures
- [x] Chromium testing
- [x] Firefox testing
- [x] TypeScript type checking
- [x] HTML reporting
- [x] Failure screenshots
- [x] Failure traces
- [x] Failure video capture
- [x] Git repository
- [x] Public GitHub repository
In Progress
- [ ] Real vehicle search automation
- [ ] Vehicle filtering scenarios
- [ ] Vehicle selection workflows
- [ ] Vehicle comparison workflow
- [ ] Reusable UI components
- [ ] Data-driven testing
Planned
- [ ] API/network validation
- [ ] Negative test scenarios
- [ ] Smoke and regression tags
- [ ] Environment-based configuration
- [ ] Test data management
- [ ] GitHub Actions CI
- [ ] Automated CI test reports
- [ ] Additional browser coverage
- [ ] Advanced reporting
🔄 CI/CD Roadmap
GitHub Actions integration is planned as part of the next phase of the project.
The intended pipeline:
Developer Push / Pull Request
            ↓
          npm ci
            ↓
Install Playwright Browsers
            ↓
 TypeScript Type Checking
            ↓
   Execute Playwright Tests
            ↓
   Generate HTML Report
            ↓
 Upload Test Artifacts
💡 Why Playwright?
Playwright provides capabilities that make it suitable for modern web automation:
- Multi-browser support
- Automatic waiting
- Powerful locator strategies
- Network interception
- API testing capabilities
- Trace viewer
- Screenshots and video
- Parallel execution
- Built-in test runner
- CI/CD support
This project uses these capabilities to build a maintainable automation framework rather than simple record-and-replay scripts.
🧠 QA Engineering Practices Demonstrated
This project demonstrates practical experience with:
- Test automation architecture
- Page Object Model
- Playwright fixtures
- TypeScript
- Cross-browser testing
- Test isolation
- Reusable automation components
- Assertion strategy
- Failure diagnostics
- Parallel execution
- Test reporting
- Git version control
- CI/CD concepts
🔐 Responsible Testing
This project interacts with a publicly accessible automotive website for testing and portfolio demonstration purposes.
The automation is designed to validate publicly available user journeys.
It does not intentionally submit real customer leads, test-drive requests, purchases, or other consequential forms.
👨‍💻 Author
Chaitanya Desai
QA Automation Engineer | SDET
5.8+ years of experience in QA automation across Automotive and Gaming.
Core Technologies
Playwright TypeScript Selenium Java REST Assured API Testing TestNG Maven Jenkins Git
🔗 Connect
GitHub
https://github.com/Chaitanyamark
LinkedIn
Add your LinkedIn profile URL here.
📌 Project Status
Active Development
This project is continuously evolving toward a production-style QA automation framework with realistic automotive workflows, advanced Playwright capabilities, API/network validation, test data management, CI/CD execution, and enhanced reporting.
### After replacing the file
Save it, then run:
```powershell
git add README.md
git commit -m "docs: improve project documentation"
git push
Then verify:
git status
You should see:
nothing to commit, working tree clean