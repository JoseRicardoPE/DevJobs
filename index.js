const express = require("express");
const exphbs = require("express-handlebars")
const router = require("./routes/routes.js");

const app = express();

// * Habilitar handlebars como view
app.engine("handlebars", exphbs.engine({ defaultLayout: "layout" }));
app.set("view engine", "handlebars");

// * Static files
app.use(express.static("public"));

app.use("/", router());

const port = 5000;
app.listen(port, () => {
    console.log(`http://localhost:${port}/ Server is listening on port ${port}`)
});
