/**
 *
    [M]             [Z]     [V]
    [Z]     [P]     [L]     [Z] [J]
[S] [D]     [W]     [W]     [H] [Q]
[P] [V] [N] [D]     [P]     [C] [V]
[H] [B] [J] [V] [B] [M]     [N] [P]
[V] [F] [L] [Z] [C] [S] [P] [S] [G]
[F] [J] [M] [G] [R] [R] [H] [R] [L]
[G] [G] [G] [N] [V] [V] [T] [Q] [F]
 1   2   3   4   5   6   7   8   9
 */

export const crateArrangement = {
  1: ["G", "F", "V", "H", "P", "S"],
  2: ["G", "J", "F", "B", "V", "D", "Z", "M"],
  3: ["G", "M", "L", "J", "N"],
  4: ["N", "G", "Z", "V", "D", "W", "P"],
  5: ["V", "R", "C", "B"],
  6: ["V", "R", "S", "M", "P", "W", "L", "Z"],
  7: ["T", "H", "P"],
  8: ["Q", "R", "S", "N", "C", "H", "Z", "V"],
  9: ["F", "L", "G", "P", "V", "Q", "J"],
};

export const movements = [
  { qty: 6, startingPos: 9, endPos: 3 },
  { qty: 2, startingPos: 2, endPos: 1 },
  { qty: 1, startingPos: 8, endPos: 2 },
  { qty: 3, startingPos: 7, endPos: 2 },
  { qty: 7, startingPos: 6, endPos: 9 },
  { qty: 1, startingPos: 9, endPos: 5 },
  { qty: 3, startingPos: 5, endPos: 7 },
  { qty: 6, startingPos: 8, endPos: 6 },
  { qty: 1, startingPos: 7, endPos: 8 },
  { qty: 6, startingPos: 6, endPos: 5 },
  { qty: 4, startingPos: 5, endPos: 8 },
  { qty: 9, startingPos: 2, endPos: 9 },
  { qty: 1, startingPos: 2, endPos: 3 },
  { qty: 3, startingPos: 1, endPos: 3 },
  { qty: 3, startingPos: 5, endPos: 1 },
  { qty: 10, startingPos: 3, endPos: 5 },
  { qty: 4, startingPos: 4, endPos: 6 },
  { qty: 2, startingPos: 7, endPos: 6 },
  { qty: 2, startingPos: 6, endPos: 9 },
  { qty: 6, startingPos: 8, endPos: 6 },
  { qty: 1, startingPos: 4, endPos: 3 },
  { qty: 1, startingPos: 4, endPos: 5 },
  { qty: 1, startingPos: 4, endPos: 1 },
  { qty: 2, startingPos: 3, endPos: 1 },
  { qty: 1, startingPos: 3, endPos: 7 },
  { qty: 8, startingPos: 1, endPos: 9 },
  { qty: 1, startingPos: 1, endPos: 2 },
  { qty: 1, startingPos: 2, endPos: 7 },
  { qty: 6, startingPos: 6, endPos: 3 },
  { qty: 7, startingPos: 3, endPos: 5 },
  { qty: 14, startingPos: 5, endPos: 6 },
  { qty: 2, startingPos: 1, endPos: 3 },
  { qty: 5, startingPos: 5, endPos: 8 },
  { qty: 5, startingPos: 8, endPos: 1 },
  { qty: 2, startingPos: 7, endPos: 1 },
  { qty: 5, startingPos: 6, endPos: 9 },
  { qty: 8, startingPos: 9, endPos: 3 },
  { qty: 13, startingPos: 9, endPos: 3 },
  { qty: 7, startingPos: 1, endPos: 4 },
  { qty: 6, startingPos: 4, endPos: 1 },
  { qty: 22, startingPos: 3, endPos: 1 },
  { qty: 1, startingPos: 9, endPos: 3 },
  { qty: 2, startingPos: 6, endPos: 1 },
  { qty: 1, startingPos: 3, endPos: 4 },
  { qty: 7, startingPos: 9, endPos: 8 },
  { qty: 2, startingPos: 1, endPos: 7 },
  { qty: 2, startingPos: 3, endPos: 2 },
  { qty: 2, startingPos: 6, endPos: 9 },
  { qty: 2, startingPos: 7, endPos: 8 },
  { qty: 1, startingPos: 3, endPos: 6 },
  { qty: 9, startingPos: 8, endPos: 6 },
  { qty: 1, startingPos: 2, endPos: 4 },
  { qty: 8, startingPos: 1, endPos: 2 },
  { qty: 1, startingPos: 9, endPos: 4 },
  { qty: 3, startingPos: 4, endPos: 1 },
  { qty: 1, startingPos: 4, endPos: 6 },
  { qty: 10, startingPos: 6, endPos: 5 },
  { qty: 5, startingPos: 2, endPos: 9 },
  { qty: 6, startingPos: 9, endPos: 3 },
  { qty: 2, startingPos: 5, endPos: 3 },
  { qty: 2, startingPos: 9, endPos: 7 },
  { qty: 7, startingPos: 5, endPos: 8 },
  { qty: 5, startingPos: 6, endPos: 2 },
  { qty: 3, startingPos: 3, endPos: 7 },
  { qty: 3, startingPos: 3, endPos: 5 },
  { qty: 4, startingPos: 5, endPos: 8 },
  { qty: 1, startingPos: 3, endPos: 5 },
  { qty: 6, startingPos: 6, endPos: 8 },
  { qty: 1, startingPos: 5, endPos: 7 },
  { qty: 9, startingPos: 8, endPos: 9 },
  { qty: 1, startingPos: 3, endPos: 1 },
  { qty: 7, startingPos: 2, endPos: 7 },
  { qty: 9, startingPos: 7, endPos: 6 },
  { qty: 2, startingPos: 2, endPos: 3 },
  { qty: 7, startingPos: 9, endPos: 3 },
  { qty: 9, startingPos: 6, endPos: 8 },
  { qty: 7, startingPos: 3, endPos: 4 },
  { qty: 2, startingPos: 7, endPos: 6 },
  { qty: 4, startingPos: 4, endPos: 5 },
  { qty: 3, startingPos: 5, endPos: 6 },
  { qty: 2, startingPos: 7, endPos: 4 },
  { qty: 5, startingPos: 4, endPos: 7 },
  { qty: 13, startingPos: 8, endPos: 4 },
  { qty: 2, startingPos: 9, endPos: 4 },
  { qty: 2, startingPos: 8, endPos: 7 },
  { qty: 6, startingPos: 7, endPos: 5 },
  { qty: 6, startingPos: 4, endPos: 2 },
  { qty: 1, startingPos: 7, endPos: 5 },
  { qty: 3, startingPos: 2, endPos: 7 },
  { qty: 1, startingPos: 7, endPos: 8 },
  { qty: 3, startingPos: 2, endPos: 4 },
  { qty: 2, startingPos: 3, endPos: 9 },
  { qty: 2, startingPos: 7, endPos: 2 },
  { qty: 6, startingPos: 5, endPos: 4 },
  { qty: 3, startingPos: 6, endPos: 2 },
  { qty: 2, startingPos: 6, endPos: 9 },
  { qty: 5, startingPos: 2, endPos: 9 },
  { qty: 12, startingPos: 4, endPos: 8 },
  { qty: 3, startingPos: 9, endPos: 2 },
  { qty: 12, startingPos: 1, endPos: 5 },
  { qty: 4, startingPos: 4, endPos: 6 },
  { qty: 12, startingPos: 8, endPos: 9 },
  { qty: 2, startingPos: 6, endPos: 5 },
  { qty: 1, startingPos: 4, endPos: 8 },
  { qty: 1, startingPos: 4, endPos: 1 },
  { qty: 3, startingPos: 2, endPos: 1 },
  { qty: 2, startingPos: 6, endPos: 7 },
  { qty: 1, startingPos: 5, endPos: 9 },
  { qty: 2, startingPos: 1, endPos: 4 },
  { qty: 10, startingPos: 5, endPos: 1 },
  { qty: 2, startingPos: 7, endPos: 3 },
  { qty: 18, startingPos: 9, endPos: 7 },
  { qty: 8, startingPos: 7, endPos: 2 },
  { qty: 1, startingPos: 9, endPos: 6 },
  { qty: 1, startingPos: 6, endPos: 7 },
  { qty: 10, startingPos: 7, endPos: 9 },
  { qty: 1, startingPos: 4, endPos: 2 },
  { qty: 19, startingPos: 1, endPos: 5 },
  { qty: 8, startingPos: 5, endPos: 9 },
  { qty: 3, startingPos: 8, endPos: 4 },
  { qty: 2, startingPos: 5, endPos: 2 },
  { qty: 2, startingPos: 3, endPos: 6 },
  { qty: 10, startingPos: 5, endPos: 2 },
  { qty: 4, startingPos: 1, endPos: 2 },
  { qty: 2, startingPos: 9, endPos: 2 },
  { qty: 1, startingPos: 1, endPos: 6 },
  { qty: 2, startingPos: 5, endPos: 6 },
  { qty: 1, startingPos: 8, endPos: 7 },
  { qty: 1, startingPos: 5, endPos: 8 },
  { qty: 1, startingPos: 5, endPos: 6 },
  { qty: 18, startingPos: 2, endPos: 5 },
  { qty: 5, startingPos: 2, endPos: 1 },
  { qty: 6, startingPos: 5, endPos: 8 },
  { qty: 1, startingPos: 8, endPos: 9 },
  { qty: 2, startingPos: 2, endPos: 4 },
  { qty: 1, startingPos: 2, endPos: 6 },
  { qty: 2, startingPos: 7, endPos: 6 },
  { qty: 1, startingPos: 4, endPos: 1 },
  { qty: 4, startingPos: 8, endPos: 5 },
  { qty: 1, startingPos: 2, endPos: 9 },
  { qty: 2, startingPos: 8, endPos: 3 },
  { qty: 1, startingPos: 3, endPos: 6 },
  { qty: 1, startingPos: 4, endPos: 8 },
  { qty: 1, startingPos: 8, endPos: 9 },
  { qty: 10, startingPos: 5, endPos: 7 },
  { qty: 5, startingPos: 5, endPos: 1 },
  { qty: 2, startingPos: 4, endPos: 1 },
  { qty: 3, startingPos: 7, endPos: 6 },
  { qty: 12, startingPos: 1, endPos: 4 },
  { qty: 8, startingPos: 9, endPos: 5 },
  { qty: 6, startingPos: 7, endPos: 4 },
  { qty: 1, startingPos: 7, endPos: 9 },
  { qty: 4, startingPos: 4, endPos: 3 },
  { qty: 1, startingPos: 1, endPos: 7 },
  { qty: 3, startingPos: 9, endPos: 5 },
  { qty: 2, startingPos: 3, endPos: 1 },
  { qty: 1, startingPos: 7, endPos: 6 },
  { qty: 8, startingPos: 4, endPos: 7 },
  { qty: 1, startingPos: 7, endPos: 6 },
  { qty: 7, startingPos: 6, endPos: 4 },
  { qty: 2, startingPos: 1, endPos: 3 },
  { qty: 1, startingPos: 7, endPos: 1 },
  { qty: 1, startingPos: 3, endPos: 7 },
  { qty: 1, startingPos: 1, endPos: 6 },
  { qty: 4, startingPos: 9, endPos: 3 },
  { qty: 5, startingPos: 4, endPos: 6 },
  { qty: 12, startingPos: 6, endPos: 2 },
  { qty: 3, startingPos: 9, endPos: 4 },
  { qty: 8, startingPos: 2, endPos: 6 },
  { qty: 2, startingPos: 9, endPos: 6 },
  { qty: 8, startingPos: 5, endPos: 6 },
  { qty: 4, startingPos: 5, endPos: 8 },
  { qty: 14, startingPos: 6, endPos: 3 },
  { qty: 11, startingPos: 4, endPos: 9 },
  { qty: 2, startingPos: 2, endPos: 7 },
  { qty: 8, startingPos: 3, endPos: 9 },
  { qty: 11, startingPos: 3, endPos: 6 },
  { qty: 14, startingPos: 9, endPos: 1 },
  { qty: 7, startingPos: 1, endPos: 3 },
  { qty: 2, startingPos: 9, endPos: 5 },
  { qty: 2, startingPos: 2, endPos: 8 },
  { qty: 6, startingPos: 7, endPos: 5 },
  { qty: 1, startingPos: 9, endPos: 8 },
  { qty: 13, startingPos: 6, endPos: 3 },
  { qty: 4, startingPos: 6, endPos: 8 },
  { qty: 3, startingPos: 1, endPos: 6 },
  { qty: 5, startingPos: 5, endPos: 8 },
  { qty: 7, startingPos: 8, endPos: 7 },
  { qty: 2, startingPos: 1, endPos: 8 },
  { qty: 1, startingPos: 4, endPos: 1 },
  { qty: 4, startingPos: 8, endPos: 9 },
  { qty: 8, startingPos: 7, endPos: 5 },
  { qty: 1, startingPos: 8, endPos: 1 },
  { qty: 4, startingPos: 9, endPos: 3 },
  { qty: 1, startingPos: 4, endPos: 5 },
  { qty: 5, startingPos: 5, endPos: 2 },
  { qty: 1, startingPos: 8, endPos: 9 },
  { qty: 1, startingPos: 8, endPos: 6 },
  { qty: 2, startingPos: 6, endPos: 2 },
  { qty: 4, startingPos: 8, endPos: 6 },
  { qty: 4, startingPos: 1, endPos: 8 },
  { qty: 4, startingPos: 8, endPos: 5 },
  { qty: 1, startingPos: 9, endPos: 8 },
  { qty: 1, startingPos: 2, endPos: 3 },
  { qty: 4, startingPos: 6, endPos: 1 },
  { qty: 1, startingPos: 8, endPos: 2 },
  { qty: 3, startingPos: 5, endPos: 4 },
  { qty: 4, startingPos: 2, endPos: 5 },
  { qty: 1, startingPos: 7, endPos: 9 },
  { qty: 1, startingPos: 2, endPos: 6 },
  { qty: 3, startingPos: 1, endPos: 8 },
  { qty: 2, startingPos: 4, endPos: 5 },
  { qty: 2, startingPos: 6, endPos: 1 },
  { qty: 3, startingPos: 8, endPos: 9 },
  { qty: 4, startingPos: 9, endPos: 2 },
  { qty: 1, startingPos: 7, endPos: 1 },
  { qty: 1, startingPos: 6, endPos: 7 },
  { qty: 4, startingPos: 1, endPos: 6 },
  { qty: 1, startingPos: 7, endPos: 4 },
  { qty: 6, startingPos: 2, endPos: 8 },
  { qty: 2, startingPos: 4, endPos: 8 },
  { qty: 1, startingPos: 9, endPos: 5 },
  { qty: 3, startingPos: 6, endPos: 2 },
  { qty: 1, startingPos: 6, endPos: 4 },
  { qty: 7, startingPos: 3, endPos: 5 },
  { qty: 2, startingPos: 8, endPos: 1 },
  { qty: 3, startingPos: 2, endPos: 8 },
  { qty: 6, startingPos: 8, endPos: 5 },
  { qty: 17, startingPos: 5, endPos: 3 },
  { qty: 2, startingPos: 1, endPos: 6 },
  { qty: 3, startingPos: 8, endPos: 3 },
  { qty: 1, startingPos: 9, endPos: 5 },
  { qty: 11, startingPos: 5, endPos: 2 },
  { qty: 40, startingPos: 3, endPos: 5 },
  { qty: 11, startingPos: 2, endPos: 7 },
  { qty: 4, startingPos: 7, endPos: 8 },
  { qty: 1, startingPos: 8, endPos: 9 },
  { qty: 1, startingPos: 3, endPos: 5 },
  { qty: 1, startingPos: 4, endPos: 8 },
  { qty: 19, startingPos: 5, endPos: 8 },
  { qty: 7, startingPos: 7, endPos: 8 },
  { qty: 16, startingPos: 5, endPos: 2 },
  { qty: 6, startingPos: 5, endPos: 8 },
  { qty: 1, startingPos: 5, endPos: 8 },
  { qty: 1, startingPos: 9, endPos: 4 },
  { qty: 1, startingPos: 6, endPos: 1 },
  { qty: 1, startingPos: 4, endPos: 7 },
  { qty: 1, startingPos: 6, endPos: 9 },
  { qty: 1, startingPos: 1, endPos: 7 },
  { qty: 1, startingPos: 7, endPos: 3 },
  { qty: 1, startingPos: 7, endPos: 2 },
  { qty: 1, startingPos: 9, endPos: 8 },
  { qty: 1, startingPos: 3, endPos: 4 },
  { qty: 1, startingPos: 4, endPos: 6 },
  { qty: 14, startingPos: 2, endPos: 9 },
  { qty: 24, startingPos: 8, endPos: 4 },
  { qty: 8, startingPos: 8, endPos: 3 },
  { qty: 1, startingPos: 6, endPos: 3 },
  { qty: 16, startingPos: 4, endPos: 1 },
  { qty: 3, startingPos: 8, endPos: 4 },
  { qty: 3, startingPos: 3, endPos: 8 },
  { qty: 4, startingPos: 3, endPos: 4 },
  { qty: 1, startingPos: 3, endPos: 9 },
  { qty: 13, startingPos: 9, endPos: 4 },
  { qty: 16, startingPos: 1, endPos: 8 },
  { qty: 8, startingPos: 8, endPos: 1 },
  { qty: 3, startingPos: 1, endPos: 7 },
  { qty: 1, startingPos: 8, endPos: 6 },
  { qty: 1, startingPos: 3, endPos: 8 },
  { qty: 10, startingPos: 8, endPos: 5 },
  { qty: 5, startingPos: 5, endPos: 2 },
  { qty: 3, startingPos: 8, endPos: 9 },
  { qty: 1, startingPos: 8, endPos: 9 },
  { qty: 1, startingPos: 4, endPos: 5 },
  { qty: 5, startingPos: 2, endPos: 6 },
  { qty: 3, startingPos: 5, endPos: 2 },
  { qty: 1, startingPos: 6, endPos: 1 },
  { qty: 5, startingPos: 1, endPos: 5 },
  { qty: 1, startingPos: 1, endPos: 5 },
  { qty: 2, startingPos: 7, endPos: 3 },
  { qty: 2, startingPos: 3, endPos: 2 },
  { qty: 1, startingPos: 5, endPos: 7 },
  { qty: 7, startingPos: 5, endPos: 3 },
  { qty: 5, startingPos: 9, endPos: 5 },
  { qty: 2, startingPos: 7, endPos: 9 },
  { qty: 4, startingPos: 5, endPos: 6 },
  { qty: 2, startingPos: 9, endPos: 8 },
  { qty: 2, startingPos: 2, endPos: 4 },
  { qty: 5, startingPos: 3, endPos: 5 },
  { qty: 1, startingPos: 3, endPos: 2 },
  { qty: 7, startingPos: 4, endPos: 9 },
  { qty: 1, startingPos: 8, endPos: 1 },
  { qty: 1, startingPos: 2, endPos: 1 },
  { qty: 9, startingPos: 4, endPos: 6 },
  { qty: 2, startingPos: 1, endPos: 8 },
  { qty: 1, startingPos: 3, endPos: 9 },
  { qty: 2, startingPos: 8, endPos: 6 },
  { qty: 13, startingPos: 4, endPos: 6 },
  { qty: 1, startingPos: 8, endPos: 7 },
  { qty: 2, startingPos: 9, endPos: 6 },
  { qty: 3, startingPos: 5, endPos: 7 },
  { qty: 3, startingPos: 2, endPos: 5 },
  { qty: 3, startingPos: 2, endPos: 6 },
  { qty: 5, startingPos: 6, endPos: 2 },
  { qty: 4, startingPos: 2, endPos: 5 },
  { qty: 4, startingPos: 5, endPos: 7 },
  { qty: 5, startingPos: 5, endPos: 7 },
  { qty: 7, startingPos: 9, endPos: 6 },
  { qty: 6, startingPos: 7, endPos: 2 },
  { qty: 22, startingPos: 6, endPos: 5 },
  { qty: 10, startingPos: 5, endPos: 8 },
  { qty: 7, startingPos: 5, endPos: 4 },
  { qty: 8, startingPos: 8, endPos: 5 },
  { qty: 18, startingPos: 6, endPos: 2 },
  { qty: 5, startingPos: 7, endPos: 5 },
  { qty: 1, startingPos: 8, endPos: 2 },
  { qty: 6, startingPos: 5, endPos: 1 },
  { qty: 7, startingPos: 4, endPos: 2 },
  { qty: 4, startingPos: 1, endPos: 5 },
  { qty: 1, startingPos: 7, endPos: 9 },
  { qty: 1, startingPos: 8, endPos: 6 },
  { qty: 1, startingPos: 7, endPos: 8 },
  { qty: 10, startingPos: 5, endPos: 9 },
  { qty: 12, startingPos: 2, endPos: 1 },
  { qty: 8, startingPos: 5, endPos: 2 },
  { qty: 19, startingPos: 2, endPos: 9 },
  { qty: 1, startingPos: 6, endPos: 8 },
  { qty: 13, startingPos: 9, endPos: 3 },
  { qty: 8, startingPos: 1, endPos: 2 },
  { qty: 5, startingPos: 1, endPos: 3 },
  { qty: 10, startingPos: 2, endPos: 1 },
  { qty: 7, startingPos: 2, endPos: 5 },
  { qty: 3, startingPos: 5, endPos: 7 },
  { qty: 4, startingPos: 1, endPos: 3 },
  { qty: 1, startingPos: 2, endPos: 3 },
  { qty: 3, startingPos: 1, endPos: 2 },
  { qty: 1, startingPos: 8, endPos: 6 },
  { qty: 2, startingPos: 7, endPos: 5 },
  { qty: 4, startingPos: 1, endPos: 3 },
  { qty: 6, startingPos: 5, endPos: 4 },
  { qty: 2, startingPos: 2, endPos: 1 },
  { qty: 1, startingPos: 2, endPos: 9 },
  { qty: 6, startingPos: 4, endPos: 5 },
  { qty: 5, startingPos: 5, endPos: 9 },
  { qty: 1, startingPos: 6, endPos: 8 },
  { qty: 1, startingPos: 5, endPos: 1 },
  { qty: 6, startingPos: 9, endPos: 2 },
  { qty: 5, startingPos: 2, endPos: 4 },
  { qty: 3, startingPos: 1, endPos: 6 },
  { qty: 2, startingPos: 4, endPos: 7 },
  { qty: 22, startingPos: 3, endPos: 9 },
  { qty: 1, startingPos: 8, endPos: 4 },
  { qty: 2, startingPos: 4, endPos: 3 },
  { qty: 2, startingPos: 6, endPos: 1 },
  { qty: 2, startingPos: 1, endPos: 5 },
  { qty: 1, startingPos: 6, endPos: 7 },
  { qty: 1, startingPos: 7, endPos: 4 },
  { qty: 6, startingPos: 3, endPos: 7 },
  { qty: 1, startingPos: 2, endPos: 4 },
  { qty: 8, startingPos: 7, endPos: 3 },
  { qty: 1, startingPos: 4, endPos: 5 },
  { qty: 1, startingPos: 7, endPos: 9 },
  { qty: 5, startingPos: 3, endPos: 6 },
  { qty: 1, startingPos: 8, endPos: 4 },
  { qty: 4, startingPos: 3, endPos: 2 },
  { qty: 32, startingPos: 9, endPos: 3 },
  { qty: 3, startingPos: 6, endPos: 7 },
  { qty: 5, startingPos: 9, endPos: 3 },
  { qty: 1, startingPos: 9, endPos: 7 },
  { qty: 2, startingPos: 9, endPos: 2 },
  { qty: 2, startingPos: 4, endPos: 3 },
  { qty: 2, startingPos: 5, endPos: 4 },
  { qty: 5, startingPos: 3, endPos: 2 },
  { qty: 3, startingPos: 7, endPos: 8 },
  { qty: 1, startingPos: 7, endPos: 2 },
  { qty: 1, startingPos: 8, endPos: 5 },
  { qty: 1, startingPos: 3, endPos: 4 },
  { qty: 5, startingPos: 4, endPos: 5 },
  { qty: 4, startingPos: 5, endPos: 2 },
  { qty: 3, startingPos: 5, endPos: 7 },
  { qty: 1, startingPos: 7, endPos: 5 },
  { qty: 1, startingPos: 6, endPos: 5 },
  { qty: 2, startingPos: 8, endPos: 5 },
  { qty: 15, startingPos: 2, endPos: 4 },
  { qty: 3, startingPos: 5, endPos: 6 },
  { qty: 4, startingPos: 6, endPos: 5 },
  { qty: 2, startingPos: 5, endPos: 2 },
  { qty: 1, startingPos: 2, endPos: 4 },
  { qty: 25, startingPos: 3, endPos: 9 },
  { qty: 2, startingPos: 5, endPos: 2 },
  { qty: 11, startingPos: 9, endPos: 2 },
  { qty: 13, startingPos: 2, endPos: 1 },
  { qty: 4, startingPos: 4, endPos: 7 },
  { qty: 12, startingPos: 9, endPos: 8 },
  { qty: 6, startingPos: 7, endPos: 8 },
  { qty: 7, startingPos: 4, endPos: 7 },
  { qty: 7, startingPos: 7, endPos: 8 },
  { qty: 1, startingPos: 5, endPos: 1 },
  { qty: 5, startingPos: 4, endPos: 3 },
  { qty: 2, startingPos: 2, endPos: 1 },
  { qty: 2, startingPos: 9, endPos: 5 },
  { qty: 7, startingPos: 1, endPos: 7 },
  { qty: 1, startingPos: 1, endPos: 4 },
  { qty: 12, startingPos: 3, endPos: 2 },
  { qty: 1, startingPos: 3, endPos: 9 },
  { qty: 1, startingPos: 1, endPos: 3 },
  { qty: 1, startingPos: 9, endPos: 1 },
  { qty: 7, startingPos: 7, endPos: 2 },
  { qty: 1, startingPos: 4, endPos: 7 },
  { qty: 2, startingPos: 8, endPos: 7 },
  { qty: 7, startingPos: 1, endPos: 2 },
  { qty: 1, startingPos: 3, endPos: 4 },
  { qty: 26, startingPos: 2, endPos: 1 },
  { qty: 4, startingPos: 8, endPos: 1 },
  { qty: 3, startingPos: 1, endPos: 6 },
  { qty: 1, startingPos: 6, endPos: 3 },
  { qty: 1, startingPos: 6, endPos: 9 },
  { qty: 1, startingPos: 3, endPos: 8 },
  { qty: 20, startingPos: 1, endPos: 3 },
  { qty: 1, startingPos: 9, endPos: 7 },
  { qty: 4, startingPos: 7, endPos: 1 },
  { qty: 1, startingPos: 5, endPos: 3 },
  { qty: 4, startingPos: 3, endPos: 5 },
  { qty: 1, startingPos: 6, endPos: 2 },
  { qty: 6, startingPos: 3, endPos: 2 },
  { qty: 8, startingPos: 1, endPos: 4 },
  { qty: 1, startingPos: 1, endPos: 5 },
  { qty: 3, startingPos: 1, endPos: 4 },
  { qty: 7, startingPos: 2, endPos: 4 },
  { qty: 10, startingPos: 3, endPos: 8 },
  { qty: 4, startingPos: 4, endPos: 3 },
  { qty: 12, startingPos: 4, endPos: 7 },
  { qty: 3, startingPos: 3, endPos: 1 },
  { qty: 2, startingPos: 4, endPos: 3 },
  { qty: 2, startingPos: 8, endPos: 1 },
  { qty: 6, startingPos: 8, endPos: 9 },
  { qty: 5, startingPos: 9, endPos: 6 },
  { qty: 1, startingPos: 9, endPos: 3 },
  { qty: 3, startingPos: 8, endPos: 7 },
  { qty: 10, startingPos: 8, endPos: 5 },
  { qty: 4, startingPos: 8, endPos: 7 },
  { qty: 9, startingPos: 7, endPos: 9 },
  { qty: 4, startingPos: 8, endPos: 4 },
  { qty: 2, startingPos: 4, endPos: 3 },
  { qty: 3, startingPos: 1, endPos: 7 },
  { qty: 11, startingPos: 7, endPos: 4 },
  { qty: 6, startingPos: 4, endPos: 8 },
  { qty: 1, startingPos: 7, endPos: 3 },
  { qty: 4, startingPos: 5, endPos: 1 },
  { qty: 5, startingPos: 3, endPos: 6 },
  { qty: 5, startingPos: 9, endPos: 4 },
  { qty: 1, startingPos: 9, endPos: 8 },
  { qty: 10, startingPos: 4, endPos: 8 },
  { qty: 5, startingPos: 1, endPos: 2 },
  { qty: 1, startingPos: 7, endPos: 6 },
  { qty: 9, startingPos: 6, endPos: 3 },
  { qty: 7, startingPos: 8, endPos: 7 },
  { qty: 3, startingPos: 4, endPos: 1 },
  { qty: 2, startingPos: 2, endPos: 1 },
  { qty: 9, startingPos: 8, endPos: 3 },
  { qty: 10, startingPos: 5, endPos: 8 },
  { qty: 18, startingPos: 3, endPos: 9 },
  { qty: 1, startingPos: 7, endPos: 8 },
  { qty: 1, startingPos: 5, endPos: 3 },
  { qty: 4, startingPos: 8, endPos: 3 },
  { qty: 2, startingPos: 6, endPos: 3 },
  { qty: 6, startingPos: 7, endPos: 2 },
  { qty: 1, startingPos: 5, endPos: 3 },
  { qty: 1, startingPos: 1, endPos: 9 },
  { qty: 10, startingPos: 3, endPos: 9 },
  { qty: 4, startingPos: 1, endPos: 8 },
  { qty: 13, startingPos: 8, endPos: 1 },
  { qty: 3, startingPos: 1, endPos: 8 },
  { qty: 3, startingPos: 2, endPos: 4 },
  { qty: 5, startingPos: 2, endPos: 6 },
  { qty: 5, startingPos: 6, endPos: 4 },
  { qty: 28, startingPos: 9, endPos: 2 },
  { qty: 2, startingPos: 9, endPos: 5 },
  { qty: 2, startingPos: 5, endPos: 2 },
  { qty: 1, startingPos: 3, endPos: 7 },
  { qty: 2, startingPos: 1, endPos: 4 },
  { qty: 3, startingPos: 8, endPos: 3 },
  { qty: 1, startingPos: 9, endPos: 4 },
  { qty: 3, startingPos: 4, endPos: 6 },
  { qty: 2, startingPos: 3, endPos: 7 },
  { qty: 8, startingPos: 1, endPos: 5 },
  { qty: 3, startingPos: 7, endPos: 6 },
  { qty: 14, startingPos: 2, endPos: 8 },
  { qty: 1, startingPos: 9, endPos: 1 },
  { qty: 6, startingPos: 5, endPos: 6 },
  { qty: 4, startingPos: 2, endPos: 5 },
  { qty: 9, startingPos: 8, endPos: 2 },
  { qty: 4, startingPos: 8, endPos: 4 },
  { qty: 7, startingPos: 2, endPos: 4 },
  { qty: 12, startingPos: 4, endPos: 3 },
  { qty: 5, startingPos: 4, endPos: 7 },
  { qty: 5, startingPos: 7, endPos: 4 },
  { qty: 1, startingPos: 8, endPos: 7 },
  { qty: 1, startingPos: 4, endPos: 5 },
  { qty: 2, startingPos: 5, endPos: 4 },
  { qty: 1, startingPos: 5, endPos: 8 },
  { qty: 1, startingPos: 5, endPos: 9 },
];

