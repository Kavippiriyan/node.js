let add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 3000)
}

add(45, 55, (c) => {
    console.log(c);
})

console.log("Hello World!");