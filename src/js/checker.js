export function Checker(board) {
  this.board = board;
}

Checker.prototype.boardIsValid = function () {
  if (!Array.isArray(this.board) || this.board.length != 9) {
    return false;
  } else {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i].length != 9) {
        return false;
      }
    }
  }
  return true;
};

Checker.prototype.rowsAreValid = function () {
  for (var i = 0; i < this.board.length; i++) {
    const hasAllNine = this.checkNineDigits(this.board[i]);
    if (!hasAllNine) return false;
  };
  return true;
};

Checker.prototype.columnsAreValid = function () {
  for (var i = 0; i < 9; i++) {
    const thisColumn = [];
    this.board.forEach(row => {
      thisColumn.push(row[i]);
    });
    const hasAllNine = this.checkNineDigits(thisColumn);
    if (!hasAllNine) return false;
  }
  return true;
};

Checker.prototype.checkNineDigits = function (nineIntArray) {
  const testArray = [1,2,3,4,5,6,7,8,9];
  const findNumber = (row, index, arrayToTest) => {
    if (index === row.length) {
      return true;
    } else if (arrayToTest.includes(row[index])) {
      const newArray = arrayToTest.filter(n => n != row[index]);
      index++;
      return findNumber(row, index, newArray);
    } else {
      return false;
    }
  };
  return findNumber(nineIntArray, 0, testArray);
};

Checker.prototype.create3x3 = function (x, y) {
  const gridArray = [];
  for (var i = x; i < (x+3); i++) {
    gridArray.push(this.board[i][y]);
    gridArray.push(this.board[i][y+1]);
    gridArray.push(this.board[i][y+2]);
  }
  return gridArray;
}

Checker.prototype.check3x3 = function () {
  const testXAndY = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[3,6]];
  for (var i = 0; i < testXAndY.length; i++) {
    const xy = testXAndY[i];
    const this3x3 = this.create3x3(xy[0], xy[1]);
    if (!this.checkNineDigits(this3x3)) return false;
  }
  return true;
};
