import express from 'express';


//Inicialización
const app=express();

//configuraciones
app.set('port', 8000);

//Inizialización de servidor
app.listen(app.get('port'), ()=>{
    console.log(`Servidor iniciado en el puerto ${app.get('port')}`);
});
