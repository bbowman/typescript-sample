# Todo List React App

A simple and clean todo list application built with React and TypeScript.

![Todo List App](https://github.com/user-attachments/assets/6515a9e2-654a-4c4d-97c1-07027e6867ca)

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Clean, responsive UI
- ✅ Full TypeScript support
- ✅ Unit tests included

![Todo List with Items](https://github.com/user-attachments/assets/34488897-c565-4de5-a4d6-3183f22910e5)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

### Running Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

## Project Structure

```
src/
├── components/
│   ├── AddTodo.tsx       # Component for adding new todos
│   ├── TodoItem.tsx      # Individual todo item component
│   └── TodoList.tsx      # List of todos component
├── types/
│   └── Todo.ts           # TypeScript interface for Todo
├── App.tsx               # Main application component
├── App.css               # Application styles
└── App.test.tsx          # Unit tests
```

## Technologies Used

- React 19
- TypeScript
- Create React App
- CSS3

## License

MIT License