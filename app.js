const express = require('express') //importar el paquete express
const app = express()
const hbs = require('hbs')
const port = 8182 //Definir el puerto

app.use(express.static('public')); //establecer el directorio en que se escuentra el archivo html

hbs.registerPartials(__dirname + '/public/views/partials', function(err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views')

app.get('/', (req, res)=>{
    //res.send('Hola mundo')
    res.render('index.hbs',{
        nombre: 'index.hbs'
    })
})

app.get('/index',(req,res)=>{
    res.sendFile(__dirname + '/public/views/index.hbs')
})


app.get('/Contacto', (req,res)=>{
    res.send('Contacto')
})

// app.get('*', (req,res)=>{
//     //res.send('Pagina no encontrada')
//     res.sendFile(__dirname + '/public/404.hbs'); //llamar a la pagina
// })

app.listen(port,() => {
    console.log(`Escuchando el puerto ${port}`)
})