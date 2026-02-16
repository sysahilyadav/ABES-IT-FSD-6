import { readFile, writeFile } from "./readAndWriteFile.js";

// console.log(readFile("./student.json"));
const data = {
  first_name: "Ivette",
  last_name: "Schruyer",
  email: "ischruyer0@reddit.com",
  gender: "Female",
};

const writeFileData = async (path, data) => {
  try {
    const fileData = await readFile(path);

    // console.log(fileData);
    let updatedData = [];
    if (!fileData) updatedData = [{ id: 1, ...data }];
    else {
      updatedData = [...fileData, { id: fileData.length + 1, ...data }];
    }
    await writeFile(path, JSON.stringify(updatedData, null, 2));
  } catch (error) {
    console.log("unable to run write file datab ");
  }
};

const readFileData = async (path) => {
  try {
    const fileData = await readFile(path);
    console.log(fileData);
  } catch (error) {
    console.log("unable to return data");
  }
};

// readFileData("./student.json");
writeFileData("./student.json", data);
