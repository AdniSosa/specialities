const express = require('express');
const app = express();
const PORT = 3000;

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];

  //?Filtrado de usuarios por especialidad
const marketingUsers = usersData.filter(user => user.specialty === 'marketing');
//console.log(marketingUsers);

const developersUsers = usersData.filter(user => user.specialty === 'developers');

const qasUsers = usersData.filter(user => user.specialty === 'QAs');

const saleUsers = usersData.filter(user => user.specialty === 'ventas');


//?Creación de rutas
app.get('/', (req, res) => {
    res.send(`
        <h1>Usuarios por especialidad</h1>
        <ul>
            <li><a href="/marketing">Marketing</a></li>
            <li><a href="/developer">Developers</a></li>
            <li><a href="/qas">QAs</a></li>
            <li><a href="/ventas">Ventas</a></li>
        </ul>`)
})


app.get('/marketing', (req, res) => {
    const marketingSpecialist = marketingUsers.map(user => `<li>Nombre: ${user.name}, Edad: ${user.age}</li>`).join('');
    //console.log(marketingSpecialist);
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Especialistas en Marketing</h1>
            <h2>Número de especialistas: ${marketingUsers.length}</h2>
            <a href="/" >Volver a home</a>
            <ul style="line-height: 25px">${marketingSpecialist}</ul>
        </body>
        </html>
`
    )
})

app.get('/developer', (req, res) => {
    const developerSpecialist = developersUsers.map(user => `<li>Nombre: ${user.name}, Edad: ${user.age}</li>`).join('');
    //console.log(developersUsers);
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Especialistas en Desarrollo Web</h1>
            <h2>Número de especialistas: ${developersUsers.length}</h2>
            <a href="/" >Volver a home</a>
            <ul style="line-height: 25px">${developerSpecialist}</ul>
        </body>
        </html>
        `
    )
})

app.get('/qas', (req, res) => {
    const qasSpecialist = qasUsers.map(user => `<li>Nombre: ${user.name}, Edad: ${user.age}</li>`).join('');

    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Especialistas en QA</h1>
            <h2>Número de especialistas: ${qasUsers.length}</h2>
            <a href="/" >Volver a home</a>
            <ul style="line-height: 25px">${qasSpecialist}</ul>>
        </body>
        </html>
        `
    )
})

app.get('/ventas', (req, res) => {
    const saleSpecialist = saleUsers.map(user => `<li>Nombre: ${user.name}, Edad: ${user.age}</li>`).join('');

    res.send(
        `
       <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Especialistas en QA</h1>
            <h2>Número de especialistas: ${saleUsers.length}</h2>
            <a href="/" >Volver a home</a>
            <ul style="line-height: 25px">${saleSpecialist}</ul>
        </body>
        </html>
        `
    )
})

app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1>');
})

//?Puerto
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
})