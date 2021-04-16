const {Router} = require ('express');
const router = Router();

const {getAutos} = require ('../conexiones/conexion')

 router.get('/autos', getAutos )


// router.get('/Autos', (req,res) =>{
// res.send ('Listado de autos ');
// })


module.exports = router;
