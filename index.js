const express = require("express");
const exphbs = require("express-handlebars")
const router = require("./routes/routes.js");

require("dotenv").config({path: "vars.env"})

const app = express();

// * Habilitar handlebars como view
app.engine("handlebars", exphbs.engine({ defaultLayout: "layout" }));
app.set("view engine", "handlebars");

// * Static files
app.use(express.static("public"));

app.use("/", router());

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`http://localhost:${port}/ Server is listening on port ${port}`)
});
