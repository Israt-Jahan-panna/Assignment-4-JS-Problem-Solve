function cubeNumber(number) { 
    if(typeof number === "number"){
        let result = number*number*number;
        return result; 
    }
    else{
        return 'Please type a number.';
    }

}

const input = cubeNumber(7);
console.log(input);