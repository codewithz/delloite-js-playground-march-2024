// In JS there is a concept of truthy and falsy values

// false: The boolean value false.
// 0: The number zero (0).
// -0: Negative zero.
// 0n: BigInt zero (since ES2020).
// "": An empty string.
// null: The absence of any value.
// undefined: The value undefined.
// NaN: Not-a-Number.


// Trthy values are 

// true: The boolean value true.
// Any non-zero number, including negative numbers and fractions.
// Non-empty strings.
// Arrays (even if empty).
// Objects (even if empty).
// Functions (even if empty).

const x=[];

if(x){
    console.log("Truthy")
}
else{
    console.log("falsy")
}