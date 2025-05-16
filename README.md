# React Search Application

## Overview
This project is a simple React search application built with TypeScript. It allows users to input a search query and fetch results from an API. The application is structured to promote modularity and reusability of components.

## Technology Choices
- **React**: A JavaScript library for building user interfaces, chosen for its component-based architecture.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **EventSource API**: Used for handling Server-Sent Events (SSE) to stream search results from the API in real time.
- **CSS Modules**: For scoped styling, ensuring that styles are applied only to the components they are intended for.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code, ensuring code quality and consistency.
- **.env File**: Used to store environment variables such as the API base URL, keeping sensitive or environment-specific data out of the source code.
- **.gitignore**: Used to exclude files and directories such as `node_modules`, build output, environment files, and IDE/editor settings from version control.

## Project Structure
```
react-search-app
├── public
│   └── index.html          # Main HTML file serving as the entry point for the React application
├── src
│   ├── components
│   │   └── SearchBar
│   │       ├── SearchBar.tsx        # SearchBar component with input field and submit button
│   │       └── SearchBar.module.css  # CSS styles specific to the SearchBar component
│   ├── hooks
│   │   └── useSearch.ts              # Custom hook for managing search logic and streaming API results via SSE
│   ├── types
│   │   └── index.ts                  # TypeScript types and interfaces used throughout the application
│   ├── App.tsx                       # Main application component rendering SearchBar and results
│   ├── index.tsx                     # Entry point for the React application
│   ├── index.css                     # Global CSS styles for the application
│   └── global.d.ts                   # TypeScript declaration file for CSS modules and other global types
├── .env                              # Environment variables (e.g., API base URL)
├── .eslintrc.json                    # ESLint configuration file
├── package.json                      # npm configuration file listing dependencies and scripts
├── tsconfig.json                     # TypeScript configuration file specifying compiler options
├── README.md                         # Documentation for the project, including setup and usage instructions
├── agent-instructions.md             # Architecture overview, technology choices, and project structure
└── .gitignore                        # Specifies intentionally untracked files to ignore in the repository
```

## Setup Instructions
1. Clone the repository.
2. Navigate to the project directory.
3. Create a `.env` file in the root of the project and add your API base URL:
   ```
   REACT_APP_API_BASE_URL=https://your-api-base-url.com
   ```
4. Run `npm install` to install the dependencies.
5. Run `npm start` to start the development server.
6. Open your browser and go to `http://localhost:3000` to view the application.

## Usage
- Enter a search query in the input field and click the submit button to fetch results.
- The results will be streamed and displayed below the search bar in real time.

## Coding Conventions

- Use **default exports** for React components.
- Use **named exports** for utilities, hooks, and types.
- Always include `@types/react` and `@types/react-dom` as devDependencies for TypeScript React projects.
- Always include a `global.d.ts` file in `src/` to support CSS modules and other global types.
- Always include a `.gitignore` file to keep unnecessary files out of version control.

## License
This project is licensed under the MIT License.