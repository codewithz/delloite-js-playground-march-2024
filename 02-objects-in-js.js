const person={
    name:"Zartab Nakhwa",
    age:33,
    blog:"www.codewithz.com",
    city:"Mumbai",
    teachTech(){
        console.log("Teaching React...")
    }
}

// console.log(person)

person.teachTech()

// -------- Dot operator -------

person.education="Masters in IT"

// console.log(person)

// ------------- [] operator----

person["car type"]="Nissan Sunny"

// console.log(person)

let propertyName="color";
let propertyValue="Black";

person[propertyName]=propertyValue;
console.log(person)


 propertyName="techStack";
 propertyValue=["Java","JavaScript","React","Devops"];

person[propertyName]=propertyValue;

person.name="Zartab M Nakhwa"
console.log(person)

console.log(person['car type'])
// console.log(person.car type)




