console.log("-------------- var ---------------")

function sayHello(){

    for(var index=1;index<=10;index++){
        console.log("Index=",index)
    }

    console.log("Outside the for loop -- Index=",index)

}

sayHello()

console.log("-------------- let ---------------")

function sayHelloToLet(){

    for(let index=1;index<=10;index++){
        console.log("Index=",index)
    }

    // console.log("Outside the for loop -- Index=",index)
    console.log("-----------------------------------------")
    let name="Delloite"

    console.log(name);

    name=name+" Inc"
    console.log(name)



}

sayHelloToLet()

console.log("-------------- const ---------------")

const gstRate=18;
console.log("GST Value",gstRate);

gstRate=gstRate+10;

