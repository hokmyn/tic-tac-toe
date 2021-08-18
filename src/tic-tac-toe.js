class TicTacToe {
  constructor() {
    this.prevSymb = "";
    this.arr = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.curSymb = "x";
  }

  getCurrentPlayerSymbol() {
    return this.curSymb;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.getFieldValue(rowIndex, columnIndex)) {
      this.arr[rowIndex][columnIndex] = this.curSymb;
      this.prevSymb = this.curSymb;
      this.curSymb = this.curSymb === "x" ? "o" : "x";
    }
  }

  isFinished() {
    return this.getWinner() || this.isDraw() ? true : false;
  }

  getWinner() {
    let isRowCompl = false;
    let isColCompl = false;
    let isMainDiagCompl = false;
    let isSideDiagCompl = false;
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (this.arr[i].every((elem) => elem === this.prevSymb)) {
        isRowCompl = true;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (this.arr[i][i] === this.prevSymb) {
        count++;
      }
    }
    if (count === 3) {
      isMainDiagCompl = true;
    } else {
      count = 0;
    }
    for (let i = 0; i < 3; i++) {
      if (this.arr[i][this.arr.length - i - 1] === this.prevSymb) {
        count++;
      }
    }
    if (count === 3) {
      isSideDiagCompl = true;
    } else {
      count = 0;
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.arr[j][i] === this.prevSymb) {
          count++;
        }
      }
      if (count === 3) {
        isColCompl = true;
      } else {
        count = 0;
      }
    }

    if (isRowCompl || isSideDiagCompl || isColCompl || isMainDiagCompl) {
      return this.prevSymb;
    } else {
      return null;
    }
  }

  noMoreTurns() {
    for (let i = 0; i < 3; i++) {
      if (this.arr[i].indexOf(null) !== -1) {
        return false;
      }
    }
    return true;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner() ? true : false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.arr[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
