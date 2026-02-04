# 🛍️ Product Management Application

A modern, vanilla JavaScript application for managing products with full CRUD operations, built with Agile methodology and clean architecture principles.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [User Stories](#-user-stories)
- [Git Workflow](#-git-workflow)
- [Testing](#-testing)
- [Code Standards](#-code-standards)
- [Contributing](#-contributing)
- [Team](#-team)
- [License](#-license)

---

## 🎯 Overview

This project is a **Single Page Application (SPA)** that allows users to manage a product catalog. Users can:
- ✅ View all products
- ✅ Add new products
- ✅ Edit existing products
- ✅ Delete products
- ✅ Receive visual feedback on all operations

Built as part of an Agile learning project, this application emphasizes clean code, comprehensive documentation, and test-driven development.

---

## ✨ Features

### Core Functionality
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality for products
- **Real-time Validation**: Client-side form validation with immediate feedback
- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **User Notifications**: Toast notifications for success/error states
- **Smooth UX**: Modal dialogs for confirmations and editing
- **REST API Integration**: Communicates with json-server backend

### Technical Features
- **Vanilla JavaScript**: No framework dependencies, pure ES6+
- **Modular Architecture**: Component-based structure with clear separation of concerns
- **JSDoc Documentation**: Comprehensive code documentation in English
- **End-to-End Testing**: Cypress tests for critical user flows
- **Linear Git History**: Clean, rebased commit history

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | Vanilla JavaScript (ES6+) |
| **HTTP Client** | Fetch API |
| **Backend (Mock)** | json-server |
| **Styling** | CSS3 with custom properties |
| **Testing (E2E)** | Cypress |
| **Testing (Unit)** | Jest |
| **Dev Server** | http-server |
| **Version Control** | Git + GitHub |
| **Code Quality** | ESLint + JSDoc |

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Git** (v2.30.0 or higher)

Check your versions:
```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/jbarn9/agilite_group_b.git
cd agilite_group_b
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- `json-server` - Mock REST API
- `http-server` - Static file server
- `cypress` - E2E testing framework
- `jest` - Unit testing framework
- `npm-run-all` - Run multiple scripts in parallel

### 3. Verify Installation

```bash
# Check if all dependencies are installed
npm list --depth=0
```

---

## 🎮 Usage

### Quick Start

```bash
# Start both API and Frontend servers
npm start
```

This command will:
1. Start `json-server` on `http://localhost:3001`
2. Start `http-server` on `http://localhost:8080`
3. Automatically open your browser to the application

### Individual Commands

If you prefer to run servers separately:

**Terminal 1 - Backend API:**
```bash
npm run start:api
# → API running on http://localhost:3001
# → View products: http://localhost:3001/products
```

**Terminal 2 - Frontend:**
```bash
npm run start:frontend
# → Frontend running on http://localhost:8080
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start both API and frontend servers |
| `npm run start:api` | Start only the json-server API |
| `npm run start:frontend` | Start only the http-server frontend |
| `npm run dev` | Alias for `npm start` |
| `npm test` | Run Jest unit tests |
| `npm run test:e2e` | Open Cypress test runner |
| `npm run test:e2e:headless` | Run Cypress tests in headless mode |

---

## 📁 Project Structure

```
agilite_group_b/
├── src/                              # Frontend source code
│   ├── index.html                    # Main HTML entry point
│   ├── app.js                        # Application controller
│   │
│   ├── components/                   # UI Components
│   │   ├── ProductList/
│   │   │   ├── ProductList.js        # List container component
│   │   │   └── ProductList.css       # List styles
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.js        # Individual product card
│   │   │   └── ProductCard.css       # Card styles
│   │   ├── ProductForm/
│   │   │   ├── ProductForm.js        # Create/Edit form
│   │   │   └── ProductForm.css       # Form styles
│   │   ├── Modal/
│   │   │   ├── Modal.js              # Reusable modal dialog
│   │   │   └── Modal.css             # Modal styles
│   │   └── Notification/
│   │       ├── Notification.js       # Toast notifications
│   │       └── Notification.css      # Notification styles
│   │
│   ├── services/                     # Business logic layer
│   │   ├── api.js                    # HTTP client configuration
│   │   └── productService.js         # Product CRUD operations
│   │
│   ├── models/                       # Data models
│   │   └── Product.js                # Product class with validation
│   │
│   ├── utils/                        # Utility functions
│   │   ├── validators.js             # Input validation helpers
│   │   ├── formatters.js             # Data formatting utilities
│   │   └── notificationManager.js    # Notification queue manager
│   │
│   └── styles/                       # Global styles
│       ├── reset.css                 # CSS reset
│       ├── variables.css             # CSS custom properties
│       └── global.css                # Global styles
│
├── tests/                            # Test files
│   ├── e2e/                          # Cypress E2E tests
│   │   ├── list-products.cy.js
│   │   ├── add-product.cy.js
│   │   ├── edit-product.cy.js
│   │   ├── delete-product.cy.js
│   │   └── notifications.cy.js
│   ├── unit/                         # Jest unit tests
│   │   └── productService.test.js
│   └── fixtures/                     # Test data
│       └── products.json
│
├── db.json                           # json-server database
├── cypress.config.js                 # Cypress configuration
├── jest.config.js                    # Jest configuration
├── package.json                      # Project dependencies
├── package-lock.json                 # Dependency lock file
├── .gitignore                        # Git ignore rules
├── .eslintrc.js                      # ESLint configuration
├── README.md                         # This file
└── IA.md                             # AI prompts documentation
```

---

## 🏗️ Architecture

### Layered Architecture

```
┌─────────────────────────────────────┐
│      PRESENTATION LAYER             │
│   (UI Components + Event Handlers)  │
│  ProductForm, ProductList, Modal... │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      APPLICATION LAYER              │
│    (Orchestration & Flow Control)   │
│         app.js (Controller)         │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│         SERVICE LAYER               │
│      (Business Logic + API)         │
│    productService.js (CRUD)         │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│          MODEL LAYER                │
│       (Data Structures)             │
│         Product.js                  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│          DATA LAYER                 │
│     (json-server REST API)          │
│         db.json                     │
└─────────────────────────────────────┘
```

### Component Communication Flow

1. **User Action** → UI Component (e.g., clicks "Add Product")
2. **Component** → Triggers event handler in `app.js`
3. **Controller (app.js)** → Calls appropriate service method
4. **Service** → Makes HTTP request to API
5. **API Response** → Service returns data to controller
6. **Controller** → Updates UI components with new data
7. **Components** → Re-render with updated state

### Key Design Patterns

- **MVC Pattern**: Model-View-Controller separation
- **Service Layer**: Centralized business logic
- **Component Pattern**: Reusable, self-contained UI elements
- **Observer Pattern**: Event-driven communication
- **Factory Pattern**: Product model instantiation

---

## 📝 User Stories

The project is organized into the following User Stories (US), each developed in its own feature branch:

### US-0: Project Setup (Foundation)
**Branch**: `feature/US-0-setup`

**Description**: Initialize project structure, dependencies, and configuration

**Deliverables**:
- ✅ Base HTML structure
- ✅ Global CSS variables and reset
- ✅ API configuration
- ✅ Development server setup
- ✅ Testing infrastructure

---

### US-1: List Products
**Branch**: `feature/US-1-list-products`

**User Story**: As a user, I want to see a list of all products so that I can browse the catalog.

**Acceptance Criteria**:
- Products are displayed in a grid layout
- Each product shows: name, price, description, stock
- Loading state is shown while fetching data
- Empty state is shown when no products exist
- Error handling for failed API requests

**Technical Tasks**:
- Create `Product` model class
- Implement `getAllProducts()` service method
- Build `ProductList` component
- Build `ProductCard` component
- Write Cypress E2E test for listing

---

### US-2: Add Product
**Branch**: `feature/US-2-add-product`

**User Story**: As a user, I want to add new products so that I can expand my catalog.

**Acceptance Criteria**:
- Form has fields for: name, price, description, stock
- Required fields are marked with asterisks
- Form validates input before submission
- Success notification appears after creation
- Product list refreshes automatically
- Form resets after successful submission

**Technical Tasks**:
- Create `ProductForm` component (create mode)
- Implement `createProduct()` service method
- Add client-side validation
- Integrate with notification system
- Write Cypress E2E test for adding

---

### US-3: Edit Product
**Branch**: `feature/US-3-edit-product`

**User Story**: As a user, I want to edit existing products so that I can update product information.

**Acceptance Criteria**:
- Each product card has an "Edit" button
- Clicking "Edit" opens form with pre-filled data
- Form shows "Update" instead of "Create"
- Success notification appears after update
- Product list reflects changes immediately
- Cancel button returns to create mode

**Technical Tasks**:
- Create `Modal` component
- Extend `ProductForm` for edit mode
- Implement `updateProduct()` and `getProductById()` methods
- Add edit button to `ProductCard`
- Write Cypress E2E test for editing

---

### US-4: Delete Product
**Branch**: `feature/US-4-delete-product`

**User Story**: As a user, I want to delete products so that I can remove outdated items.

**Acceptance Criteria**:
- Each product card has a "Delete" button
- Clicking "Delete" shows confirmation modal
- Confirming deletion removes the product
- Success notification appears after deletion
- Product list refreshes automatically
- Canceling keeps the product

**Technical Tasks**:
- Add confirmation modal (reuse Modal component)
- Implement `deleteProduct()` service method
- Add delete button to `ProductCard`
- Handle deletion errors gracefully
- Write Cypress E2E test for deletion

---

### US-5: User Notifications
**Branch**: `feature/US-5-notifications`

**User Story**: As a user, I want to see notifications for my actions so that I know if operations succeeded or failed.

**Acceptance Criteria**:
- Success notifications are green with checkmark
- Error notifications are red with warning icon
- Notifications auto-dismiss after 3 seconds
- Multiple notifications stack vertically
- Notifications are accessible (ARIA labels)

**Technical Tasks**:
- Create `Notification` component
- Build notification queue manager
- Integrate notifications in all CRUD operations
- Add error handling in service layer
- Write Cypress E2E test for notifications

---

### US-6: Advanced Validation
**Branch**: `feature/US-6-validation`

**User Story**: As a user, I want validation on form inputs so that I can't submit invalid data.

**Acceptance Criteria**:
- Name: required, min 3 characters, max 100 characters
- Price: required, positive number, max 2 decimals
- Description: optional, max 500 characters
- Stock: required, non-negative integer
- Real-time validation as user types
- Submit button disabled when form is invalid
- Clear error messages for each field

**Technical Tasks**:
- Enhance `validators.js` with comprehensive rules
- Add real-time validation to `ProductForm`
- Display inline error messages
- Style invalid fields with red borders
- Write Cypress E2E test for validation

---

## 🌿 Git Workflow

### Branch Strategy

```
main (production)
  └── develop (integration)
      ├── feature/US-0-setup
      ├── feature/US-1-list-products
      ├── feature/US-2-add-product
      ├── feature/US-3-edit-product
      ├── feature/US-4-delete-product
      ├── feature/US-5-notifications
      └── feature/US-6-validation
```

### Workflow Steps

1. **Create Feature Branch**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/US-X-description
   ```

2. **Develop & Commit**
   ```bash
   git add .
   git commit -m "type(scope): message"
   ```

3. **Keep Branch Updated**
   ```bash
   git fetch origin develop
   git rebase origin/develop
   ```

4. **Push to Remote**
   ```bash
   git push origin feature/US-X-description
   ```

5. **Create Pull Request**
   - Go to GitHub
   - Create PR from `feature/US-X` → `develop`
   - Request code review
   - Address feedback

6. **Merge (after approval)**
   ```bash
   # On GitHub: "Squash and merge" or "Rebase and merge"
   # Locally:
   git checkout develop
   git pull origin develop
   git branch -d feature/US-X-description
   ```

### Commit Message Convention

Format: `type(scope): message`

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

**Examples**:
```bash
git commit -m "feat(product-list): add pagination support"
git commit -m "fix(form): resolve validation error on submit"
git commit -m "docs(readme): update installation instructions"
git commit -m "test(e2e): add delete product test"
```

---

## 🧪 Testing

### End-to-End Tests (Cypress)

**Run Tests Interactively**:
```bash
npm run test:e2e
```
- Opens Cypress Test Runner
- Select tests to run
- See tests execute in real browser

**Run Tests in CI/CD**:
```bash
npm run test:e2e:headless
```
- Runs all tests in headless mode
- Generates video recordings
- Suitable for automated pipelines

**Test Files**:
- `tests/e2e/list-products.cy.js` - Tests product listing
- `tests/e2e/add-product.cy.js` - Tests product creation
- `tests/e2e/edit-product.cy.js` - Tests product editing
- `tests/e2e/delete-product.cy.js` - Tests product deletion
- `tests/e2e/notifications.cy.js` - Tests notification system

**Example Test**:
```javascript
describe('Add Product', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should create a new product successfully', () => {
    cy.get('#name').type('New Laptop');
    cy.get('#price').type('1299.99');
    cy.get('#description').type('High-performance laptop');
    cy.get('#stock').type('10');
    cy.get('form').submit();
    
    cy.contains('Product created successfully!').should('be.visible');
    cy.contains('New Laptop').should('be.visible');
  });
});
```

### Unit Tests (Jest)

**Run Tests**:
```bash
npm test
```

**Test Coverage**:
```bash
npm test -- --coverage
```

**Example Test**:
```javascript
import { productService } from '../src/services/productService.js';

describe('productService', () => {
  test('getAllProducts should return array of products', async () => {
    const products = await productService.getAllProducts();
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });
});
```

---

## 📐 Code Standards

### JavaScript Standards

1. **Use ES6+ Features**
   - Arrow functions
   - Template literals
   - Destructuring
   - Async/await
   - Modules (import/export)

2. **Naming Conventions**
   - Variables/Functions: `camelCase`
   - Classes: `PascalCase`
   - Constants: `UPPER_SNAKE_CASE`
   - Private methods: `_prefixWithUnderscore`

3. **JSDoc Documentation**
   ```javascript
   /**
    * Create a new product
    * @param {Object} productData - Product information
    * @param {string} productData.name - Product name
    * @param {number} productData.price - Product price
    * @returns {Promise<Product>} Created product
    * @throws {Error} If creation fails
    */
   async createProduct(productData) {
     // Implementation
   }
   ```

4. **Error Handling**
   ```javascript
   try {
     const product = await productService.createProduct(data);
     showNotification('Success!', 'success');
   } catch (error) {
     console.error('Operation failed:', error);
     showNotification('Error occurred', 'error');
   }
   ```

### CSS Standards

1. **Use CSS Custom Properties**
   ```css
   :root {
     --color-primary: #007bff;
     --color-success: #28a745;
     --color-danger: #dc3545;
   }
   ```

2. **BEM Naming Convention** (optional)
   ```css
   .product-card { }
   .product-card__title { }
   .product-card__title--highlighted { }
   ```

3. **Mobile-First Approach**
   ```css
   /* Mobile styles first */
   .container {
     width: 100%;
   }
   
   /* Desktop styles */
   @media (min-width: 768px) {
     .container {
       width: 750px;
     }
   }
   ```

### File Organization

- One component per file
- Component files include both JS and CSS
- Group related files in folders
- Use meaningful file names

---

## 🤝 Contributing

### For Team Members

1. **Pick a User Story** from the backlog
2. **Create a feature branch** following naming convention
3. **Develop the feature** following code standards
4. **Write tests** for your feature
5. **Document your code** with JSDoc
6. **Create a Pull Request** with detailed description
7. **Request code review** from at least one team member
8. **Address feedback** and make necessary changes
9. **Merge** after approval

### Code Review Checklist

- [ ] Code follows project standards
- [ ] All functions have JSDoc comments
- [ ] No console.log statements (use proper logging)
- [ ] Error handling is implemented
- [ ] UI is responsive
- [ ] Tests are passing
- [ ] No merge conflicts
- [ ] Commit messages are clear

### Pull Request Template

```markdown
## Description
Brief description of changes

## Related User Story
US-X: [Title]

## Changes Made
- Added X feature
- Fixed Y bug
- Updated Z documentation

## Testing
- [ ] Manual testing completed
- [ ] E2E tests passing
- [ ] Unit tests passing

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [ ] Code documented with JSDoc
- [ ] Tests written/updated
- [ ] README updated (if needed)
- [ ] No console errors
```

---

## 👥 Team

**Group B Members**:
- Member 1 - [Role]
- Member 2 - [Role]
- Member 3 - [Role]
- Member 4 - [Role]

**Project Manager**: [Name]  
**Tech Lead**: [Name]  
**QA Lead**: [Name]

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📚 Additional Resources

### Documentation
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [json-server Documentation](https://github.com/typicode/json-server)
- [Cypress Documentation](https://docs.cypress.io/)
- [JSDoc Documentation](https://jsdoc.app/)

### Learning Resources
- [JavaScript.info](https://javascript.info/)
- [CSS Tricks](https://css-tricks.com/)
- [Git Rebase Tutorial](https://www.datacamp.com/fr/tutorial/git-rebase)

### Tools
- [VS Code](https://code.visualstudio.com/) - Recommended IDE
- [Postman](https://www.postman.com/) - API testing
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: `Error: Cannot find module`
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Issue**: `Port 8080 is already in use`
```bash
# Solution: Kill the process or use different port
# macOS/Linux:
lsof -ti:8080 | xargs kill -9

# Windows:
netstat -ano | findstr :8080
taskkill /PID [PID_NUMBER] /F

# Or change port in package.json
"start:frontend": "http-server src -p 8081 -c-1 -o"
```

**Issue**: CORS errors in browser
```bash
# Solution: Ensure json-server is running
npm run start:api

# Check API is accessible:
curl http://localhost:3001/products
```

**Issue**: Changes not reflected in browser
```bash
# Solution: Hard refresh browser
# Chrome/Firefox: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (macOS)

# Or clear cache
# Chrome: DevTools → Network tab → Disable cache
```

**Issue**: Tests failing with "cy is not defined"
```bash
# Solution: Add Cypress types to jsconfig.json
{
  "compilerOptions": {
    "types": ["cypress"]
  }
}
```

---

## 📞 Support

For questions or issues:
1. Check this README
2. Search existing GitHub Issues
3. Create a new GitHub Issue
4. Contact team lead

---

## 🎉 Acknowledgments

- Thanks to all team members for their contributions
- Thanks to the instructors for guidance
- Thanks to the open-source community for the tools

---

**Happy Coding! 🚀**
