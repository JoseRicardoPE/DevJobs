exports.showWorks = (req, res) => {
    res.render("home", {
        namePage: "devJobs",
        tagline: "Encuentra y publica trabajos para Desarrolladores Web",
        bar: true,
        button: true,
    })
}