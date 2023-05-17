var tmp0 =localStorage.getItem('myArray');   
var tmp =JSON.parse(tmp0)
var name1 = getMax(tmp)

//Calc scores and order
if (name1 != "No data") {
  var score1 = tmp[name1]

 

 delete tmp[name1]
 var name2 = getMax(tmp)

 if (name2 != "No data") {
   var score2 = tmp[name2]
  

   delete tmp[name2]
   var name3 = getMax(tmp)
 
   if (name3 != "No data") {
     var score3 = tmp[name3]
    
     
   }
 }
}


function getMax(myDict) {
   var max_score = 0
    var name = "No data"

    var a = Object.keys(myDict)
    for (let k in a) {


      var key = a[k]
       
      if (myDict[key] >= max_score) {
          max_score = myDict[key]
          name = key
        
      }

    }
  
    return name
  }



//Repalces inner HTMl
document.getElementById("HSN1").innerHTML = name1;
document.getElementById("HSN2").innerHTML = name2;
document.getElementById("HSN3").innerHTML = name3;


document.getElementById("HS1").innerHTML = score1 * 20 + "%";
document.getElementById("HS2").innerHTML = score2 * 20 + "%";
document.getElementById("HS3").innerHTML = score3 * 20 + "%";

