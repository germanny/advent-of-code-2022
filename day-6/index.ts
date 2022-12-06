import { startOfPacketMarker } from "./data/startOfPacketMarker";
import { checkDuplicateArrayItems } from "../utils";

// Crawl through a string letter by letter
// Examine that letter and the next three letters as a 4-letter string
// Look for the first instance of all the letters in the string being different
// Mark the index of the last letter in that string (remember that it will be 0-indexed!)

const crawlString = (str: string): number => {
  let marker = 0;
  const splitStr = str.split("");

  splitStr.forEach((_, index) => {
    let charArray: string[] = [];
    for (let i = index; i < index + 4; i++) {
      charArray.push(splitStr[i]);
    }

    const hasDuplicateLetters = charArray.some(checkDuplicateArrayItems);
    if (!hasDuplicateLetters && marker === 0) marker = index + 4;
  });
  console.log({ marker });
  return marker;
};

crawlString(startOfPacketMarker);
