const generateTeam = (team) => {
    console.log(team);
    const html = [];
    const generateManager = (manager) => {
        console.log(manager);
        let managerCard = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${manager.name} <br/>
        <i class="fas fa-mug-hot"></i>Manager</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email:<span id="email><a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>
        `;
        html.push(managerCard);
    }

    const generateEngineer = (engineer) => {
        console.log(engineer);
        let engineerCard = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${engineer.name} <br/>
        <i class="fas fa-glasses"></i>Engineer</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email:<span id="email><a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
        </div>
        `;
        html.push(engineerCard);
    }
    const generateIntern = (intern) => {
        console.log(intern);
        let internCard = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${intern.name} <br/>
        <i class="fas fa-user-graduate"></i>Intern</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email:<span id="email><a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </div>
        `;
        html.push(internCard);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }
    return html.join("");
    }
    module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="9jnerlff23u8ed01np9g6ysbhsh0dvcs" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Team Profile Generator</title>
    </head>
    <body>
    <header>
    <h1>My Team</h1>
    </header>
    <main> ${generateTeam(team)} </main>
    </body>
    </html>
    `;
}
