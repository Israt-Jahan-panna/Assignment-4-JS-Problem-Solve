function cubeNumber(number) {
  if (typeof number === "number") {
    let result = number * number * number;
    return result;
  } else {
    return "Please type a number.";
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please enter only string ";
  }
  if (string1.match(string2)) {
    return true;
  } else {
    return false;
  }
}

function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else if (arr[1] > arr[0]) {
    const temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
  } else if (arr[1] === arr[0]) {
    return "equal";
  } else {
    return arr;
  }
}

