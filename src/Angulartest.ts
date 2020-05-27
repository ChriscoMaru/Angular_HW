
class Person{

    private firstName: string;
    private lastName: string;
    private age: string;
    private phone: string;
    private state: string;
    private zipcode: string;
    private occupation: string;
    private hourlyWage: number;
    private hours: number;
    private degrees: string[];
    

    constructor(firstName: string, lastName: string, age: string, phone: string, state: string, zipcode: string, occupation: string, hourlyWage: number, hours?: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phone = phone;
        this.state= state;
        this.zipcode = zipcode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        if(hours){
            this.hours = hours;
        } else {
            this.hours = 40;
        }
        
    }

    //getters
    getFullName(): string{
        return "Full Name: " + this.firstName + " " +this.lastName;
    }

    setFullName(firstName: string, lastName: string): void{
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getNameAndPhone(): string{
        return this.getFullName() + 
        "\nPhone Number: " + this.phone; 
    }

    getLocation(): string{
        return this.getFullName() + " lives in the state of " + this.state + " within the zipcode of " + this.zipcode;
    }
    getOccupation(): string{
        return this.getFullName() + " works as a " + this.occupation + " at age " + this.age;
    }
    weeklyWage(wage?: number): number{
        wage = this.hourlyWage * this.hours;
        return wage; 
    }
    personInfo(): string{
        return this.getFullName() + " makes $" + this.weeklyWage() + " per Week!"
    }
    addCerts(...certs){
        for(let i = 0; i < certs.length; i++){
            this.degrees.push(certs[i]);
        }
    }
    public static newPerson(config: PersonOptions):{ age: string, phone: string } {
        let newPerson = {
            age: "30",
            phone: "K-000"
        }
        if(config.age){
            newPerson.age = config.age;
        }
        if(config.phone){
            newPerson.phone = config.phone
        }
        return newPerson;
     }
    
   
   
    
}

interface PersonOptions{
    firstName: string;
    lastName: string;
    age?: string;
    phone?: string;
   
}



let person0 =  Person.newPerson({firstName: "George", lastName: "Bergs", age: "23", phone: "K098"});
console.log(person0);

let person1 = new Person("John", "Carter", "25", "K-589", "New York", "12345", "Logger", 34);

let person2 = new Person("Miley", "Cyrus", "67", "K-674", "Florida", "84598", "Dancer", 78);

let person3 = new Person("Carl", "Johnson", "46", "K-902", "California", "84698", "Driver", 68);

let person4 = new Person("All", "Might", "56", "K-555", "Tokyo", "84762", "Symbol of Peace", 1000);



document.getElementById("id1").innerHTML = person1.getFullName();

document.getElementById("id2").innerHTML = person2.getLocation();

document.getElementById("id3").innerHTML = person3.getNameAndPhone();

document.getElementById("id4").innerHTML = person4.getOccupation();

document.getElementById("id5").innerHTML = person3.personInfo();

