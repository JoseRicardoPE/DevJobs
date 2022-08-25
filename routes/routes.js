const express = require('express');
const router = express.Router();
const homeController = require("../controllers/homeController");
const vacanciesController = require("../controllers/vacanciesController");

module.exports = () => {
    // *home
    router.get("/", homeController.showWorks);

    // *Crear vacantes
    router.get("/vacancies/new", vacanciesController.formNewVacancy);

    return router;
}