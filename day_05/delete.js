import { readFile,writeFile } from "../day_04/readAndWriteFile.js";
const filePath="../day_04/student.json";
const deleteFileData=async(id)=>{

    const students= await readFile(filePath);
    if(!students){
        console.log("user is not existing ");
        return ;
    }
    const user=students.filter((student)=>student.id===id);
    if(user.length===0){
        console.log("user is not existing");
        
    }
    else{
        const filteredData =students.filter((student)=>student.id !==id);
        await writeFile(filePath,JSON.stringify(filteredData,null,2));
        
    }
}
deleteFileData(1);