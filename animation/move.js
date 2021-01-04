window.onscroll = function myFunction() {

    
  
    //   h = document.getElementById("myBtn").offsetHeight; 
    //   w = document.getElementById("myBtn").offsetWidth; 
  
      
    y = window.scrollY;
    console.log(document.getElementById("myOne").offsetLeft, "ff");
    
    w = document.getElementById("myOne").offsetWidth;
  
          
    if (y>20){
      document.getElementById("myOne").classList.add("scroll");
    }
    else{
      document.getElementById("myOne").classList.remove("scroll");
    }
              
    //     }
          
    //         document.getElementById("myBtn").style.left = y*10 + "px";
    //         document.getElementById("myDiv").style.left = -y*10 + "px";    
    //         document.getElementById("myNew").style.transform = "scale(" + y/10 + ")";  
}      