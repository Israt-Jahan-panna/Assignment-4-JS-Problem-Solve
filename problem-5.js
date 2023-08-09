function canPay(changeArray, totalDue) {
  if (changeArray.length != 0) {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      const index = i;
      const element = changeArray[index];
      sum = sum + element;
    }
    if (sum >= 10) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Your array input is empty please enter a valid array input";
  }
}
const inputArray = [];
const requireBalance = 10;
const output = canPay(inputArray, requireBalance);
console.log(output);
