module.exports = {
    selectedSkills: (selected = [], options) => {
        let skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'JQuery', 'NodeJS', 
        'Angular', 'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apolo', 'GraphQL', 'TypeScript', 
        'PHP', 'Laravel', 'Symfony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', 
        'MVC', 'SASS', 'WordPress', 'TailWindCSS'];

        let html = "";
        skills.forEach(item => {
            html += `
                <li class="text-white font-semibold px-4 py-2 cursor-pointer rounded-md border-2 border-sky-500 bg-cyan-300">${item}</li>
            `;
        });
        return options.fn().html = html;
    }
}