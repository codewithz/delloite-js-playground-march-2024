
class Person{
    constructor(name){
        this.name=name;
        this.company="Delloite"
    }

    work(){
        console.log(this.name," works for  ",this.company)
    }
}

// -------------------------------------------------

class Employee extends Person{
    constructor(name,department){
        super(name);
        this.department=department;
    }

    work(){
        console.log(`${this.name} works for ${this.company}
             in ${this.department} department`)
    }

}

// -----------------------

const employee=new Employee("Tom","IT")
employee.work()