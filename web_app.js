const { log } = require("console")
const http = require("http")

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end(`<h>Welcome Kavippiriyan!</h>`)
})

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})