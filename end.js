var scores = {}
var tmp = {}
var finaleScore = localStorage.score

var username =document.getElementById("textbox");
var button =document.getElementById("btn");
var displayScore =document.getElementById("score");

document.getElementById("finalScore").innerHTML = "Final Score: " + localStorage.score * 20 + "%";



//Saves score on click
button.addEventListener("click",function(){
   
   
      
    

    s1= localStorage.getItem('myArray');

    if(s1==null){
        scores={}
    }

    else{
        scores = JSON.parse(s1);
   }


  
  
    scores[textbox.value] = finaleScore;
    localStorage.setItem('myArray', JSON.stringify(scores));

});




   

  



