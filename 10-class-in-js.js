// Objects,functions,variables ---> camelCasing
// Class ---> PascalCasing 


//onetwothreefour

// camelCasing --> oneTwoThreeFour
// PascalCasing --> OneTwoThreeFour

// displayComponent()
// PersonComponent
// In React -- function which is going to be a component --> LikeComponent()


class Person{
    constructor(name){
        this.name=name;
        this.company="Delloite"
    }

    work(){
        console.log(this.name," works for  ",this.company)
    }
}

const p1=new Person("Tom")
p1.work();

const p2=new Person("Alex")
p2.work()