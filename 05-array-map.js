// const jobs = [
//     { id: 1, position: "Developer", isActive: true },
//     { id: 2, position: "Tester", isActive: true },
//     { id: 3, position: "Manager", isActive: false },
//     { id: 4, position: "Finance", isActive: true },
//     { id: 5, position: "Devops", isActive: false },
//   ];


// <div>
//     <h1>ID</h1>
//     <h3>Position</h3>
//     <button disabled=!isActive>Apply</button>
// </div>

// filter vs map 

// [1,2,3,4,5] --> filter(odd) --> [1,3,5]
// 1. A condition is applied to give only true values
// 2. Number of input and numbner of output need not to be mathced
// 3. Type of input and output remains same

// Map 

// [1,2,3,4,5] -- > map (number to text) -->['one','two','three','four,'five']

// 1. A transformation logic is applied, it will apply it to the each element of the array
// 2. number of input = number of output
// 3. type of input may or may not be equal to type of output

const numbers=[1,2,3,4,5]

const squaredNumbers=[];

for(let index=0;index<5;index++){
    const number=numbers[index];
    const square=number*number;

    squaredNumbers.push(square)
}

console.log(squaredNumbers)

// ---------------------------------------------------

function squareNumber(number){
    return number*number;
}

const sqNumbers=numbers.map(squareNumber);
console.log("SQ Numbers: ",sqNumbers)




const sqNumbers1=numbers.map((number)=>number*number);
console.log("SQ Numbers 1: ",sqNumbers)


const colors=["red","green","blue"]


const transformedColors=colors.map((color)=>`<li>${color}</li>`)

console.log("O:",colors)
console.log("Transformed:",transformedColors)

