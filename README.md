The goal of this project is to enable the user to have access to a app that can be used to keep track of the user todos and also store the information for future reference purposes.

# `Api`

Recommended API json placeholder todo api was used.

##### `Json placeholder specification`


```
"https://jsonplaceholder.typicode.com/todos/"

```


# `Frontend`

##### `Packages`

[React & ReactDOM 18.2.0](https://reactjs.org/)<br>

[next 12.2.2](https://nextjs.org/): It lets you build server-side rendering and static web applications using React. It's a great tool to build your next website. It has many great features and advantages, which can make Nextjs your first option for building your next web application <br>

[Emotion](https://emotion.sh/docs/introduction): Emotion is a library designed for writing css styles with JavaScript<br>

[Redux 4.2.0](https://redux.js.org/): A Predictable State Container for JS Apps<br>

[@reduxjs/toolkit 1.8.3"](https://redux-toolkit.js.org/):The Redux Toolkit package is intended to be the standard way to write Redux logic, it is opinionated, batteries-included toolset for efficient Redux development<br>

[TypeScript 4.7.4](https://www.typescriptlang.org/): Adds types to JavaScript to help you speed up the development by catching errors before you even run the JavaScript code.<br>

[Material UI 5.8.7](https://mui.com/): It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.
<br>

[React-icons 4.4.0](https://react-icons.github.io/react-icons/): Include popular icons in your React projects easily <br>

[axios 0.27.2](https://axios-http.com/): Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface. <br>

##### `Usage`

To install dependencies:

```
npm install or yarn
```

To start the server:

```
npm dev or yarn dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Functionalities`

1. A user can add a new todo.

2. A user can edit a todo.

3. A user can delete a todo.

4. A user can double click on a todo to toggle between completed and incomplete todo.

5. A user can search a todo by name.

6. A user can filter by completed and all.

7. The index page was rendered statically from the next js server for better SEO performance.

8. Browser storage was used to store the todo list, to enhance user experience.

9. A user can move between todos through the index page from pagination.

### `Helper Functions`

Four helper functions were used

1. Axios Configuration: This was used to configure axios.

2. FromLocal: This function was used to get todos from the browser local storage system.

3. ToLocal: This function was used to store todos in the browser local storage system.

4. SortById: This function was used to sort the todos in descending order of preference.

