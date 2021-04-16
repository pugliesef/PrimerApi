const {Client} = require('pg');

export class conexion {
//private static connection: connection;
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    
   public getConexion() {
      let connectionData = {
         user: 'ecjfbxraijxemj',
         host: 'ec2-54-167-152-185.compute-1.amazonaws.com',
         database: 'd904tpoeft3t4j',
         password: 'd4293ad62bb61adb82f429ba784aefc56262a8166547a3a9e9edcbf4ca60365d',
         port: 5432,
         ssl : true
      }
      return connectionData;
   }  
   
}