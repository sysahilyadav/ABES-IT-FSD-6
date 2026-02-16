import { log } from "console";
import fs from "fs/promises";

export const readFile = async (path) => {
  try {
    const data = await fs.readFile(path, "utf-8");
    if(!data ) return null;
    return JSON.parse(data);
  } catch (error) {
    console.log("unable to read data");
  }
};

// readFile("./student.json")
// .then((data)=>console.log( data))
// .catch((error)=>console.log("error"));

export const writeFile = async (path, data) => {
  try {
    await fs.writeFile(path, data);
    console.log("successfully ");
  } catch (error) {
    console.log("unable to write data");
  }
};
