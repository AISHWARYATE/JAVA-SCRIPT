//the keyword async before a function maes the function return a promise
//"async and await make promise easier to write"
//async make a function return a promise
//await make a function wait for a promise
//the await keyword  can only be used inside an async function.
async function myDisplayer()
{
    let myPromise= new Promise(function(resolve,reject){
        resolve("hi 11");
    });
    document.getElementById("demo").innerHTML=await myPromise;
}
myDisplay();