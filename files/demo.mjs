
import {readFile} from 'node:fs'



readFile("./file.txt",(err,data)=>
{
    if(err)
    {
        throw err
    }
    else
    {
        console.log(data.toString());
    }
})