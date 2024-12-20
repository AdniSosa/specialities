const { marketingUsers, developersUsers, qasUsers, saleUsers } = require('./users');
const express = require('express');
const app = express();
const PORT = 3000;


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
    const marketingSpecialist = marketingUsers.map(user => `<li>${user}</li>`).join('');
    //console.log(marketingSpecialist);
    res.send(
        `
        <h1>Especialistas en Marketing</h1>
        <ul style="list-style-type: none;">
            <li><a href="/" >Volver a home</a></li>
        </ul>
        <ul>${marketingSpecialist}</ul>`
    )
})

app.get('/developer', (req, res) => {
    const developerSpecialist = developersUsers.map(user => `<li>${user}</li>`).join('');
    //console.log(developersUsers);
    res.send(
        `
        <h1>Especialistas en Desarrollo Web</h1>
        <ul style="list-style-type: none;">
            <li><a href="/" >Volver a home</a></li>
        </ul>
        <ul>${developerSpecialist}</ul>`
    )
})

app.get('/qas', (req, res) => {
    const qasSpecialist = qasUsers.map(user => `<li>${user}</li>`).join('');

    res.send(
        `
        <h1>Especialistas en QA</h1>
        <ul style="list-style-type: none;">
            <li><a href="/" >Volver a home</a></li>
        </ul>
        <ul>${qasSpecialist}</ul>`
    )
})

app.get('/ventas', (req, res) => {
    const saleSpecialist = saleUsers.map(user => `<li>${user}</li>`).join('');

    res.send(
        `
        <h1>Especialistas en QA</h1>
        <ul style="list-style-type: none;">
            <li><a href="/" >Volver a home</a></li>
        </ul>
        <ul>${saleSpecialist}</ul>`
    )
})

app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1>');
})

//?Puerto
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
})