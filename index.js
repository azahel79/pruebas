const App = require("./App/App");

const project = new App();

project.conectarDB();
project.controllers();  
project.middlewares();
project.servidores();
project.listen();