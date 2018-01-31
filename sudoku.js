var input = "13-2--74--25-1----48--6--5----78-21-5---9-37-9---3---5-4---689--53--14--6--------";
var input = "--4--3----2--1--"

function sudoku(input) {

  return output;
}

function makeRowArray(input) {
  let rowArray = [];
  for (let i = 0; i < input.length; i += 4) {
    rowArray.push(input.substring(i, i + 4).split(''));
  }
  return rowArray;
}

function makeColsArray(rowArray) {
  let colsArray = [];
  let column = "";
  for (var j = 0; j < rowArray[0].length; j++) {
    for (var i = 0; i < rowArray.length; i++) {
      column += rowArray[i][j];
    }
    colsArray[j] = column.split("");
    column = "";
  }

  return colsArray;
}

function makeBoxArray(input) {
  var boxArray = [];
  var box = "";
  // for (var j = 0; j < 4; j++) {
  for (var i = 0; i < 4; i += 2) {
    box += input[i];
    box += input[i + 1];
    box += input[i + 4];
    box += input[i + 5];
  }
  boxArray[i] = box;
  for (var k = 0; k < 4; k += 2) {
    box += input[k + 8];
    box += input[k + 9];
    box += input[k + 12];
    box += input[k + 13];
  }
  boxArray[k] = box;
  boxArray.splice(0, 4)
  boxArray = boxArray.join();
  var boxx = [];
  var h = 4;
  for (var g = 0; g < boxArray.length; g += 4) {
    boxx.push(boxArray.slice(g, h).split(""));
    h += 4;
  }
  // console.log(boxArray);
  return boxx;
}

// console.log(makeRowArray(input));
// console.log(makeColsArray(makeRowArray(input)));
// console.log(makeBoxArray(input));

// console.log(sudoku(input) === "136259748725418936489367152364785219518692374972134685241576893853921467697843521");

// var output = "136259748725418936489367152364785219518692374972134685241576893853921467697843521";
var output = "1243431234212134";

function makeSolveNow(input) {
  var rowArray = makeRowArray(input);
  console.log(rowArray, "row array");
  var colsArray = makeColsArray(rowArray);
  console.log(colsArray, "cols array");
  var boxArray = makeBoxArray(input);
  console.log(boxArray, "box array");
  var result = "";
  var k = 1;
  var limit = 9;
  for (var i = 0; i < boxArray.length; i++) {
    for (var j = 0; j < boxArray[i].length; j++) {
      // while (k <= limit)
      if (boxArray[i][j] === "-") {

          // console.log(boxArray[i][j]);
        boxArray[i][j] = k;
        k += 1;
      // }
      }
    }

  }
  console.log(boxArray, "box array");
  return boxArray;
}

// console.log(input[0]);
// input = input.split("");
// input[0] = 1;
// console.log(input);
// console.log(input[0]);
console.log(answer = makeSolveNow(input));
console.log(answer === output, "1243431234212134 answer ");
// console.log(output.length);

// function add() {
//   let x = 0;
//   for (var i = 1; i <= 9; i++) {
//     x += i;
//   }
//   return x;
// }
//
// console.log(add());

// function add(output) {
//   let result = 0;
//   for (var i = 0; i < output.length; i++) {
//     result += Number(output[i]);
//   }
//   return result;
// }
//
// console.log(add(output));
