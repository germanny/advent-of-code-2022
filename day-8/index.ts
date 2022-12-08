import { treeGrove } from "./data";

// INCOMPLETE

// https://adventofcode.com/2022/day/8
// count trees around the edges of the treeGrove
// count the trees that are "visible" from any edge
// A tree is "visible" if all numbers to the left, right, top, and bottom are less than the number of the tree itself.

const test = `1311020
2100300
2013020
2103031
0213103`;

function getEdges(input: string): string[] {
  const inputArray = input.split("\n");
  const outputArray = inputArray[0].split("");

  for (let index = 1; index < inputArray.length - 1; index++) {
    outputArray.push(inputArray[index][0]);
    outputArray.push(inputArray[index][inputArray.length + 1]);
  }

  const last = inputArray[inputArray.length - 1].split("");
  return [...outputArray, ...last];
}

// const edges = getEdges(test);

const convertStringToArrayOfArrays = (str: string): string[][] =>
  str.split("\n").map((line) => line.split(""));

const transposeArray = (arr: string[][]): string[][] =>
  arr[0].map((_, i) => arr.map((row) => row[i]));

const testArray = convertStringToArrayOfArrays(test);
const transposedTestArray = transposeArray(testArray);

// Now we have two arrays:
// Find an item at a row and an index
// Find the same item in the transposed array in row[index], at the index of the first array's row number

// Check if all the numbers before and after are smaller in both instances
// If the item is the largest number, push to array
// Return item array length as answer
