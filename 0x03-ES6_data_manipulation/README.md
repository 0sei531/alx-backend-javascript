# JavaScript Data Structures and Array Methods

This project demonstrates the usage of JavaScript array methods (`map`, `filter`, `reduce`), typed arrays, and various data structures including `Set`, `Map`, and `WeakMap`.

## Learning Objectives

By the end of this project, you should be able to explain the following without external references:
- How to use `map`, `filter`, and `reduce` on arrays
- Typed arrays
- The `Set`, `Map`, and `WeakMap` data structures

## Project Requirements

- **Execution Environment**: Ubuntu 18.04 LTS, Node.js 12.11.x
- **Allowed Editors**: vi, vim, emacs, Visual Studio Code
- **File Requirements**:
  - All files must end with a new line
  - A `README.md` file at the root of the project folder is mandatory
  - Code files must have the `.js` extension
  - All functions must be exported
- **Testing and Linting**:
  - Code will be tested using Jest (`npm run test`)
  - Code will be linted using ESLint
  - Code must pass all tests and linting checks (`npm run full-test`)

## Array Methods

### `map()`
Creates a new array populated with the results of calling a provided function on every element in the calling array.

**Syntax**:
```javascript
array.map(callback(currentValue, index, array), thisArg)
