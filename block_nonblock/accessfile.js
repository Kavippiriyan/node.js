/// block 

let fs = require("fs")

let data = fs.readFileSync('file.txt')

console.log(data.toString());

let i = 1;
while (i <=5) {
  console.log("The number is " + i);
  i++;
}

console.log("======================================");

// non block code

let fs1 = require("fs")

let data1 = fs.readFile("file.txt",(err,data1)=>
{
    if(err)   
    {
        return console.log(err);
    }
    else
    {
        console.log(data1.toString());
    }
})

i = 1;
while (i <=5) {
  console.log("The number is " + i);
  i++;
}