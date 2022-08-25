exports.formNewVacancy = (req, res) => {
    res.render("new-vacancy", {
        namePage: "Nueva Vacante",
        tagline: "Llena el formulario y publica tu vacante",
    })
}