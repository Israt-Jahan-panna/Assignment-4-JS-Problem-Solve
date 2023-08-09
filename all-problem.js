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

function findAddress(obj) { 
  const  street = obj.street;
  const house = obj.house;
  const society = obj.society  ;
   if (street && house && society){
      const address = street + "," + house + "," + society ;
      return address;
   }
   else if ( street && society ){
      const address = street + "," + '__' + "," + society ;
      return address;
   }
   else if ( street && house ){
      const address = street + "," + house + "," + '__';
      return address;
   }
   else if ( house && society){
      const address = '__' + "," + house + "," + society;
      return address;
   }
   else if ( street ){
      const address = street + "," + '__' + "," + '__' ;
      return address;
   }
   else if ( house ){
      const address ='__' + "," + house + "," + '__' ;
      return address;
   }
   else {
      const address ='__' + "," + '__'+ "," + society ;
      return address;
   }

  

} 
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

