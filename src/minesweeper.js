const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const countNeighborMines = (row, col) => {
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      if (i < 0 || i >= matrix.length) continue;
      for (let j = col - 1; j <= col + 1; j++) {
        if (j < 0 || j >= matrix[0].length || (i === row && j === col))
          continue;
        count += matrix[i][j] ? 1 : 0;
      }
    }

    return count;
  };

  return matrix.map((row, rowIndex) =>
    row.map((_, colIndex) => countNeighborMines(rowIndex, colIndex)),
  );
}

module.exports = {
  minesweeper,
};
