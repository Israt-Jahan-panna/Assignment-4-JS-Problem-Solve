function matchFinder(string1, string2) { 
  
    if(typeof string1 !== "string" || typeof string2 !== "string"){
       return "please enter only string " 
    } 
    if(string1.match(string2)){
        return true;
    }
    else {
        return false;
    }
    }

const input = matchFinder('Peter Parker' ,'pet')
console.log(input);
