let result = document.querySelector('#result');
  let button = document.querySelectorAll('button');

  
 
  


function appendValue(box){
   
     result.innerHTML += box;
   
    console.log(box); 
     
}



  function calculate(){
    result.innerHTML = eval(result.innerHTML);
  }

function clearDisplay(){
    result.innerHTML = "";
}