/**
 * move 6 from 9 to 3
move 2 from 2 to 1
move 1 from 8 to 2
move 3 from 7 to 2
move 7 from 6 to 9
move 1 from 9 to 5
move 3 from 5 to 7
move 6 from 8 to 6
move 1 from 7 to 8
move 6 from 6 to 5
move 4 from 5 to 8
move 9 from 2 to 9
move 1 from 2 to 3
move 3 from 1 to 3
move 3 from 5 to 1
move 10 from 3 to 5
move 4 from 4 to 6
move 2 from 7 to 6
move 2 from 6 to 9
move 6 from 8 to 6
move 1 from 4 to 3
move 1 from 4 to 5
move 1 from 4 to 1
move 2 from 3 to 1
move 1 from 3 to 7
move 8 from 1 to 9
move 1 from 1 to 2
move 1 from 2 to 7
move 6 from 6 to 3
move 7 from 3 to 5
move 14 from 5 to 6
move 2 from 1 to 3
move 5 from 5 to 8
move 5 from 8 to 1
move 2 from 7 to 1
move 5 from 6 to 9
move 8 from 9 to 3
move 13 from 9 to 3
move 7 from 1 to 4
move 6 from 4 to 1
move 22 from 3 to 1
move 1 from 9 to 3
move 2 from 6 to 1
move 1 from 3 to 4
move 7 from 9 to 8
move 2 from 1 to 7
move 2 from 3 to 2
move 2 from 6 to 9
move 2 from 7 to 8
move 1 from 3 to 6
move 9 from 8 to 6
move 1 from 2 to 4
move 8 from 1 to 2
move 1 from 9 to 4
move 3 from 4 to 1
move 1 from 4 to 6
move 10 from 6 to 5
move 5 from 2 to 9
move 6 from 9 to 3
move 2 from 5 to 3
move 2 from 9 to 7
move 7 from 5 to 8
move 5 from 6 to 2
move 3 from 3 to 7
move 3 from 3 to 5
move 4 from 5 to 8
move 1 from 3 to 5
move 6 from 6 to 8
move 1 from 5 to 7
move 9 from 8 to 9
move 1 from 3 to 1
move 7 from 2 to 7
move 9 from 7 to 6
move 2 from 2 to 3
move 7 from 9 to 3
move 9 from 6 to 8
move 7 from 3 to 4
move 2 from 7 to 6
move 4 from 4 to 5
move 3 from 5 to 6
move 2 from 7 to 4
move 5 from 4 to 7
move 13 from 8 to 4
move 2 from 9 to 4
move 2 from 8 to 7
move 6 from 7 to 5
move 6 from 4 to 2
move 1 from 7 to 5
move 3 from 2 to 7
move 1 from 7 to 8
move 3 from 2 to 4
move 2 from 3 to 9
move 2 from 7 to 2
move 6 from 5 to 4
move 3 from 6 to 2
move 2 from 6 to 9
move 5 from 2 to 9
move 12 from 4 to 8
move 3 from 9 to 2
move 12 from 1 to 5
move 4 from 4 to 6
move 12 from 8 to 9
move 2 from 6 to 5
move 1 from 4 to 8
move 1 from 4 to 1
move 3 from 2 to 1
move 2 from 6 to 7
move 1 from 5 to 9
move 2 from 1 to 4
move 10 from 5 to 1
move 2 from 7 to 3
move 18 from 9 to 7
move 8 from 7 to 2
move 1 from 9 to 6
move 1 from 6 to 7
move 10 from 7 to 9
move 1 from 4 to 2
move 19 from 1 to 5
move 8 from 5 to 9
move 3 from 8 to 4
move 2 from 5 to 2
move 2 from 3 to 6
move 10 from 5 to 2
move 4 from 1 to 2
move 2 from 9 to 2
move 1 from 1 to 6
move 2 from 5 to 6
move 1 from 8 to 7
move 1 from 5 to 8
move 1 from 5 to 6
move 18 from 2 to 5
move 5 from 2 to 1
move 6 from 5 to 8
move 1 from 8 to 9
move 2 from 2 to 4
move 1 from 2 to 6
move 2 from 7 to 6
move 1 from 4 to 1
move 4 from 8 to 5
move 1 from 2 to 9
move 2 from 8 to 3
move 1 from 3 to 6
move 1 from 4 to 8
move 1 from 8 to 9
move 10 from 5 to 7
move 5 from 5 to 1
move 2 from 4 to 1
move 3 from 7 to 6
move 12 from 1 to 4
move 8 from 9 to 5
move 6 from 7 to 4
move 1 from 7 to 9
move 4 from 4 to 3
move 1 from 1 to 7
move 3 from 9 to 5
move 2 from 3 to 1
move 1 from 7 to 6
move 8 from 4 to 7
move 1 from 7 to 6
move 7 from 6 to 4
move 2 from 1 to 3
move 1 from 7 to 1
move 1 from 3 to 7
move 1 from 1 to 6
move 4 from 9 to 3
move 5 from 4 to 6
move 12 from 6 to 2
move 3 from 9 to 4
move 8 from 2 to 6
move 2 from 9 to 6
move 8 from 5 to 6
move 4 from 5 to 8
move 14 from 6 to 3
move 11 from 4 to 9
move 2 from 2 to 7
move 8 from 3 to 9
move 11 from 3 to 6
move 14 from 9 to 1
move 7 from 1 to 3
move 2 from 9 to 5
move 2 from 2 to 8
move 6 from 7 to 5
move 1 from 9 to 8
move 13 from 6 to 3
move 4 from 6 to 8
move 3 from 1 to 6
move 5 from 5 to 8
move 7 from 8 to 7
move 2 from 1 to 8
move 1 from 4 to 1
move 4 from 8 to 9
move 8 from 7 to 5
move 1 from 8 to 1
move 4 from 9 to 3
move 1 from 4 to 5
move 5 from 5 to 2
move 1 from 8 to 9
move 1 from 8 to 6
move 2 from 6 to 2
move 4 from 8 to 6
move 4 from 1 to 8
move 4 from 8 to 5
move 1 from 9 to 8
move 1 from 2 to 3
move 4 from 6 to 1
move 1 from 8 to 2
move 3 from 5 to 4
move 4 from 2 to 5
move 1 from 7 to 9
move 1 from 2 to 6
move 3 from 1 to 8
move 2 from 4 to 5
move 2 from 6 to 1
move 3 from 8 to 9
move 4 from 9 to 2
move 1 from 7 to 1
move 1 from 6 to 7
move 4 from 1 to 6
move 1 from 7 to 4
move 6 from 2 to 8
move 2 from 4 to 8
move 1 from 9 to 5
move 3 from 6 to 2
move 1 from 6 to 4
move 7 from 3 to 5
move 2 from 8 to 1
move 3 from 2 to 8
move 6 from 8 to 5
move 17 from 5 to 3
move 2 from 1 to 6
move 3 from 8 to 3
move 1 from 9 to 5
move 11 from 5 to 2
move 40 from 3 to 5
move 11 from 2 to 7
move 4 from 7 to 8
move 1 from 8 to 9
move 1 from 3 to 5
move 1 from 4 to 8
move 19 from 5 to 8
move 7 from 7 to 8
move 16 from 5 to 2
move 6 from 5 to 8
move 1 from 5 to 8
move 1 from 9 to 4
move 1 from 6 to 1
move 1 from 4 to 7
move 1 from 6 to 9
move 1 from 1 to 7
move 1 from 7 to 3
move 1 from 7 to 2
move 1 from 9 to 8
move 1 from 3 to 4
move 1 from 4 to 6
move 14 from 2 to 9
move 24 from 8 to 4
move 8 from 8 to 3
move 1 from 6 to 3
move 16 from 4 to 1
move 3 from 8 to 4
move 3 from 3 to 8
move 4 from 3 to 4
move 1 from 3 to 9
move 13 from 9 to 4
move 16 from 1 to 8
move 8 from 8 to 1
move 3 from 1 to 7
move 1 from 8 to 6
move 1 from 3 to 8
move 10 from 8 to 5
move 5 from 5 to 2
move 3 from 8 to 9
move 1 from 8 to 9
move 1 from 4 to 5
move 5 from 2 to 6
move 3 from 5 to 2
move 1 from 6 to 1
move 5 from 1 to 5
move 1 from 1 to 5
move 2 from 7 to 3
move 2 from 3 to 2
move 1 from 5 to 7
move 7 from 5 to 3
move 5 from 9 to 5
move 2 from 7 to 9
move 4 from 5 to 6
move 2 from 9 to 8
move 2 from 2 to 4
move 5 from 3 to 5
move 1 from 3 to 2
move 7 from 4 to 9
move 1 from 8 to 1
move 1 from 2 to 1
move 9 from 4 to 6
move 2 from 1 to 8
move 1 from 3 to 9
move 2 from 8 to 6
move 13 from 4 to 6
move 1 from 8 to 7
move 2 from 9 to 6
move 3 from 5 to 7
move 3 from 2 to 5
move 3 from 2 to 6
move 5 from 6 to 2
move 4 from 2 to 5
move 4 from 5 to 7
move 5 from 5 to 7
move 7 from 9 to 6
move 6 from 7 to 2
move 22 from 6 to 5
move 10 from 5 to 8
move 7 from 5 to 4
move 8 from 8 to 5
move 18 from 6 to 2
move 5 from 7 to 5
move 1 from 8 to 2
move 6 from 5 to 1
move 7 from 4 to 2
move 4 from 1 to 5
move 1 from 7 to 9
move 1 from 8 to 6
move 1 from 7 to 8
move 10 from 5 to 9
move 12 from 2 to 1
move 8 from 5 to 2
move 19 from 2 to 9
move 1 from 6 to 8
move 13 from 9 to 3
move 8 from 1 to 2
move 5 from 1 to 3
move 10 from 2 to 1
move 7 from 2 to 5
move 3 from 5 to 7
move 4 from 1 to 3
move 1 from 2 to 3
move 3 from 1 to 2
move 1 from 8 to 6
move 2 from 7 to 5
move 4 from 1 to 3
move 6 from 5 to 4
move 2 from 2 to 1
move 1 from 2 to 9
move 6 from 4 to 5
move 5 from 5 to 9
move 1 from 6 to 8
move 1 from 5 to 1
move 6 from 9 to 2
move 5 from 2 to 4
move 3 from 1 to 6
move 2 from 4 to 7
move 22 from 3 to 9
move 1 from 8 to 4
move 2 from 4 to 3
move 2 from 6 to 1
move 2 from 1 to 5
move 1 from 6 to 7
move 1 from 7 to 4
move 6 from 3 to 7
move 1 from 2 to 4
move 8 from 7 to 3
move 1 from 4 to 5
move 1 from 7 to 9
move 5 from 3 to 6
move 1 from 8 to 4
move 4 from 3 to 2
move 32 from 9 to 3
move 3 from 6 to 7
move 5 from 9 to 3
move 1 from 9 to 7
move 2 from 9 to 2
move 2 from 4 to 3
move 2 from 5 to 4
move 5 from 3 to 2
move 3 from 7 to 8
move 1 from 7 to 2
move 1 from 8 to 5
move 1 from 3 to 4
move 5 from 4 to 5
move 4 from 5 to 2
move 3 from 5 to 7
move 1 from 7 to 5
move 1 from 6 to 5
move 2 from 8 to 5
move 15 from 2 to 4
move 3 from 5 to 6
move 4 from 6 to 5
move 2 from 5 to 2
move 1 from 2 to 4
move 25 from 3 to 9
move 2 from 5 to 2
move 11 from 9 to 2
move 13 from 2 to 1
move 4 from 4 to 7
move 12 from 9 to 8
move 6 from 7 to 8
move 7 from 4 to 7
move 7 from 7 to 8
move 1 from 5 to 1
move 5 from 4 to 3
move 2 from 2 to 1
move 2 from 9 to 5
move 7 from 1 to 7
move 1 from 1 to 4
move 12 from 3 to 2
move 1 from 3 to 9
move 1 from 1 to 3
move 1 from 9 to 1
move 7 from 7 to 2
move 1 from 4 to 7
move 2 from 8 to 7
move 7 from 1 to 2
move 1 from 3 to 4
move 26 from 2 to 1
move 4 from 8 to 1
move 3 from 1 to 6
move 1 from 6 to 3
move 1 from 6 to 9
move 1 from 3 to 8
move 20 from 1 to 3
move 1 from 9 to 7
move 4 from 7 to 1
move 1 from 5 to 3
move 4 from 3 to 5
move 1 from 6 to 2
move 6 from 3 to 2
move 8 from 1 to 4
move 1 from 1 to 5
move 3 from 1 to 4
move 7 from 2 to 4
move 10 from 3 to 8
move 4 from 4 to 3
move 12 from 4 to 7
move 3 from 3 to 1
move 2 from 4 to 3
move 2 from 8 to 1
move 6 from 8 to 9
move 5 from 9 to 6
move 1 from 9 to 3
move 3 from 8 to 7
move 10 from 8 to 5
move 4 from 8 to 7
move 9 from 7 to 9
move 4 from 8 to 4
move 2 from 4 to 3
move 3 from 1 to 7
move 11 from 7 to 4
move 6 from 4 to 8
move 1 from 7 to 3
move 4 from 5 to 1
move 5 from 3 to 6
move 5 from 9 to 4
move 1 from 9 to 8
move 10 from 4 to 8
move 5 from 1 to 2
move 1 from 7 to 6
move 9 from 6 to 3
move 7 from 8 to 7
move 3 from 4 to 1
move 2 from 2 to 1
move 9 from 8 to 3
move 10 from 5 to 8
move 18 from 3 to 9
move 1 from 7 to 8
move 1 from 5 to 3
move 4 from 8 to 3
move 2 from 6 to 3
move 6 from 7 to 2
move 1 from 5 to 3
move 1 from 1 to 9
move 10 from 3 to 9
move 4 from 1 to 8
move 13 from 8 to 1
move 3 from 1 to 8
move 3 from 2 to 4
move 5 from 2 to 6
move 5 from 6 to 4
move 28 from 9 to 2
move 2 from 9 to 5
move 2 from 5 to 2
move 1 from 3 to 7
move 2 from 1 to 4
move 3 from 8 to 3
move 1 from 9 to 4
move 3 from 4 to 6
move 2 from 3 to 7
move 8 from 1 to 5
move 3 from 7 to 6
move 14 from 2 to 8
move 1 from 9 to 1
move 6 from 5 to 6
move 4 from 2 to 5
move 9 from 8 to 2
move 4 from 8 to 4
move 7 from 2 to 4
move 12 from 4 to 3
move 5 from 4 to 7
move 5 from 7 to 4
move 1 from 8 to 7
move 1 from 4 to 5
move 2 from 5 to 4
move 1 from 5 to 8
move 1 from 5 to 9
 */
