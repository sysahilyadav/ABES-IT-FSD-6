import { readFile, writeFile } from "../day_04/readAndWriteFile.js";
const FILE = "../day_04/student.json";
const updateFileData = async (id, data) => {
  const students = await readFile(FILE);
  if (!students) {
    console.log("user is not existing");
    return;
  }
  const user=students.filter((student)=> student.id===id);
  if(user.length===0){
    console.log("user does not exists");
  }
 else{
     const filteredData = students.map((student) => 
     student.id === id ? {...student, ...data} : student);
     await writeFile(FILE,JSON.stringify(filteredData,null,2));

 
 }
}
updateFileData(1, { first_name: "ABC", last_name: "XYZ" });

