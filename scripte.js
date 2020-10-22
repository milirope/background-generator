var database = [

{

username:"emily",
password:"francobo"

},
{
    username:"franco",
    password:"emilinda"

},
{
    username:"sam",
    password:"polo"
}

];

var newsFeed = [
    {
    username:"Bobby",
    timeline:"SO tired!"
},
{
     username:"Sally",
    timeline:"Js is so cool!!!"
},
{
    username:"Martha",
    timeline:"Heyy!!!"
}

];

function isUserValid(username,password){
    for(var i=0; i<database.length; i++){
if(database[i].username === username && 
    database[i].password === password){
        return true;
    }

    }
    return false;
}


function signIn(username,password){
if(isUserValid(username,password)){
    console.log(newsFeed);
}else{
    alert("Sorry, wrong username and password");
}

}

var userNamePrompt= prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// function singIn(user,pass){
// if(user === database[0].username &&
//     pass=== database[0].password){
//         console.log(newsFeed);
//     }else{
//         alert("Sorry , wrong password and username!!");
//     }

// }

signIn(userNamePrompt,passwordPrompt);