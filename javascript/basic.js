// console.log("YOU");
// const a=90
// a=900
// console.log(a)

// relational operator
// a=10
// b=156
// console.log(a>=b)
// console.log(a===b)
// console.log(a<=b)
// console.log(a!==b)
// console.log(a>b)
// console.log(a<b)



console.log("you")
//variables
a='a'
console.log("General declaration of variable",a);
var b="Hii";
console.log("This variable belongs to var type value is",b)
var b=10;
console.log("This variable belongs to changed var type value is",b)
let c='Hello';
console.log("This variable belongs to let type value is",c)
const d=2000;
console.log("This variable belongs to const type value is",d)
//d=200;
//console.log("This variable belongs to const type value is",d)


//Assignament operator
var a=10
console.log("Assignment operator output",a)
//Arithmetic operator
var aA=10
var bA=10
console.log(typeof(aA))
console.log("Arithmetic operator addition output",aA+bA)
console.log("Arithmetic operator  subraction output",aA-bA)
console.log("Arithmetic operator multiplication output",aA*bA)
console.log("Arithmetic operator division output",aA/bA)
console.log("Arithmetic operator modulus output",aA%bA)
console.log("Arithmetic operator power output",aA**bA)
console.log("Arithmetic operator Increment output",aA++)
console.log("Arithmetic operator Decrement output",--bA)
console.log("Arithmetic operator Increment output",aA++)

//logical operator-> &&,||,!
 var aL=0
 var bL=10
 console.log("logical operator AND output",aL&&bL)
 console.log("logical operator || output",aL||bL)
 console.log("logical operator ! output",!aL)
 console.log(10&&20)
 console.log(10&&30)
 console.log(10||20)
 console.log(0||20)
 console.log(0||20)
 console.log(100||20&&0)
 console.log((100||20)&&0)
 console.log(0&&(100||20))
 console.log(0&&100||20)

 //Relational operator -> <,>,<=,>=,
 ar=10
 br=20
 console.log("Relational operator > is:",ar>br)
 console.log("Relational operator >= is:",ar>=br)
 console.log("Relational operator < is:",ar<br)
 console.log("Relational operator <= is:",ar<=br)
 console.log("Relational operator === is:",ar===br)
 console.log("Relational operator !== is:",ar!==br)
 

 
//control statement -->for ,while,do...while
// conditional statement-->if else

//Object

//Declaration
var customerdetails={
    "Name":"Mala",
    "Age":89,
    "Phone":"9123432314",
}
console.log(customerdetails)

customerdetails["id"]="21ECR040"
console.log(customerdetails)

//2nd way
var customerdetails={}
customerdetails["id"]="21ECR040"
customerdetails["Name"]="Lala"
customerdetails["age"]="30"
customerdetails["phone"]="1234567891"
console.log(customerdetails)

// 3rd way
var kongu = new Object()
kongu["fee"]=100000
kongu["accomodation"]="Excellent"
kongu["food"]="good"
console.log(kongu)
console.log(kongu.fee)//The path of accessing the key [[[or]]]
console.log(kongu["food"])

//for 
sum=0
for(var i=0;i<10;i++){
    sum+=i

}
console.log(sum)


//while
 var sum=0
 var i=0
while(i<10){
    sum+=i
    i++
}
console.log(sum)

//do...while
var i=0
var sum=0
do{
    sum+=i
    i++
}while(i<3)
console.log(sum);


//Example 1
arr=[10,20,30]
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//Example 2

arr=[10,20,30.89]
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//Example 

arr=[10,"T","F",true]
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//for in
arr=[10,"T","F",true]
for (const i in arr) {
   console.log(i)
   console.log(arr[i])
   //{0:10}
   //1=T
    }



//for of
arr=[10,"T","F",true]
for (const element of arr) {
   console.log(element)
    }
    //function Jik (int a){

    //}
    //const red =()=>{}

//for each
arr=[10,"T","F",true]
arr.forEach(value => {
    console.log(value)
});


//example ES6
var customerdetails={}
customerdetails["id"]="21ECR040"
customerdetails["Name"]="Lala"
customerdetails["age"]="30"
customerdetails["phone"]="1234567891"
// for (const element of customerdetails) {
//     console.log(element)
//      }
     customerdetails.forEach((key,value) => {
         console.log(key,value)
     });

    for (i in customerdetails) {
        console.log(i)
        console.log(customerdetails[i])
         }





