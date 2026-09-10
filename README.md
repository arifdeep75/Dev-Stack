# Dev Stack Builder

## Project Name

Dev Stack Builder

## Description

Dev Stack Builder is a responsive web application where users can explore different development technologies and build their own ideal technology stack. Users can add technologies, remove them, and select only one technology from each category.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- JSON

## Features

### 1. Build Your Own Stack
Users can add technologies to their personal stack and remove them whenever they want.

### 2. One Technology Per Category
The application prevents users from selecting multiple technologies from the same category.

### 3. Responsive Design
The website is responsive and works on mobile, tablet, and desktop devices. It also includes a responsive navbar and footer.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It is used in React to make UI code easier to write and understand.

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component and can change over time.

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to store and update changing data in a component. In this project, I used it to manage the technologies, selected stack, and loading state.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used for side effects such as fetching data. I used it to load the technology data from the local JSON file when the component first renders.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. This helps React update the correct item efficiently when the list changes.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it to show the "Your stack is empty" message when no technology is selected.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from a parent component to a child component using props. A child can send something back by calling a function that was passed to it as a prop.

For example, `TechnologySection` passes technology data and the `onAdd` function to `TechnologyCard`. When the user clicks the button, `TechnologyCard` calls `onAdd`, and the parent updates the stack.