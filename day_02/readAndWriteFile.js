import fs from 'fs';
// in common js we use  require keyword and import is used in module 
// console.log(fs);

// this method is used to write to the file 

const writeFileSync=(file, data)=>{
  try{
      fs.writeFileSync(file,data);
    console.log("file has been created successfully");
  }
  catch(error){
    console.log("some error occured.....");

  }

}
writeFileSync("./example.txt","this data has been written through sync func of fs module");

// function to read from the file 
const readFileSync=(path)=>{
    try{
        const data=fs.readFileSync(path,"utf-8");
        console.log(data);
    }
    catch(error){
        console.log("unable to read the data from the file.... ");
    }
}
readFileSync("./example.txt");

// appendFile sync function to append in the  file 
const appendFileSync=(path,data)=>{
    try{
        fs.appendFileSync(path,data);
        console.log("file appended successfully");

    }
    catch(error){
        console.log("file not appended due to erroe...");

    }
}
appendFileSync("./example.txt","\nthis data has been appended through sync method to append a file ...");
