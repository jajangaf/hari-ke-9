/*const http = require('http');
const port = 3000;
const server = http.createServer((req, res)=>{
    res.writeHead(200,{
        'content-type': 'text/html',
    });
res.write('Hello World');
res.end();
});

server.listen(port,()=>{
    console.log(`Listening is Listening on port ${port}..`);
});*/

const { name } = require('ejs');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main-layouts');
app.get('/', (req,res) => {
    const mahasiswa =[
        {nama : 'Ade',
            email : 'ade@gmail.com',
        },
        {nama : 'Asep',
            email : 'asep@gmail.com',
        },
        {nama : 'Agus',
            email : 'agus@gmail.com',
        },
    ];
res.render('index', {
    nama : 'Ade',
    title : 'Halaman Home',
    mahasiswa : mahasiswa,
});
});


app.get('./about', (req, res) => {
    res.render('about', {title: 'Halaman About'}
    );
});

app.get('./contact', (req, res) => {
    res.render('contact', {title: 'Halaman Kontak'});
});

app.get('./product/:id', (req, res) => {
    res.send(`product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`);
});

app.use('/', (req,res) => {
    res.status(404);
    res.send('<h1>Test</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})