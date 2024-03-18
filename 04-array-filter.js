const numbers=[1,2,3,4,5,6,7,8,9,10]

let evenNumbers=[];

for(let index=0;index<10;index++){
    const number=numbers[index];

    if(number%2==0){
        evenNumbers.push(number)
    }
}

console.log("O:",numbers)
console.log("E:",evenNumbers)


// ---------------------------------------

function filterOdd(number){
    return number%2==1;
}

let oddNumbers=numbers.filter(filterOdd);

console.log("Odd:",oddNumbers);
// Every number from numbers array is passed on to the filterOdd() and if it returns
// tru , then only it is retained



let oddNumbersWithArrow=numbers.filter((number)=>number%2==1);
console.log("Odd with =>:",oddNumbersWithArrow);

// ------------- Filter with Objects--------------

const jobs = [
    { id: 1, position: "Developer", isActive: true },
    { id: 2, position: "Tester", isActive: true },
    { id: 3, position: "Manager", isActive: false },
    { id: 4, position: "Finance", isActive: true },
    { id: 5, position: "Devops", isActive: false },
  ];

//   Filter out all active jobs

function filterActiveJobs(job){
    return job.position;
}

const activeJobs=jobs.filter((job)=>job.isActive);

console.log("Active Jobs:",activeJobs)