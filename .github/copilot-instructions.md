# Copilot Instructions for Rock Paper Scissors Codebase

## Overview

This document provides guidance for AI coding agents to effectively navigate and contribute to the Rock Paper Scissors project. Understanding the architecture, workflows, and conventions of this codebase is essential for productive collaboration.

## Architecture

- **Main Components**: The application is structured around React components, with key components including `ResultDisplay`, `SelectionDisplay`, `WinnerDisplay`, and `QuestionPopupModal`. These components manage the game state and user interactions.
- **Data Flow**: The `AppContext` provides a centralized state management solution, allowing components to access and modify shared state such as player choices, scores, and question answers.
- **Game Flow**: The game follows a multi-phase workflow: `question-phase` (AI asks a question) → `select-phase` (player chooses weapon) → `battle-phase` (computer selects weapon) → `result-phase` (display results).
- **Service Boundaries**: The game logic is encapsulated within the `resultDisplay.jsx` file, which determines the outcome of the game based on player and computer choices.

## Developer Workflows

- **Building the Project**: Use the command `npm run build` to compile the project for production. The build process utilizes Vite for fast development and optimized production builds.
- **Running the Development Server**: Start the development server with `npm run dev`. This command launches Vite, enabling hot module replacement for efficient development.
- **Deploying the Application**: Deploy the application using `npm run deploy`, which utilizes the `gh-pages` package to publish the `dist` directory to GitHub Pages.

## Project-Specific Conventions

- **Component Naming**: Components are named using PascalCase (e.g., `ResultDisplay`, `SelectionDisplay`) to distinguish them from regular JavaScript functions.
- **CSS Modules**: Styles are organized in a `styles` directory, with each component having a corresponding CSS file (e.g., `result-display.css`).
- **Constants**: Constants such as `AI_NAME` are defined in the `constants` directory, promoting reusability and maintainability.

## Integration Points

- **External Dependencies**: The project relies on React and Vite, with dependencies listed in `package.json`. Ensure to install all dependencies using `npm install` before starting development.
- **Cross-Component Communication**: Components communicate through context and props, with the `AppContext` serving as the primary means of sharing state across the application.

## Examples

- **Game Logic**: The `getResult` function in `resultDisplay.jsx` encapsulates the game logic, determining the winner based on player and computer choices. This function is triggered in a `useEffect` hook when both choices are made.
- **Question Phase**: The `QuestionPopupModal` component asks the player a question before weapon selection. This adds an interactive layer to the game and allows for future AI behavior customization based on answers.
- **State Management**: The `resetState` function resets the game state, demonstrating how to manipulate context values to reflect the current game phase. The `questionAnswer` state tracks player responses to questions.
- **Session Recording**: The application tracks detailed session data for each round, including round number, player/AI moves, question ID, answers, and outcomes. This data can be exported to JSON format using the "Export Session Data" button in the score display.

## Conclusion

This document serves as a foundational guide for AI coding agents working within the Rock Paper Scissors codebase. Understanding these principles will facilitate effective contributions and enhance overall productivity.
