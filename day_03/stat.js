// getting the data of the file using the fs.stat function which takes the path of the folder 
import fs from 'fs/promises';
const fileStatus=async (path)=>{
    try{
       const stats= await fs.stat(path);
       console.log(stats.size);
       console.log(stats.isFile(),"file" );
       console.log(stats.isDirectory(), "directory");

    }
    catch(error){
        console.log("unable to generate status ",error);

    }



}

fileStatus('./dir.js');