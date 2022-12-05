import { crateArrangement, movements } from "./data/crates";
import { getLastValues } from "../utils";

// Move the crates from their starting position per the map in the movements array
// Report the crates that end up on top in a combined string, like SMNPBZVJ

type Movements = {
  qty: number;
  startingPos: number; // relates to array key in arraysObj
  endPos: number;
};

const reorderArrays = (
  arraysObj: Record<number, string[]>,
  movements: Movements[]
) => {
  // Loop through movements
  let newArraysObj = { ...arraysObj };
  movements.forEach((move) => {
    // For each startingPos
    // Take qty of items from end of corresponding array (startingPos) in arraysObj
    const arraysObjStartPos = newArraysObj[move.startingPos];
    // Slice and transpose qty of items in array
    const itemsToMove = arraysObjStartPos
      .slice(arraysObjStartPos.length - move.qty)
      .reverse();
    // Move to array key in newArraysObj that corresponds to endPos
    newArraysObj = {
      ...newArraysObj,
      [move.startingPos]: arraysObjStartPos.slice(
        0,
        arraysObjStartPos.length - move.qty
      ),
      [move.endPos]: newArraysObj[move.endPos].concat(itemsToMove),
    };
  });
  console.log({ newArraysObj });
  return newArraysObj;
};

const moveItems = reorderArrays(crateArrangement, movements);
console.log(moveItems);

const firstValues = getLastValues(moveItems);
console.log(firstValues.join(""));
