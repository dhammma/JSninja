/**
 * See:
 * https://github.com/dmitriys-lits/JSninja/blob/master/README.md
 */

function findWord(text, matrix) {
  var width = matrix[0].length;
  var height = matrix.length;
  var length = text.length;

  var matchedHD = 0; // horizontal direct
  var matchedHR = 0; // horizontal reverse
  var matchedVD = 0; // vertical direct
  var matchedVR = 0; // vertical reverse

  var i, j;

  for (j = 0; j < height; j++) {
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
