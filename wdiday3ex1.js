prompt ("How many verses of our song would you like to hear?")

for (var i = 5; i > 0; i--){
        var d = i-1; 
      
        if(i == 1){
        console.log(i + " bottle of beer on the wall");
        console.log(i + " bottle of beer")
        console.log("Take one down and pass it around");
        console.log("No more bottles of beer on the wall");
         }
        else if(d == 1){
        console.log(i + " bottles of beer on the wall");
        console.log(i + " bottles of beer");
        console.log("Take one down and pass it around");
        console.log(d + " bottle of beer on the wall");
         }
        else{
        console.log(i + " bottles of beers on the wall");
        console.log(i + " bottles of beers");
        console.log("Take one down and pass it around");
        console.log(d + " bottles of beers on the wall");
        }
}