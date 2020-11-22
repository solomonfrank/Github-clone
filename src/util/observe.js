 import model from '../view/base.js'


export default function observerHandler(entries, headerObserver) {

const stickyProdileNav = model.getElemByClass("user-profile-sticky");
 const stickyNav = model.getElemByClass("sticky-position-nav");
 var navbarSec = model.getElemByClass("nav-wrap")

    entries.forEach(entry => {
      
       if(entry.target.id == "user-logo") {
        
        if(!entry.isIntersecting) {
           
            stickyProdileNav.classList.add("user-profile-sticky-bar")
           
           }else {
           
            stickyProdileNav.classList.remove("user-profile-sticky-bar")
           }
       } else {
           
        if(!entry.isIntersecting) {
         

          
          
            stickyNav.classList.add("stcky-container-nav")
            stickyNav.classList.add("sticky-position-nav-sm")
            navbarSec.classList.add("d-hide")
           
           
           }else {
            stickyNav.classList.remove("stcky-container-nav")
            stickyNav.classList.remove("sticky-position-nav-sm")
            navbarSec.classList.remove("d-hide")
            
           }
       }
   
    })
}