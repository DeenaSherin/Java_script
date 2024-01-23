function isAuthenticated(){
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