const express =  require('express')
const morgan =  require('morgan')
const app = express()
//configuracion
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

//Middlewares
app.use(morgan("dev"))//combined
app.use(express.urlencoded({extended:false})) //Lectura de datos desde formularios
app.use(express.json()) //reconoce json

//routers
app.use(require('./routes/index'))
app.use('/api/v1/movies', require('./routes/movies'))

//Inicio Server
app.listen(app.get('port'),()=>console.log(`Servidor ${app.get('port')}`))

