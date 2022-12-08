import { fileTree } from "./data/fileTree";

// INCOMPLETE

const splitFileTree = fileTree.split("$ ");

let linesArray: any = [];
let newDir: any = [];

splitFileTree.forEach((line) => {
  if (line.startsWith("cd")) {
    if (!line.endsWith(" ..\n")) {
      const cleanLine = line.replace("cd ", "").replace("\n", "");
      newDir.push([cleanLine]);
    } else {
      linesArray.push(newDir);
      newDir = [];
    }
  }
  if (line.startsWith("ls")) {
    const splitLine = line.split("\n");
    splitLine.shift(); // remove "ls"
    newDir.push(splitLine);
  }
});

console.log(linesArray);
