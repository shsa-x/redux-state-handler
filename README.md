# Redux State Handler

Redux State Handler is a powerful library that simplifies state management in React applications through its intuitive `getState()` and `setState()` methods. By providing a centralized store for managing state, it enhances the usability of Redux, making it easier for developers to implement state management in their applications. This library abstracts the complexities of Redux, allowing you to focus on building your app without getting bogged down by boilerplate code and configurations. Whether you’re managing simple state or complex application data, Redux State Handler is an excellent choice for a wide range of applications.


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [1. Initialization](#1-initialization)
  - [2. Wrapping Your Application](#2-wrapping-your-application)
  - [3. Using the State](#3-using-the-state)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Features

- Simple API with `getState()` and `setState()` methods
- Provides a centralized store for managing application state.
- Supports both direct value setting and functional updates
- Lightweight and easy to integrate into existing projects

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [React](https://reactjs.org/) (v16.8 or higher)
- [React Redux](https://react-redux.js.org/) (v7.1 or higher)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/) (v1.0 or higher)

## Installation

You can install the library via npm:

```bash
npm install redux-state-handler
```
or, can install with prerequisites

```bash
npm install redux-state-handler react-redux @reduxjs/toolkit
```



# Usage

## 1. Initialization

First, create a useStore.js file to initialize the state.

```useStore.js
import { State } from "redux-state-handler";

const count = new State(1);

export { count };
```


## 2. Wrapping Your Application

Wrap your application with the Handler component in your main.jsx or index.js

```main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Handler } from 'redux-state-handler';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Handler>
      <App />
    </Handler>
  </StrictMode>
);

```

## 3. Using the State

In your component, you can access and update the state as follows:

```App.jsx
import { count } from './useStore';

function App() {
  
  const btnClicked = () => {
    count.setState(currState => currState + 1); // Increment count
  };

  return (
    <>
      <p>{count.getState()}</p>
      <button onClick={btnClicked}>Click me</button>
    </>
  );
}

export default App;


```



# Contributing

We welcome your contributions to the Redux State Handler library! Whether it's a bug fix, new feature, or documentation update, your help is appreciated.


# Contact Us

We’d love to hear from you! If you have any questions, feedback, or suggestions regarding the Redux State Handler library, please feel free to reach out:

- **Email**: [emial](mailto:shivamsahu.tech@gmail.com)
- **Linkedin**: [shsax](https://www.linkedin.com/in/shsax)
- **Twitter**: [@shsa_X](https://x.com/shsa_X)

Your insights and suggestions are invaluable in helping us improve this library!



