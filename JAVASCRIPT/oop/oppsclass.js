class User
{
    #password;
    constructor(name,userName,password)
    {
        this.name=name;
        this.userName=userName;
        this.#password=password;
    }
    login(userName,password)
    {
        if(userName === this.userName && password=== this.#password)
        {
            console.log('Login Successfully');
        }
        else
        {
            console.log('Authentication Failed!')
        }
    }
    setPassword(newPassword)
    {
        this.#password=newPassword;
    }
};

const nehal = new User('Nehal Mahida','nehali_mahinda','password:)');
const js=new User('Java Script','js','python:)');

nehal.login('nehal_mahida','password:)');//login succesfully
js.login('js','python:)');//login successfully

console.log(nehal.name)//Nehal mahida
console.log(nehal.password);//undefined
// console.log(nehal.#password); //syntax error

nehal.setPassword('new_password:)');
nehal.login('nehal_mahida','password:)');//Authentication failed
nehal.login('nehal_mahida','new_password:)');//Login successfully

class Vehile
{
    getDetails()
    {
        return("hello");
    }
}
let bike = new Vehicle();
bike.getDetails();

//Defining class using es6
class Vehicle
{
    constructor(name,maker,engine)
    {
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }
    getDetails()
    {
        return('The name of the bike is ${this.name}.');
    }
}
// making object with the help of the constructor
let bike1= new Vehicle('Hayabusa','Suzuki','1340cc');
let bike2= new Vehicle('Ninja','Kawaski','998cc');

console.log(bike1.name)//Hayabusa
console.log(bike2.name) //Kawaski
console.log(bike1.getDetails());