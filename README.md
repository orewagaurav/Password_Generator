# Password Generator

## 🔗 [Live Demo](https://orewagaurav.github.io/Password_Generator/)

A modern React application that generates secure passwords with customizable options. Built with React and styled with Tailwind CSS.

![Password Generator Screenshot](./src/assets/image.png)

## Features

- Generate random passwords with customizable length (6-20 characters)
- Toggle options for including numbers and special characters
- Copy password to clipboard with a single click
- Clean and responsive UI with Tailwind CSS
- Real-time password generation as options change

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher recommended)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

```bash
git clone https://github.com/orewagaurav/passwordgenerator.git
cd passwordgenerator
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Development Server

To start the development server:

```bash
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to view the application.

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## How to Use

1. Adjust the password length using the slider (6-20 characters)
2. Toggle the "Numbers" checkbox to include numbers in your password
3. Toggle the "Characters" checkbox to include special characters
4. Click the "Copy" button to copy the generated password to your clipboard

## Project Structure

```
passwordgenerator/
├── public/            # Static assets
├── src/
│   ├── App.jsx        # Main application component
│   ├── App.css        # Component-specific styles
│   ├── index.css      # Global styles with Tailwind imports
│   ├── main.jsx       # Application entry point
│   └── assets/        # Images and other assets
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
```

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - Code linting

## Customization

### Modifying Password Character Sets

To change the characters used in password generation, modify the `passwordGenerator` function in `App.jsx`:

```jsx
const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numberAllowed) {
    str += "0123456789";
  }
  if (charAllowed) {
    str += "!@#$%^&*()-_=+[]{},:|";
  }
  // Add or modify character sets here
  
  // Password generation logic
  // ...
}, [length, numberAllowed, charAllowed, setPassword]);
```

### Styling

The project uses Tailwind CSS for styling. You can modify the styles by:

1. Editing the Tailwind classes directly in the JSX
2. Creating custom styles in `App.css`
3. Configuring Tailwind in a `tailwind.config.js` file (if you need to extend the default configuration)

## Deployment to GitHub Pages (Vite + React)

To deploy this project using GitHub Pages:

### 1. Install `gh-pages`
Install the GitHub Pages deployment package:
```bash
npm install gh-pages --save-dev
```

### 2. Add `homepage` in `package.json`
Specify the GitHub Pages URL:
```json
"homepage": "https://orewagaurav.github.io/Password_Generator"
```

### 3. Add deploy scripts in `package.json`
Inside the `"scripts"` section:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### 4. Update Vite config
In `vite.config.js`, add:
```js
base: "/Password_Generator/",
```

### 5. Commit changes
Make sure all files are committed:
```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

### 6. Deploy to GitHub Pages
Run the deploy command:
```bash
npm run deploy
```

This builds the app and pushes the `dist/` folder to a new `gh-pages` branch.

### 7. Configure GitHub Pages in the repository
- Go to your repository on GitHub
- Click on **Settings > Pages**
- Under **Source**, choose:
  - Branch: `gh-pages`
  - Folder: `/ (root)`
- Click **Save**

### 8. Visit your deployed site
After a minute or two, your site will be live at:
```
https://orewagaurav.github.io/Password_Generator/
```

### 9. (Optional) Stop tracking `dist/` folder
Make sure `dist/` is listed in `.gitignore`, and remove it from Git tracking:
```bash
git rm -r --cached dist/
git commit -m "Stop tracking dist folder"
git push
```