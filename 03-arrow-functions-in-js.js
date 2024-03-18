// Functions in Javascript are first class passengers----

// They can be assigned to a variable
// They can be passed as an argument


function sayHello(){
    console.log("Hello Arrow Functions");
}

// Arrow Function -- It can be assigned to a variable and it can be passed as an argument 

// Arrows
// -> Arrow
// => Fat Arrow 

const v1=
            ()=>{
                console.log("Hello Arrow Functions");
            }

v1();

// ---------------------------------------------------

function squareMe(number){
    return number*number;
}


const sq1=(number)=>{
    return number*number;
}

console.log(sq1(4))

// If your function have one parameter -- we can skip the  ()
// 0 or more than 1 -- () are compulsory
//1 -- skip the () 

const sq2=number=>{
    return number*number;
}

console.log(sq2(5))

// If your function have only one statement
// We can rid of {} and return keyword
// {} and return are always either together or absent

// Single statement -- console.log() -- it will simply execute
// Single Statement -- number*number -- it will return

const sq3=number=> number*number;

console.log(sq3(6))

// ------------------------

function addMe(a,b,c){
    return a+b+c;
}

(a,b,c)=>a+b+c;


function calculation(x,y,z){
    const a=x+3;
    const b=y+5;
    const c=z-b;

    return a+b+c;
}


(x,y,z)=>{
    const a=x+3;
    const b=y+5;
    const c=z-b;

    return a+b+c;
}



