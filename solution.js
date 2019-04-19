/**
 * See:
 * https://github.com/dmitriys-lits/JSninja/blob/master/README.md
 */

function findWord(text, matrix) {
  const reversedArrayText = text.split("").reverse();
  const reversedText = reversedArrayText.join();
  const width = matrix[0].length;
  const height = matrix.length;
  const length = text.length;

  // check horizontal case
  if (length <= width) {
    for (let i = 0; i < height; i++) {
      if (matrix[i].includes(text) || matrix[i].includes(reversedText)) {
        return true;
      }
    }
  }

  // check vertical case
  if (length <= height) {
    for (let j = 0; j < width; j++) {
      let directMatchLength = 0;
      let reversedMatchLength = 0;

      for (let i = 0; i < height; i++) {
        reversedMatchLength =
          matrix[i][j] === reversedArrayText[reversedMatchLength]
            ? reversedMatchLength + 1
            : 0;
        directMatchLength =
          matrix[i][j] ===
          reversedArrayText[reversedArrayText.length - directMatchLength - 1]
            ? directMatchLength + 1
            : 0;

        if (directMatchLength === length || reversedMatchLength === length) {
          return true;
        }
      }
    }
  }

  return false;
}
