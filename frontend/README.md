# Frontend - React with Vite

This project uses React with Vite for the frontend. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

## Setup

To get started with the frontend, follow these steps:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## Work Done in Frontend

### Code Editor and Syntax Highlighting

- Integrated a simple code editor using `react-simple-code-editor`.
- Added syntax highlighting using `prismjs` with the "prism-tomorrow" theme.

### Code Review Feature

- Implemented a code review feature that sends the code to the backend API using `axios`.
- Displays the review results using `react-markdown`.

### Styling

- Applied custom styles using CSS to enhance the user interface.
- Ensured responsive design and user-friendly interactions.

## Packages Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development server and optimized production builds.
- **@vitejs/plugin-react**: Vite plugin to support React fast refresh and other React-specific optimizations.
- **eslint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **eslint-plugin-react-hooks**: ESLint rules for React Hooks.
- **eslint-plugin-react-refresh**: ESLint plugin for React Fast Refresh.
- **axios**: A promise-based HTTP client for the browser and Node.js.
- **react-markdown**: A React component to render Markdown.
- **react-simple-code-editor**: A simple code editor with syntax highlighting.
- **prismjs**: A lightweight, extensible syntax highlighter.

## Environment Variables

The project uses the following environment variable:

- `VITE_BACKEND_BASE_URL`: The base URL for the backend API.

## Project Structure

- `src/`: Contains the source code for the React application.
- `public/`: Contains static assets.
- `index.html`: The main HTML file.
- `vite.config.js`: Vite configuration file.
- `.env`: Environment variables file.
- `.gitignore`: Specifies files to be ignored by Git.
- `eslint.config.js`: ESLint configuration file.

## Additional Information

For more information on how to use Vite with React, refer to the [Vite documentation](https://vitejs.dev/guide/).

