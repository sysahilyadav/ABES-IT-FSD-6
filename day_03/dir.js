import fs from 'fs/promises';
// created new directory using mkdir 
const makeDir=async (path)=>{
    try{
    await fs.mkdir(path);
    console.log("directory created successfully ");
    }
    catch(error){
        console.log("directory not created due to error ");

    }

}
makeDir("../day_04");

// removing the directory 
const removeDir= async (path)=>{
    try{
    await fs.rmdir(path);
    console.log("directory deleted successfully");
    }
    catch(error){
        console.log(" directory cannot be deleted due to error");

    }

}
removeDir('../day_04');

// creating readDirectory using async function to read a directory 

const readDir=async (path)=>{
    try{
        const data=await fs.readdir(path);
        console.log(data);
        console.log("we have read the directory succcessfully ");

    }
    catch(error){
        console.log("directory cannot be read due to error ");

    }
}
readDir("../day_04");