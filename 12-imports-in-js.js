// There are two types of imports
//  named and default imports

// There are two types of exports
//  named and default exports

// --------------------one.js-----------
// When export happens without default keyword --- named export

export function f1(){

}

export function f2(){

}
// there can be only one default export --normally given to the main business logic function
export default function mainFunctionOfOne(){

}


// --------------two.js-------------------------
// When a function.variable, object is exported as named export --
// It is imported in pair of curly braces
// 
// When a function.variable, object is exported as default export --
// It is imported without  pair of curly braces
import {f1,f2,},mainFunctionOfOne from One