const message = 'Hello world' // Try edit me?

//how to change words 
document.querySelector('#header').innerHTML = message
 
 //how to change background colors
 
  document.getElementById('button1').addEventListener('click', changeColort);
  function changeColort(){
      
  document.body.style.backgroundColor = "red";


  }

// how to change fonts colors
 document.getElementById('button').addEventListener('click', changeColor);
  function changeColor(){
      
  document.body.style.color = "blue";


  }


 




  

// Log to console
console.log(message)