# [Shortener](https://ilyaivanov.github.io/shortener)
   React app to wrap bit.ly shortener



##Features

* Based upod [React-Slingshot](https://github.com/coryhouse/react-slingshot). Which includes:
    * Linting and transpiling ECMAScript 2015, SCSS
    * Hot reloading changes
    * Automating production build
* [Bootstrap](getbootstrap.com) integrated via [React-Bootstrap](react-bootstrap.github.io) components
* Integrated [Bootswatch](https://bootswatch.com) theme [Paper](https://bootswatch.com/paper/) (for materialish look and feel)
* Single React.js container for holding state, written in ES6. State is stored in localStorage via mixin
* Stateless presentation componets are pure and presented via functions
* Bootstrap is isolated into a separate selector, so that it won't conflict with Notification library
* Bit.ly specific behaviour is extracted into separate API service
   
   
   
   
##Structure
![image](http://puu.sh/r7yeb/fdd9aa9f11.png)

##Key items

* **node_modules** - external libraries
* **src** - application source codes
    * **api** - behaviour to access external api
    * **components** - react pure, stateless componets
    * **styles** - custom styles and theme configuration from bootswatch
    * **utils** - helper functions
    * **App.js** - root statefull container, which holds immutable state. 
    * **index.ejs** - index.html file using [EJS](http://www.embeddedjs.com/) syntax with placeholders for hot reloading
    * **index.js** - entry point for the application, renders App.js
    * **webpack-public-path.js** - dynamically set the webpack public path at runtime
* **tools** - scripts related to build automation
* **webpack.config.*.js** - Webpack build configuration
  
  
##Installation

* Install [Node.js](https://nodejs.org/)
* Clone this repo **git clone https://github.com/ilyaivanov/shortener.git**
* Go to the folder **cd shortener**
* Install dependencies **npm i**
* Start application **npm start**
* Page will open automatically in the browser
