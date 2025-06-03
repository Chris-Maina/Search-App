# Architecture Overview

The React Search Application is designed to provide a user-friendly interface for searching data through an API. The architecture follows a component-based structure, leveraging React's capabilities to create reusable components and manage state effectively. The application is built using TypeScript to ensure type safety and improve developer experience.

# Technology Choices

1. **React**: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
2. **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
3. **EventSource API**: Used for handling Server-Sent Events (SSE) to stream search results from the API in real time.
4. **CSS Modules**: A styling approach that scopes CSS to the component level, preventing style conflicts and promoting modularity.
5. **ESLint**: A static code analysis tool for identifying problematic patterns in JavaScript and TypeScript code, ensuring code quality and consistency.
6. **.gitignore**: Used to exclude files and directories such as `node_modules`, build output, environment files, and IDE/editor settings from version control.

# Project Structure

The project is organized into several key directories and files:

- **public/**: Contains the static files for the application.
  - **index.html**: The main HTML file that serves as the entry point for the React application.

- **src/**: The source code for the application.
  - **components/**: Contains reusable React components.
    - **SearchBar/**: A component for user input.
      - **SearchBar.tsx**: The main logic for the SearchBar component.
      - **SearchBar.module.css**: Scoped styles for the SearchBar component.
  - **hooks/**: Contains custom hooks for managing state and side effects.
    - **useSearch.ts**: A hook for handling search logic and streaming API results via SSE.
  - **types/**: Contains TypeScript types and interfaces.
    - **index.ts**: Exports types used throughout the application.
  - **App.tsx**: The main application component that renders the SearchBar and displays results.
  - **index.tsx**: The entry point for the React application, rendering the App component.
  - **index.css**: Global CSS styles for the application.
  - **global.d.ts**: TypeScript declaration file for CSS modules and other global types.

- **.env**: Stores environment variables such as the API base URL (e.g., `REACT_APP_API_BASE_URL`).
- **.eslintrc.json**: Configuration file for ESLint, specifying linting rules.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options.
- **README.md**: Documentation for the project, including setup and usage instructions.
- **.gitignore**: Specifies intentionally untracked files to ignore in the repository.

## Coding Conventions

- Use **default exports** for React components.
- Use **named exports** for utilities, hooks, and types.
- Always define global CSS variables (e.g., colors, font sizes) in `index.css` under the `:root` selector.
- Reuse CSS variables in component-specific CSS modules to ensure consistency across the application.
- Use **semantic HTML elements** (e.g., `<section>`, `<header>`, `<main>`, `<article>`) to improve accessibility and structure.
- Add appropriate **ARIA attributes** (e.g., `aria-label`, `aria-expanded`) to enhance accessibility for screen readers.
- Always refer to this section before adding or modifying code to maintain consistency.

## Dependencies

- Always include `@types/react` and `@types/react-dom` as devDependencies for TypeScript React projects.
- Always include a `global.d.ts` file in `src/` to support CSS modules and other global types.
- Always include a `.gitignore` file to keep unnecessary files out of version control.