import { readFile } from "../utils/readFile.js";
const FILE="../user.json"
const userLogin=async (userDetail)=>{
    const {email,password}=userDetail;


    const users=await readFile(FILE);
    if(users.length===0){
        console.log("user does not exists ");
        return;
    }
    const user = users.filter((u) => u.email === email); // this will return data in form of array 

     if(user.length===0){
        console.log("user does not exist ");
        return;

     }
     (user[0].password===password)?console.log("login successful "):console.log("invalid password ");

    

}
userLogin({email:"tblasing0@geocities.com",password:"rA8|2hmH"}); // login successfull
userLogin({email:"tblasing0@geocities.com",password:"12345"}); //incorrect password
userLogin({email:"abc@gmail.com",password:"12345"}) //user is not existing
