const user={
    name: 'avani',
    userName:'avani',
    //password:'password:)',
    password:'12345',
    login: function(userName,password)
    {
        if(userName === this.userName && password === this.password)
        {
            console.log('login successfully');
        }
        else
        {
            console.log('Authentication failed');
        }
    },
};

user.login('nehal','nehal');
user.login('nehal_mahida','password:)');
user.login('nehal_mahida','abcde');
user.login('avani','12345');

//using a constructor
function person(first_name,last_name)
{
    this.first_name=first_name;
    this.last_name=last_name;
}
//creating  new instances of person object
let person1=new person('nakul','latiyan');
let person2=new person('Rahul','Avasthi');

console.log(person1.first_name);
console.log('${person2.first_name} ${person2.last_name}');