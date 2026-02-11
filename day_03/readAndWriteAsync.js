import fs from "fs/promises";
// console.log(fs);
 const  writeFile= async(path,data)=>{
    try{
    await fs.writeFile(path,data);
    console.log("data has been written succesfully");

    }
    catch(error){
        console.log("unable to perform write operation ");
        
    }
}


// function to read file 

const readFile= async (path)=>{
    try{
    const data = await fs.readFile(path,"utf-8");
    console.log(data);
    console.log("data has been read using readFile function ");

    }
    catch(error){
        console.log("file can not be read due to some error ");

    }
}


// function to append in the file 
const appendFile=async (path,data)=>{
    try{
       await fs.appendFile(path,data);
       console.log("data has been appended succesfully ");
       
    }
    catch(error){
        console.log("data cannot be appended in the given file due to some error ");

    }
}


console.log("before write ");
writeFile("./example.txt","this data has been written through async function ");
console.log("after write ");

console.log("before read");
readFile("./example.txt");
console.log("after read ");

console.log("before append");
appendFile("./example.txt","\nthis data has been appended in the file using appendFile function ");
console.log("after append");
