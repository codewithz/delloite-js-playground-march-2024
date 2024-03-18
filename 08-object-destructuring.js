
const address={
    city:"Mumbai",
    state:"MH",
    pincode:400001,
    country:"India"
}

// Traditional Way 

// const city=address.city;
// const state=address.state;
// const pincode=address.pincode;
// const country=address.country;

// ES 6 way

const {city,state:st,pincode,country}=address
let state="Maharashtra";

console.log(city);
console.log(state);
console.log(st);
console.log(pincode);
console.log(country);

console.log("------------- Desturcturing and Functions-------------------")

function displayAddress(address){
    console.log("------------1-------------")
    console.log(address.city);
    console.log(address.state)
    console.log(address.country)
}

displayAddress(address)

// const {city,state,country}=address

function displayAddressNewWay({city,state,country}){
    console.log("------------2-------------")
    console.log(city);
    console.log(state)
    console.log(country)

}

displayAddressNewWay(address)


