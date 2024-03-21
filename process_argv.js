
// console.log(process.argv[0]);
// console.log(process.argv[1]);
// console.log(process.argv[2]);
// console.log(process.argv[3]);

// =====================================================

// let welcome = process.argv[2] || "World" // world represent suppose user doesnot given any values it will act as default values

// console.log(`Hello ${welcome}`);

// =====================================================



const variable = process.argv[2] || "Hello"


function add(variable) {

    trim = variable.trim()

    split = trim.split(" ")

    arr = []

    for (i in split) {
        arr.push(Number(split[i]))

    }

    values = arr.reduce((accumulator, value) => accumulator + value)

    return values
}


console.log(add(variable));