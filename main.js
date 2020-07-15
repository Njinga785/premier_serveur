const http = require('http'); 
const fs = require('fs');  
const host = 'localhost'; 
const port = 8080; 

const requestListener = function(req, res) { 
     
     
    
}; 

const server = http.createServer(requestListener); 
server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
})