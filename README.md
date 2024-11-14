# VendorMaster Frontend Application

This application is designed to manage vendor data, enabling users to create, update, and retrieve vendor information with ease.

## Demo

## Links

- [Repository](https://github.com/ectuser/vendor-master)
- [Closed Issues](https://github.com/ectuser/vendor-master/issues?q=is%3Aissue+is%3Aclosed)
- [Closed PRs](https://github.com/ectuser/vendor-master/pulls?q=is%3Apr+is%3Aclosed)

## How to Run

### Using Docker (Preferred)

1. Ensure Docker is installed.
2. Run `docker compose up`.

### Using Node.js

1. Install Node.js (tested with v20.12.2).
2. Clone the repository: `git clone https://github.com/ectuser/vendor-master.git`
3. Navigate to the project directory: `cd vendor-master`
4. Install dependencies: `npm install`
5. Start the development server: `npm run dev`

## Technologies Used

- **React**: UI library
- **Tailwind CSS**, **DaisyUI**: Styling solutions
- **Nx**: Tooling for managing multiple apps and feature libraries
- **Docker**: For quick local setup
- **Redux**: State management
- **React Hook Form**, **@tanstack/react-table**: Form handling and table data manipulation
- **Express**, **JWT**, **Mock Config Server**: Mock backend for authorization and API testing

## Project Structure

The project structure partially follows `Nx` guidelines.

The main frontend application is organized into:

- **Business Features** (`libs/features`): Core business logic and feature components.
- **App Tools** (`libs/app`): Reusable application utilities.
- **Entry File** (`apps/vendor-master`): Main entry point for the application.

Additionally, **`apps/auth-backend`** is included as mock service for user authorization.

## Requirements

### Important note

> For this project, I focused primarily on delivering complete functionality for Vendor Management. While the Bank Account Domain and Contact Person Domain were considered, their implementation was set aside. This decision was made because these domains follow a similar pattern to Vendor Management. Prioritizing the core vendor functionalities enabled a more complete and feature-rich solution for Vendor Management.

### Goal

Develop a frontend application for managing vendor master data.

### Functional Requirements

#### Vendor Management

1. **Vendor List Table**

   - Should provide UI tools for filtering, sorting, and searching (optional).

2. **Vendor Creation Form**

   - Validate phone numbers. [DONE]
   - Validate email addresses. [DONE]
   - Provide a list of countries for phone code selection (optional).

3. **Vendor View/Update Form**

   - Validate phone numbers when editing. [DONE]
   - Validate email addresses when editing. [DONE]
   - Provide a list of countries for phone code selection (optional).

4. **Delete Contact Person**
   - Allow deletion of contact persons from the list table. [DONE]
   - Allow deletion of contact persons from the view/update form. [DONE]

#### User Authentication

- Users should be able to log in via a login page. [DONE]
- **Admin Users** can create, update, and delete entities. [DONE]
- **Guest Users** can only view entities. [DONE]
- Users should be able to log out using a button in the header. [DONE]

#### Bank Account Management

1. **Bank Accounts List Table**

   - Should provide UI tools for filtering, sorting, and searching (optional).

2. **Bank Account Creation Form**

   - Validate IBAN (optional).
   - Validate BIC (optional).

3. **Bank Account View/Update Form**

   - Validate IBAN when editing (optional).
   - Validate BIC when editing (optional).

4. **Delete Contact Person**
   - Allow deletion of contact persons from the list table.
   - Allow deletion of contact persons from the view/update form.

#### Contact Person Management

1. **Contact People List Table**

   - Should provide UI tools for filtering, sorting, and searching (optional).

2. **Contact People Creation Form**

   - Validate phone numbers.
   - Validate email addresses.
   - Provide a list of countries for phone code selection (optional).

3. **Contact People View/Update Form**

   - Validate phone numbers when editing.
   - Validate email addresses when editing.
   - Provide a list of countries for phone code selection (optional).

4. **Delete Contact Person**
   - Allow deletion of contact persons from the list table.
   - Allow deletion of contact persons from the view/update form.

---

### Non-functional Requirements

- The application should be a Single Page Application (SPA). [DONE]
- Built with `React` as the UI library. [DONE]
- Use `daisyui` and `tailwind` for styling and appearance. [DONE]
- The frontend application must be responsive and include a mobile-friendly version. [DONE]
- Structure the application as an `Nx` monorepo, with each application module encapsulated within separate libraries for effective module logic management. [DONE]
- Implement state management with `Redux Toolkit`. [DONE]
- Use `RTK Query` for data fetching. [DONE]
- Implement form handling and validation with `react-hook-form`. [DONE]
- Build tables using `TanStack Table`. [DONE]
- Load the full dataset and implement client-side pagination.
- Implement authentication with a custom Node.js server using predefined (mock) user data. [DONE]
- Include an Error Boundary to catch and handle errors in the UI (optional). [DONE]
- Utilize JWT for authorization on both the custom Node.js server and the frontend (optional). [DONE]
- Dockerize the application and mock backend services (optional). [DONE]
- Add support for server-side pagination and adjust the frontend to work with server-side pagination (optional).

---

### Note on Class Diagram and Domain Model

No class diagram or domain model is provided, as the entities are decoupled and do not have direct relationships.
