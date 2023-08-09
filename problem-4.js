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

const input ={
    street:10,
    house:'15A',
    society:'Earth Perfect'
}
const output = findAddress(input);
console.log(output);