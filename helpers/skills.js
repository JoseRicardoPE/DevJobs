module.exports = {
    selectedSkills: (selected = [], options) => {
        let skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'JQuery', 'NodeJS', 
        'Angular', 'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apolo', 'GraphQL', 'TypeScript', 
        'PHP', 'Laravel', 'Symfony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', 
        'MVC', 'SASS', 'WordPress', 'TailWindCSS'];

        let html = "";
        skills.forEach(skill => {
            html += `<li class="text-white font-semibold flex flex-auto justify-center items-center border border-lime-300 rounded-lg px-3 py-2 hover:cursor-pointer">${skill}</li>`
        });
        return options.fn().html = html;
    }
}