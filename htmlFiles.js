const http = require("http"); 
const {parse} = require ('querystring'); 
const fs = require('fs');  
const ejs = require('ejs'); 
var data = null; 
let students = []; 
 let veilles = [];
const host = 'localhost'; 
const port = 8080; 
data = fs.readFileSync('index.ejs', 'utf-8'); 

fs.readFile(__dirname + "/index.ejs") 
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
  const htlm = res.end(ejs.render(data,{ 
            students: students,
            veilles: veilles
    })); 
 
const requestListener = function (req, res) { 
    if (req.method === 'POST') {
        let eleve = ''; 
        req.on ('data', chunk => {
            eleve += chunk.toString ();
        }); 
        req.on('end', function() {
            eleve = qs.parse(eleve); 
        if (eleve.students) {
            
        } 
        if (eleve.veilles) {
            console.log("formVeilles");
        }
        });
    } 
    else if (req.method === 'GET')
    /*res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(ejs.render(data, {
        students : students, 
        veilles : veilles
    }));*/
    
    /*.catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });*/
}; 
const server = http.createServer(requestListener); 
server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
})