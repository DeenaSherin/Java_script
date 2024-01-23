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


//Example
function prize(a,callback){
    setTimeout(function(){
        console.log(a)
        callback()
},1000)
}

function noprize(){
    console.log("You didnot receive any prize")
}
prize("You have won the first prize",noprize)

*/
function me (d,callback){
    setTimeout(function(){console.log(d)
    callback()},500)
}


function u(a,b){
    console.log(a,"",b)
}
me("You have chosen me",function(){u("wh?","How?")})