# Login Form with Validation using Formik

This project demonstrates the implementation of a login form with validation using Formik, a powerful form management library for React. By leveraging Formik, you can streamline form handling, simplify validation, and enhance the user experience of your applications.

## Installation

To run this project locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and visit `http://localhost:3000` to view the login form.

## Usage

The login form includes the following fields:

- Email: An input field for entering the email address.
- Password: An input field for entering the password.
- Submit Button: A button to submit the form.

The form implements the following input validation rules:

- If the email or password fields are empty, an error message "Field required" will be displayed below the respective input field.
- If the email is not in a valid email format, an error message "Username should be an email" will be displayed below the email input field.
- If the email and password pass the validation, an alert box will display the message "Login Successful".

The form also includes the following specific details:

- Email input field: `<input type="text" id="emailField" name="email" />`
- Email error message: `<div id="emailError">{formik.errors.email}</div>`
- Password input field: `<input type="password" id="pswField" name="password" />`
- Password error message: `<div id="pswError">{formik.errors.password}</div>`
- Submit button: `<button type="submit" id="submitBtn">Submit</button>`

## Implementation

The `src/App.js` file contains the code for the login form. It imports the necessary dependencies, such as React and Formik's `useFormik` hook, to handle form state, validation, and submission. The form's initial values are set for the email and password fields. The `onSubmit` function displays an alert with the message "Login Successful" when the form is successfully submitted. The `validate` function performs input validation based on the specified rules and returns an object with error messages, if any.

Feel free to modify the code as needed to suit your requirements.

## Conclusion

Formik is a powerful library that simplifies form management in React applications. This project serves as a practical example of implementing a login form with validation using Formik. By utilizing Formik's features, you can enhance the user experience, ensure data integrity, and facilitate efficient form handling in your applications.