//import { SplitChunksPlugin } from "webpack"
import "../css/style.css"
import logo from "../images/logo1.png"
import loader from "../images/loader.gif"
import User from "../images/profileImage.png"
import { getBio, getRepos} from '../services/http.js'
import { getbioView,clearLoader  } from '../view/bioView.js';
import { getRepoView,  renderRepo} from '../view/repoView';
import { profileImage,avatarImage  } from '../view/avatarView';


document.getElementById('logo').src = logo;
 document.getElementById('logo-full').src = logo;

  
 const state = {
     
 }


 

 document.querySelector(".icon").addEventListener('click',toggleSideBar)
 function toggleSideBar(e) {
    e.preventDefault();
    const asideNode = document.querySelector(".header__item--nav-box");
    const header = document.querySelector(".header");
    if (asideNode.classList.contains("open") || header.classList.contains("open") ) {
      asideNode.classList.remove("open");
      header.classList.remove("open");
    } else {
      asideNode.classList.add("open");
      header.classList.add("open");
    }
  }
 

document.addEventListener("DOMContentLoaded",  async () => {
  document.querySelector('.sticky-detail-loader').src  = loader;
  document.querySelector('.repo-loader').src  = loader;
    const {data} = await getBio('solomonfrank');
    const {data: repoData} = await getRepos('solomonfrank');
   const firstList = repoData.slice(0, 20);
   const transformRepo = firstList.map(x => {
       return {
        stargazerUrl: x.stargazers_url,
        stargazersCount:x.stargazers_count,
        forkCount:x.forks_count,
        forkUrl:x.forks_url,
        name:x.name,
        language:x.language,
        updatedAt:new Date(x.updated_at),
        htmlUrl:x.html_url,
        description:x.description
       }
   }).sort((a, b) => b.updatedAt - a.updatedAt)

  

  
   const bioView = getbioView(data);
   
    const parentNode = document.querySelector('.sticky-detail');
 
   parentNode.innerHTML = bioView;
   clearLoader()
   document.querySelector(".user-profile-sticky").innerHTML = profileImage(data)
    document.querySelector(".header-avatar").innerHTML = `${avatarImage(data)}
   
    <span class="caret">${data.login}</span>
    
    `
   document.querySelector(".user").innerHTML = `${avatarImage(data)}
   
   <i class="fa fa-caret-down" aria-hidden="true"></i>
   
   `
   
   renderRepo(transformRepo)
   clearLoader() 
   var displayRepoCount = document.querySelector(".found-result");
   var displayTotalRepoCount = document.querySelector(".repo-total-count");
   var displayTotalRepoCounts = document.querySelector(".repo-total-counts");

   displayRepoCount.innerHTML = `${transformRepo.length} results for the public repositories
   `;
   displayTotalRepoCount.innerHTML = `${repoData.length}`
   displayTotalRepoCounts.innerHTML = `${repoData.length}`


    var header= document.querySelector(".header");

    

var userImage = document.getElementById("user-logo");

 var stickyProdileNav = document.querySelector(".user-profile-sticky");

var stickyNav = document.querySelector(".sticky-position-nav");
var navbarSec = document.querySelector(".nav-wrap")

let headerObserver = new IntersectionObserver(function(entries,headerObserver){

     entries.forEach(entry => {
       
        if(entry.target.id == "user-logo") {
         
         if(!entry.isIntersecting) {
            
             stickyProdileNav.classList.add("user-profile-sticky-bar")
            
            }else {
            
             stickyProdileNav.classList.remove("user-profile-sticky-bar")
            }
        }else {
            
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
 }, {});
 
 headerObserver.observe(header)
 headerObserver.observe(userImage)
  
  
  })



