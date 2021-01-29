   var numsquares = 6;
   var colors = generaterandomcolors(6); 
   var pickedcolor = pickcolor();
   var colorDisplay = document.getElementById("colorDisplay");
   colorDisplay.textContent = pickedcolor; 
   var squares = document.getElementsByClassName("square");
   var message = document.querySelector("#message");
   var h1 =  document.querySelector("h1");
   var resetButton = document.querySelector("#reset");
   var easyBtn = document.querySelector("#easybtn") 
   var hardBtn = document.querySelector("#hardbtn") 


   easyBtn.addEventListener("click",function(){
       hardBtn.classList.remove("selected");
       easyBtn.classList.add("selected");
       numsquares = 3;
       colors = generaterandomcolors(numsquares);
       pickedcolor = pickcolor();
       colorDisplay.textContent = pickedcolor;
       for(var i = 0; i< squares.length ; i++){
           if(colors[i])
           {
               squares[i].style.backgroundColor = colors[i];
           }
           else{
            squares[i].style.display = "none";
           }
       }
 });
 
        hardBtn.addEventListener("click",function(){
        
         easyBtn.classList.remove("selected");
         hardBtn.classList.add("selected");
         numsquares = 6;
         colors = generaterandomcolors(numsquares);
         pickedcolor = pickcolor();
         colorDisplay.textContent = pickedcolor;
         for(var i = 0; i< squares.length ; i++){
         squares[i].style.backgroundColor = colors[i];
         squares[i].style.display = "block";
            
         }
      }); 



   resetButton.addEventListener("click",function(){
      
              colors = generaterandomcolors(numsquares);
              pickedcolor = pickcolor();
              colorDisplay.textContent = pickedcolor;
              message.textContent = "" ;
              this.textContent = "New colors"
              
            for(var i = 0; i<squares.length ; i++){

                squares[i].style.backgroundColor = colors[i];
            }
          h1.style.backgroundColor = "steelblue"; 
       });
  


for(var i = 0 ; i< squares.length ; i++)
   {
       //add colors to each square
       squares[i].style.backgroundColor=colors[i]; 
       //add events to the squares
       squares[i].addEventListener("click", function(){
        clickedcolor = this.style.backgroundColor;
         

        if(clickedcolor === pickedcolor){
            message.textContent = "Correct!" ;
            resetButton.textContent = "play again" 
           
            h1.style.backgroundColor = clickedcolor;
            changecolor(clickedcolor);
      
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again";
        }
       });
  }
        function pickcolor(){
            var random = Math.floor(Math.random() * colors.length);
             return colors[random];
        }
     
      function changecolor(color){
          for(var i = 0; i < squares.length ; i++){
              squares[i].style.backgroundColor = color;  
          }
      }
    
    function generaterandomcolors(num){
        var arr = [];
        
        for(var i = 0; i < num; i++)
        {
            arr.push(randomcolor());
        }
        return arr;
    }
    function randomcolor(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        
        return "rgb("+r+", "+g+", "+b+")" ;
    }  
      
   
    