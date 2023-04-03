// a callback is a function passed as an argument to another function
//this technique allows a function to call another function
// a callback function can run after another function has finished
//example
//suppose 

function myDisplayer(some){
    document.getElementById("demo").innerHTML=some;
}

function myCalculator(num1,num2){
    let sum=num1+num2;
    return sum;
}   

let result=myCalculator(5,6);
myDisplayer(result);
//example 2
//or, you could call a calculator function (myCalculatora),and let the calculator function call the display function myDisplayer
function myDisplayer(some)
{
    document.getElementById("demo").innerHTML=some;

}
function  myCalculator(num1,num2){
    let sum=num1+num2;
    myDisplayerr(sum);
}
myCalculator(5,6);

//example 3 using callback
//the problem with the first  example above,is that you havebto call two functions to disply the result.
//the problem with the second example is that you cannot prevent the calculator  function from displaying the result
//using a callback you could call the calculator function (myCalculator) with a callback,and le the calculator function run the callback after the calculation is finished.

function myDisplayer(some){
    document.getElementById("demo").innerHTML=some;
}
function myCalculator(num1,num2,myCallback){
    let sum=num1+num2;
    myCallback(sum);
}
myCalculator(5,6,myDisplayer);
//callback in set timeout
function myFunction(value)
{
    document.getElementById("demo").innerHTML=value;
}
setTimeout(()=>{myFunction("hi 11 !");},3000);