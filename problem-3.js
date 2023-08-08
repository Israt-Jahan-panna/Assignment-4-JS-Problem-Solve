function sortMaker(arr) { 
    if( arr[0] < 0 || arr[1] < 0){
        return 'Invalid Input'
    }
    else if( arr[1] > arr[0]){
        const temp = arr [0];
        arr[0] = arr [1];
        arr[1] = temp ;
        return arr; 
    }

    else if(arr[1] === arr[0]){
        return "equal";
    }

    else{
        return arr;
    }

    
}

const arrayInput = [2 , 3];
const arrayOutput= sortMaker(arrayInput)
console.log(arrayOutput);
