# MouseTrap

This is an exploration of react hooks while having fun with content and using react-bootstrap components.

Things used in this web example:
- React: https://reactjs.org/
 - React Hooks: https://reactjs.org/docs/hooks-intro.html
- react-bootstrap: https://react-bootstrap.github.io/components/alerts
- Webpack: https://www.npmjs.com/package/webpack
- eslint: https://www.npmjs.com/package/eslint
- Themes for Bootstrap: https://bootswatch.com

# Hooks

I've used several of the basic hooks, shown in many examples.  One thing that stood out for me, was how to use an effect when calling async functions.  there needs to be an ignore flag to prevent the state from being cleared.  This is shown in the trapdetail.js and trapList.js files.

hooks used so far:
- useState
- useReducer
- useEffect

I'd like to add the useContext for a more global handling of the login state.

# Data

I've abstrated the data interface so the site can be easyly configured to use any backend.  Currenly the site uses local storage.