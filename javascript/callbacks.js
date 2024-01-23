/*
//Callback
function first (name,callback){
    setTimeout(function(){
        console.log("Get lost")
        callback()
    },500)

}
function second(){
    console.log("Welcome")
}
first("Sherin",second)
*/
function first (name,callback){
    setTimeout(function(){
        console.log("Get lost")
        callback()
    },500)

}
function second(a,b){
    console.log(a+b)
}
first("Sherin",function(){second(10,20)})