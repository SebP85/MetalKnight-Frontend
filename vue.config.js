const fs = require("fs");

module.exports = {
    devServer: {   
        port: 8080,  
        https: true,
        /*https: {
            key: fs.readFileSync('./certs/example.com+5-key.pem'),
            cert: fs.readFileSync('./certs/example.com+5.pem'),
          },*/
          public: 'https://localhost'
    } 
 }