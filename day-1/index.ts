import { elfCalories } from "./data/calories";
import {
  getLargestNumber,
  mapMultidimensionalArray,
  sumAllNumbersInArray,
  sortArrayDesc,
} from "../utils";

// loop through all arrays in the array
// add up the values in the array
// compare to the previous total and keep the largest value
const eachElfsCalories = mapMultidimensionalArray(
  elfCalories,
  sumAllNumbersInArray
);

// Part 1 - display the elf carrying the largest number of calories in the group
const displayLargestNumber = getLargestNumber(eachElfsCalories);
console.log(displayLargestNumber); // 66616

// Part 2 - display the total calories carried by the top 3 elves
const topThreeElfsCalorieTotal = sumAllNumbersInArray(
  sortArrayDesc(eachElfsCalories).splice(0, 3)
);
console.log(topThreeElfsCalorieTotal); // 199172
