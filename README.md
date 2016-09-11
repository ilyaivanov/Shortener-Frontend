# Shortener
   React app to wrap bit.ly shortener

Features:

* Based upod [React-Slingshot](https://github.com/coryhouse/react-slingshot). Which includes:
    * Linting and transpiling ECMAScript 2015, SCSS
    * Hot reloading changes
    * Automating production build
* [Bootstrap](getbootstrap.com) integrated via [React-Bootstrap](react-bootstrap.github.io) components
* Integrated [Bootswatch](https://bootswatch.com) theme [Paper](https://bootswatch.com/paper/) (for materialish look and feel)
* Single React.js container for holding state, written in ES6. State is stored in localStorage via mixin
* Leave stateless presentation componets are pure and presented via functions
* Bootstrap is isolated into a separate selector, so that it won't conflict with Notification library
* Bit.ly specific behaviour is extracted into separate API service
   
   
   
   
Structure:

