import { conexion } from "../conexiones/conexion";
const {Client} = require('pg');


export class vehiculosService{
getAutos= async(req, res)=> {
    const conexionBases = new conexion(); 
    const client = new Client(conexionBases.getConexion());
    
   
    client.connect().catch(error=> console.log(error.message)) 
    client.query('SELECT * FROM Listado_Autos2')
        .then(response => {
            console.log(response.rows)
            client.end()
        })
        .catch(err => {
            client.end()
        })
        
    }
    
// module.exports = { 
//     getAutos
// }



}