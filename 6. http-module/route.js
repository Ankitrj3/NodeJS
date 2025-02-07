const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === "/"){
        res.writeHead(200, {'Content-Type': 'text/plane'});
        res.end("Home Page");
    } else if(url === "/about"){
        res.writeHead(200, {'Content-Type': 'text/plane'});
        res.end("About Page");
    }else{
        res.writeHead(404, {'Content-Type': 'text/plane'});
        res.end("Page not found");
    }
});
const port = 3000;
server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})