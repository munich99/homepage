window.onscroll = function myFunction() {

    
  
    //   h = document.getElementById("myBtn").offsetHeight; 
    //   w = document.getElementById("myBtn").offsetWidth; 
  
      
    y = window.scrollY;
    console.log(document.getElementById("myOne").offsetLeft, "ff");
    
    w = document.getElementById("myOne").offsetWidth;
  
          
    if (y>1){
      document.getElementById("myOne").classList.add("scroll");
      document.getElementById("myOne").style.top = 0;
      document.getElementById("myOne").style.left = -y *2 + "px"; 
      document.getElementById("myTwo").style.left = y *2 + "px"; 

      document.getElementById("myTwo").classList.add("scroll");
      document.getElementById("myTwo").style.top = "70vh";

    }
    else{
      document.getElementById("myOne").classList.remove("scroll");
      document.getElementById("myTwo").classList.remove("scroll");
    }
              
    //     }
          
    //         document.getElementById("myBtn").style.left = y*10 + "px";
    //         document.getElementById("myDiv").style.left = -y*10 + "px";    
    //         document.getElementById("myNew").style.transform = "scale(" + y/10 + ")";  
}      