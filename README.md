
# AI Code Reviewer

## Overview

AI Code Reviewer is a project that leverages artificial intelligence to provide code review functionalities. It consists of a frontend built with React and Vite, and a backend built with Node.js and Express. The project aims to help developers improve their code quality by providing automated code reviews.

## Features

- **AI-Powered Code Reviews**: Automatically review code and provide suggestions for improvements.
- **Modern Frontend**: Built with React and Vite for a fast and responsive user experience.
- **Robust Backend**: Built with Node.js and Express to handle API requests and interact with the AI model.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-code-reviewer.git
   cd ai-code-reviewer
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

### Running the Application

#### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`.

#### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Start the backend server:
   ```bash
   npm start
   ```

The backend will be available at `http://localhost:5000`.

### Building for Production

#### Frontend

Build the frontend for production:
```bash
cd frontend
npm run build
```

The output will be in the `dist` directory.

#### Backend

No additional build steps are required for the backend.

### Linting

Run ESLint to check for code issues in the frontend:
```bash
cd frontend
npm run lint
```

## Project Structure

- `frontend/`: Contains the frontend code.
- `backend/`: Contains the backend code.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License.
