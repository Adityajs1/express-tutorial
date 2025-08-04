const http = require('http')
const {readFileSync} = require('fs')
// get all files
const homepage = readFileSync('./index.html')
const server = http.createServer((req, res)=>{
    const url = req.url;
    if (url === '/'){
    res.writeHead(200, {'content-type' :'text/html'})   // http status codes : 404
    res.write('<h1>We are on the Home Page</h1>')
    res.end()
    }
    else if (url === '/about'){
     res.writeHead(200, {'content-type' :'text/html'})  // http status codes : 404
    res.write('<h1>We are on the About Page</h1>')
    res.end()   
    }
    else{
    res.writeHead(404, {'content-type' :'text/html'})   // http status codes : 404
    res.write('<h1>Page Not Found!</h1>')
    res.end()
    }
})
server.listen(4000)