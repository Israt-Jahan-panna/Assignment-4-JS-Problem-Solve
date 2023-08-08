function matchFinder(string1, string2) { 
  
    if(typeof string1 !== "string" || typeof string2 !== "string"){
       return "please enter a string " 
    } 
    if(string1.match(string2)){
        return true;
    }
    else {
        return false;
    }
    }

const input = matchFinder('israt Jahan',2 )
console.log(input);
