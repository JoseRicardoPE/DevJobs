// *Importando conexión de Mongoose (Debe ser la primera línea).
const mongoose = require("mongoose");
require("./config/db");

const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./routes/routes.js");

// *Para Mongoose
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo"); // *Paso las variables(session) hacia el paquete ("connect-mongo").

require("dotenv").config({ path: "vars.env" });

const app = express();

// * Habilitar handlebars como view
app.engine("handlebars", exphbs.engine({ defaultLayout: "layout" }));
app.set("view engine", "handlebars");

// *Almacenando la sesión de MongoDB
app.use(cookieParser()); 
app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE })
}));

// * Static files
app.use(express.static("public"));

app.use("/", router());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}/ Server is listening on port ${port}`);
});
