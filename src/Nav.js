import { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, handelshow] = useState(false);

     useEffect(()=>{
        window.addEventListener("scroll", () =>{
                if(window.scrollY > 100){
                  handelshow(true);
                }
                else handelshow(false);
    
        });
      return () =>{
        window.removeEventListener("scroll",this);
      };
     },[])
  
  return (
    <div className={`nav ${show && "nav_black"}`}>
       <img 
       className='nav_logo'
       src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
       alt='Netflix Logo'
       />
      <img 
       className='nav_avater'
       src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
       alt='Netflix Avater'
       />

    </div>
  )     
}
export default Nav
