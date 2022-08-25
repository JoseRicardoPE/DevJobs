const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slug");
const shortId = require("shortid");

const vacanciesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "El nombre de la vacante es obligatorio",
        trim: true,
    }, 
    company: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
        required: "La ubicación es obligatoria",
    },
    salary: {
        type: String,
        default: 0,
        trim: true,
    }, 
    agreement: {
        type: String,
    },
    description: {
        type: String,
        trim: true,
    },
    url: {
        type: String,
        lowercase: true,
    },
    skills: [String],
    candidates: [{
        name: String,
        email: String,
        cv: String,
    }]
})

vacanciesSchema.pre("save", (next) => {
    // *Crear la url
    const url = slug(this.title);
    this.url = `${url}-${shortId.generate()}`;

    next();
});

module.exports = mongoose.model("Vacancy", vacanciesSchema); 