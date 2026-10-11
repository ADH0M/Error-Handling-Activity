# React Error Handling & Activity

## Overview

This project is a hands-on learning project built to explore error handling in React and understand how the Activity component works.

The main idea is to experiment with different types of errors, understand how React handles them, and explore how to control component visibility while preserving its state.

## What I Learned

### Error Boundary

- Built a reusable Error Boundary to catch errors that occur during component rendering.
- Created a custom fallback UI to display error messages and provide recovery options.
- Explored the difference between resetting an Error Boundary and reloading the page.

### Global Error Handling

- Implemented a global error handler to listen for unhandled JavaScript errors and promise rejections.
- Created a separate fallback UI for global errors.
- Explored the limitations of global error handling and why it does not replace Error Boundaries.

### React Activity

- Experimented with the React Activity component to control component visibility using `visible` and `hidden` modes.
- Explored how Activity preserves component state when content is hidden.
- Investigated how effects behave when an Activity component switches between visibility modes.

### Suspense

- Explored the role of Suspense in displaying fallback content while a component is waiting for supported asynchronous content.
- Learned the difference between handling suspended rendering and handling JavaScript errors.

## Key Concepts

- Error Boundaries and fallback UIs.
- Global error handling and unhandled promise rejections.
- Error recovery and resetting component state.
- React Activity and component state preservation.
- Effect cleanup and component visibility.
- The difference between Error Boundaries and Suspense.

## Project Goal

The goal of this project is to build a practical understanding of React error handling and component lifecycle behavior through experimentation, rather than relying on theory alone.

## Technologies

- React
- TypeScript
- Vite
- CSS

## Getting Started

Install the dependencies:

`npm install`

Start the development server:

`npm run dev`

## Resources

- React Error Boundaries
- [React Activity](<https://react.dev/reference/react/Activity>)
- [React Suspense](<https://react.dev/reference/react/Suspense>)
