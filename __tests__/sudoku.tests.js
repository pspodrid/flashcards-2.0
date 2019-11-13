import { Checker } from './../src/js/checker.js';

describe('Checker', () => {

  let invalidChecker1;
  let invalidChecker2;
  let testChecker1;
  let testChecker2;
  let testChecker3;
  let testChecker4;

  beforeEach(() => {
    invalidChecker1 = new Checker([
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0]
    ]);
    invalidChecker2 = new Checker([
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0]
    ]);
    testChecker1 = new Checker([
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0]
    ]);
    testChecker2 = new Checker([
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9]
    ]);
    testChecker3 = new Checker([
      [1,1,1,1,1,1,1,1,1],
      [2,2,2,2,2,2,2,2,2],
      [3,3,3,3,3,3,3,3,3],
      [4,4,4,4,4,4,4,4,4],
      [5,5,5,5,5,5,5,5,5],
      [6,6,6,6,6,6,6,6,6],
      [7,7,7,7,7,7,7,7,7],
      [8,8,8,8,8,8,8,8,8],
      [9,9,9,9,9,9,9,9,9]
    ]);
    testChecker4 = new Checker([
      [8,2,4,9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2],
    ]);
  });

  test('expect board to be 9 by 9', () => {
    expect(testChecker1.boardIsValid()).toEqual(true);
    expect(invalidChecker1.boardIsValid()).toEqual(false);
    expect(invalidChecker2.boardIsValid()).toEqual(false);
  });

  test('expect each row to have 1 - 9', () => {
    expect(testChecker2.rowsAreValid()).toEqual(true);
    expect(testChecker3.rowsAreValid()).toEqual(false);
  });

  test('expect each column to have 1 - 9', () => {
    expect(testChecker3.columnsAreValid()).toEqual(true);
    expect(testChecker2.columnsAreValid()).toEqual(false);
  });

  test('should create array matching grid from x and y', () => {
    expect(testChecker2.create3x3(0,0)).toEqual([1,2,3,1,2,3,1,2,3]);
  });

  test('should check array of nine digits for 1-9', () => {
    expect(testChecker4.checkNineDigits(testChecker4.board[0])).toEqual(true);
    expect(testChecker3.checkNineDigits(testChecker3.board[0])).toEqual(false);
  });

  test('should check the 3x3 grids', () => {
    expect(testChecker4.check3x3()).toEqual(true);
    expect(testChecker3.check3x3()).toEqual(false);
  });

});
