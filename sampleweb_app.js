const { log } = require("console");
const http = require("http")
const url = require("url")

const server = http.createServer((req, res) => {

    const parsedurl = url.parse(req.url, true);
    console.log(parsedurl);


    if (parsedurl.pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h1>Home Page</h1>")
        res.end()
    }
    else if (parsedurl.pathname === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h1>About Page</h1>")
        res.end()
    }
    else if (parsedurl.pathname === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h1>Contact Page</h1>")
        res.end()
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" })
        res.write("<h1>Page Not Found</h1>")
        res.end()
    }
})
server.listen(3000, () => {

})