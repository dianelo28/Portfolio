var userLogin = {username: "dianelo28", password: "dianelo"}
var answer = prompt ("Enter password for user" + " " + userLogin.username);       
        
for (i=0; i<2; i++) {
    if (answer === userLogin.password) {
        alert("Welcome!");
        break;
    }
    else {
        answer = prompt ('Please try again');
    }
}