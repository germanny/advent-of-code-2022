import { items } from "./data/items";
import { sumAllNumbersInArray } from "../utils";

// loop through all the items
// split the string and find any letters that appear in both the first half and last half of the string
// assign each letter a priority
//  Lowercase item types a through z have priorities 1 through 26.
//  Uppercase item types A through Z have priorities 27 through 52.
// add up all the priorities

const priorityOffset = (letter: string): number => {
  // console.log(letter);
  const offset: number = letter.charCodeAt(0) > 96 ? 96 : 38;
  return letter.charCodeAt(0) - offset;
};

function groupItems(items: string[], size: number): string[][] {
  // organize items into arrays of 3
  let groupedItemsArray: string[][] = [];

  for (let index = 0; index < items.length; index += size) {
    groupedItemsArray.push(items.slice(index, index + size));
  }

  return groupedItemsArray;
}

function itemPriorities(items: string[]) {
  let itemPriorityScore: number[] = [];
  items.forEach((item) => {
    const itemStringLength = item.length;
    const firstHalf = item.substring(0, itemStringLength / 2).split("");
    const secondHalf = item.substring(itemStringLength / 2).split("");

    const commonLetters = firstHalf.filter((letter) =>
      secondHalf.includes(letter)
    );

    commonLetters.forEach((letter, index) => {
      if (index === 0) {
        itemPriorityScore.push(priorityOffset(letter));
      }
    });
  });

  const totalPriority = sumAllNumbersInArray(itemPriorityScore);
  console.log(totalPriority);
  return totalPriority;
}

function groupedItemPriorities(array: string[][]) {
  let itemPriorityScore: number[] = [];
  array.forEach((arrayItems) => {
    // look for a common letter across all 3 items in the array and score it
    const commonLetters = arrayItems[0]
      .split("")
      .filter(
        (letter) =>
          arrayItems[1].split("").includes(letter) &&
          arrayItems[2].split("").includes(letter)
      );
    commonLetters.forEach((letter, index) => {
      if (index === 0) {
        itemPriorityScore.push(priorityOffset(letter));
      }
    });
  });
  const totalPriority = sumAllNumbersInArray(itemPriorityScore);
  console.log(totalPriority);
  return totalPriority;
}

const groupedItemsArray = groupItems(items, 3);

itemPriorities(items);
groupedItemPriorities(groupedItemsArray);
