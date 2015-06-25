var securityQuestions= [
    {
        securityQuestion: "Which city were you born in?", 
        expectedAnswer: "San Francisco"
    }, 
    {
        securityQuestion: "What high school did you go to?", 
        expectedAnswer: "Mills High School"
     },
    {
        securityQuestion: "What is your favorite treat?", 
        expectedAnswer: "Chocolate covered gummy bears"
     }
]

for (i=0; i<securityQuestions.length; i++){
var security = prompt (securityQuestions[i].securityQuestion)
 if (security != securityQuestions[i].expectedAnswer)
   {alert("sorry you're WRONG!");
   break;
}
   else {
       alert("Whoohoo!")
   }  
}