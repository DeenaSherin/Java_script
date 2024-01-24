
/*function isAuthenticated(){
    return Math.random()>1
}
function login(){
    return new Promise(
        function(response,noresponse){
            setTimeout(function(){
                if(isAuthenticated){
                    response("Successful")
                }
                else{
                    noresponse("Not Successful")
                }
            },1500);
        }

    )                          
    

}
login().then(function(message){
    console.log(message);

})
.catch(function(message){
    console.log(message)
})
*/
function isLocationValid(loc){
    var v="Melbourne"
    if (v===loc){
        return true
    }
    else{
        return false
    }
}
function location(){
    return new Promise(function(response,errmessage){
        setTimeout(function(){
            if (isLocationValid){
                return response("Location Found")

            }
            else{
                return errmessage("Location not found")
            }
        },1000)
    }
    )

}
location().then(function(response){
    console.log(response)
})
.catch(function(resquest){
    console.log(resquest)
})
