# Test Automation Project

This repository contains an end-to-end test automation framework built with **WebdriverIO**, **Cucumber**, and **TypeScript**.

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- Yarn package manager

### Installation

Install the project dependencies:

```bash
yarn install
```

## 🧪 Running Tests

This project uses a custom test runner script to simplify command-line arguments.

### Standard Run

To run all tests with the default Spec reporter (fast, no report popup):

```bash
yarn test
```

### Filtering by Tags (`-t`)

You can run specific scenarios using Cucumber tags. We have added a shortcut flag `-t` (short for tag) to make this easier.

**Run a specific tag:**
```bash
yarn test -t @quickLaunch
```

**Run with complex tag logic:**
```bash
yarn test -t "@smoke and not @wip"
```

### Generating Reports

To run tests and automatically generate and open the **Allure Report** upon completion:

```bash
yarn test:report
```

You can also combine reporting with tags:

```bash
yarn test:report -t @quickLaunch
```

## 📂 Project Structure

- **`features/`**: Gherkin feature files defining test scenarios.
- **`step-definitions/`**: TypeScript code mapping Gherkin steps to actions.
- **`pages/`**: Page Object Model (POM) classes for interacting with the UI.
- **`scripts/`**: Custom scripts (like our test runner) to handle CLI arguments.