import React from 'react'
import './links.css';


export default function Links({title, icon,url}) {
     
  const links= url;
    

    function goTolinks(links) {
        window.open(links);
      }
  
    return (
       
    
     <div class="wrap">
          
            <button class="button" onClick={() => goTolinks(links)} >
              
            <div className="flex-container" >
                <div className="icon">{icon} </div>
                  <div><p><b>{title}</b></p></div>
            </div>
 
            
            </button>
           
    
      </div>
           
      
       
    )
}




 /*
   //on click new window
 function shoot() {
        window.open('https://www.google.co.in/');
      }*/

/*


    function shoot() {
        window.open('https://www.google.co.in/');
      }
 <button class="button" onClick={shoot} ><b>{title}</b></button>
*/