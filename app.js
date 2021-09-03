const express = require('express');
const app = express();

const path =require('path');
const port = 3000;

app.use(express.static('public'));



const mainRouter = require('./routes/main');


/* rutas */
app.use('/', mainRouter)


/* configuracion del motor de plantillas */
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')



app.listen(port, ()=>{
    console.log(`server corriendo en http://localhost:${port}`);
});