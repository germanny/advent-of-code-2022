// Utility Functions
export const compose =
  (...fns: any[]) =>
  (x: any) =>
    fns.reduceRight((y, f) => f(y), x);

export const findObjectInArrayByKey = <T>(
  array: { [key: string]: T }[],
  input: string
): { [key: string]: T } =>
  array.find((obj) => Object.keys(obj).find((key) => obj[key] === input))!;

export const getLargestNumber = (array: number[]): number =>
  array.reduce((x, y) => Math.max(x, y));

export const mapMultidimensionalArray = (
  array: number[][],
  cb: (array: number[]) => number
): number[] => array.map((arr) => cb(arr));

export const sortArrayDesc = (array: number[]): number[] =>
  array.sort((a: number, b: number) => b - a);

export const sumAllNumbersInArray = (array: number[]): number =>
  array.reduce((x, y) => x + y, 0);
