# VendorMaster Frontend Application

## Requirements

Develop a frontend application for managing vendor master data.

### Functional Requirements

#### Vendor Management

1. **Vendor List Table**

   - Should provide UI tools for filtering, sorting, and searching (optional).

2. **Vendor Creation Form**

   - Validate phone numbers based on the Austrian phone code.
   - Validate email addresses.
   - Provide a list of countries for phone code selection (optional).

3. **Vendor View/Update Form**

   - Validate phone numbers based on the Austrian phone code when editing.
   - Validate email addresses when editing.
   - Provide a list of countries for phone code selection (optional).

4. **Delete Contact Person**
   - Allow deletion of contact persons from the list table.
   - Allow deletion of contact persons from the view/update form.

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

   - Validate phone numbers based on the Austrian phone code.
   - Validate email addresses.
   - Provide a list of countries for phone code selection (optional).

3. **Contact People View/Update Form**

   - Validate phone numbers based on the Austrian phone code when editing.
   - Validate email addresses when editing.
   - Provide a list of countries for phone code selection (optional).

4. **Delete Contact Person**
   - Allow deletion of contact persons from the list table.
   - Allow deletion of contact persons from the view/update form.

#### User Authentication

- Users should be able to log in via a login page.
- **Admin Users** can create, update, and delete entities (vendor, bank account, contact person).
- **Guest Users** can only view entities.
- Users should be able to log out using a button in the header.

---

### Non-functional Requirements

- The application should be a Single Page Application (SPA).
- Built with `React` as the UI library.
- Use `daisyui` and `tailwind` for styling and appearance.
- The frontend application must be responsive and include a mobile-friendly version.
- Structure the application as an `Nx` monorepo, with each application module encapsulated within separate libraries for effective module logic management.
- Implement state management with `Redux Toolkit`.
- Use `RTK Query` for data fetching.
- Implement form handling and validation with `react-hook-form`.
- Build tables using `TanStack Table`.
- Load the full dataset and implement client-side pagination.
- Implement authentication with a custom Node.js server using predefined (mock) user data.
- Utilize JWT for authorization on both the custom Node.js server and the frontend (optional).
- Dockerize the application and mock backend services (optional).
- Add support for server-side pagination and adjust the frontend to work with server-side pagination (optional).

---

### Note on Class Diagram and Domain Model

No class diagram or domain model is provided, as the entities are decoupled and do not have direct relationships.
