/**
 * See:
 * https://github.com/dmitriys-lits/JSninja/blob/master/README.md
 */

function findWord(text, matrix) {
  var width = matrix[0].length;
  var height = matrix.length;
  var length = text.length;

  var matchedHD; // horizontal direct
  var matchedHR; // horizontal reverse
  var matchedVD; // vertical direct
  var matchedVR; // vertical reverse

  var i, j;

  for (j = 0; j < height; j++) {
    matchedHD = 0;
    matchedHR = 0;
    for (i = 0; i < width; i++) {
      matchedHD = matrix[j][i] === text[matchedHD] ? matchedHD + 1 : 0;
      matchedHR =
        matrix[j][i] === text[length - 1 - matchedHR] ? matchedHR + 1 : 0;

      if (matchedHD === length || matchedHR === length) {
        return true;
      }
    }
  }

  for (i = 0; i < width; i++) {
    matchedVD = 0;
    matchedVR = 0;
    for (j = 0; j < height; j++) {
      matchedVD = matrix[j][i] === text[matchedVD] ? matchedVD + 1 : 0;
      matchedVR =
        matrix[j][i] === text[length - 1 - matchedVR] ? matchedVR + 1 : 0;

      if (matchedVD === length || matchedVR === length) {
        return true;
      }
    }
  }

  return false;
}
