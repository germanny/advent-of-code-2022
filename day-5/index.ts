import { crateArrangement, movements } from "./data/crates";
import { getLastValues } from "../utils";

// Move the crates from their starting position per the map in the movements array
// Report the crates that end up on top in a combined string, like SMNPBZVJ

type Movements = {
  qty: number;
  startingPos: number; // relates to array key in arraysObj
  endPos: number;
};

const orderedItemsToMove = <T>(
  array: Array<T>,
  reverseOrder: boolean
): Array<T> => (reverseOrder ? array.reverse() : array);

const reorderArrays = (
  arraysObj: Record<number, string[]>,
  movements: Movements[],
  reverseOrder: boolean
) => {
  // Loop through movements
  let newArraysObj = { ...arraysObj };
  movements.forEach((move) => {
    // For each startingPos
    // Take qty of items from end of corresponding array (startingPos) in arraysObj
    // Slice and transpose qty of items in array
    // Move to array key in newArraysObj that corresponds to endPos
    const arraysObjStartPos = newArraysObj[move.startingPos];
    const amountToMove = arraysObjStartPos.length - move.qty;
    const itemsToMove = arraysObjStartPos.slice(amountToMove);

    newArraysObj = {
      ...newArraysObj,
      [move.startingPos]: arraysObjStartPos.slice(0, amountToMove),
      [move.endPos]: newArraysObj[move.endPos].concat(
        orderedItemsToMove(itemsToMove, reverseOrder)
      ),
    };
  });
  return newArraysObj;
};

const moveItemsReversedOrder = reorderArrays(crateArrangement, movements, true);
const reversedFirstValues = getLastValues(moveItemsReversedOrder);
console.log(reversedFirstValues.join("")); // FCVRLMVQP

const moveItemsOriginalOrder = reorderArrays(
  crateArrangement,
  movements,
  false
);
const originalFirstValues = getLastValues(moveItemsOriginalOrder);
console.log(originalFirstValues.join("")); // RWLWGJGFD
