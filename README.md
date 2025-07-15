
# 📋 Multi-Step Form with Stepper (React + Tailwind CSS)

A modern multi-step form built using **React.js** and styled with **Tailwind CSS**, featuring:

* Stepper progress indicator.
* Per-step form validation.
* Browser autofill support for contact fields.
* Final success confirmation.
* Console output of submitted form data.

---

## 🚀 Features

* Multi-step wizard form with step navigation.
* Responsive, mobile-friendly, and smooth transitions.
* Full autofill support (`autoComplete` attributes).
* Data logged on submission.
* Clean and modern UI using Tailwind CSS.

---

## 🛠 Tech Stack

* React.js (Functional Components + Hooks)
* Tailwind CSS (for styling)
* Basic HTML5 validation with React state management.

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Awadheshs109/Multi-Step-Form-with-React-and-Tailwind-CSS-Customizable.git

# Navigate to project
cd multi-step-form

# Install dependencies
npm install

# Start development server
npm start
```

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Stepper.jsx          # Step indicator component
│   ├── StepperControl.jsx   # Back/Next/Finish buttons
│   ├── Accounts.jsx         # Step 1: Email & Password form
│   ├── Details.jsx          # Step 2: Contact form (autofill fields)
│   ├── Final.jsx            # Final step confirmation message
│
├── App.js                   # Main form flow
├── index.js
└── index.css                # Tailwind CSS imported here
```

---

## 📊 Form Fields (Autofill Enabled)

* First Name (`given-name`)
* Last Name (`family-name`)
* Email (`email`)
* Password (`new-password`)
* Mobile Number (`tel`)
* Address (`street-address`)
* PIN Code (`postal-code`)

---

## ✅ Usage

1. Fill in details in each step.
2. Use **Back** or **Next** to navigate.
3. On **Finish**, form data is printed in the console.
4. Final confirmation message is displayed.


---

## 💬 Customization

* Replace `console.log()` in `App.js` to handle API submission or storage.
* Update fields or steps easily by modifying `Accounts.jsx` and `Details.jsx`.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---
