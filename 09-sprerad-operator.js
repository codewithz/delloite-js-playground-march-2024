//Denoted by ...
//array [...]
// object {...}

// To spread the elements of an object or an array into another one

const first=[1,2,3]
const second=[4,5,6]

//1,2,3,a,b,c,4,5,6

const combined=first.concat(["a","b","c"]).concat(second)
console.log(combined)

//1,2,3,a,4,5,6,b

const combined1=first.concat("a").concat(second).concat("b")
console.log(combined1)

const combined3=[...first,"a",...second,"b"]
console.log(combined3)

// Cloning

const cloneFirst=[...first]
console.log(cloneFirst)

console.log("............................................")

const grades=["C","A","B","D"]
console.log("Original:",grades)
const sorted=[...grades].sort();
console.log("Sorted:",sorted)
console.log("Original after sorting:",grades)

// --- Spread Operator with Objects 

const name={name:"Zartab"}
const job={position:"Corporate Trainer"}

const combinedObject={...name,color:"Black",...job}
console.log(combinedObject)