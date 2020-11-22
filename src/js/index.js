//import { SplitChunksPlugin } from "webpack"
import "../css/style.css"
import logo from "../images/logo1.png"
import loader from "../images/loader.gif"
import User from "../images/profileImage.png"
import { getBio, getRepos} from '../services/http.js'
import { getbioView,clearLoader  } from '../view/bioView.js';
import { getRepoView,  renderRepo} from '../view/repoView';
import { profileImage,avatarImage  } from '../view/avatarView';
import  model  from '../view/base'
import observerHandler  from '../util/observe'


console.log('dom',model.getElemById('logo'))

model.getElemById('logo').src = logo
model.getElemById('logo-full').src = logo
// document.getElementById('logo').src = logo;
//  document.getElementById('logo-full').src = logo;

 

document.querySelector(".icon").addEventListener('click',toggleNavBar)
 
function toggleNavBar(e) {
    e.preventDefault();
    
    const navBarElem = model.getElemByClass('header__item--nav-box')
    const header = model.getElemByClass('header');
    if (navBarElem.classList.contains("open") || header.classList.contains("open") ) {
      navBarElem.classList.remove("open");
      header.classList.remove("open");
    } else {
      navBarElem.classList.add("open");
      header.classList.add("open");
    }
  }
 

document.addEventListener("DOMContentLoaded",  async () => {
  model.getElemByClass('sticky-detail-loader').src  = loader;
  model.getElemByClass('repo-loader').src  = loader;

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
  const repoListContainer =  model.getElemByClass("sticky-detail");
 
  repoListContainer.innerHTML = bioView;
  clearLoader()
  model.getElemByClass("user-profile-sticky").innerHTML = profileImage(data)
  model.getElemByClass("header-avatar").innerHTML = `${avatarImage(data)}
   
    <span class="caret">${data.login}</span>
    
    `
    model.getElemByClass("user").innerHTML = `${avatarImage(data)}
   
   <i class="fa fa-caret-down" aria-hidden="true"></i>
   
   `
   
   renderRepo(transformRepo)
   clearLoader() 

   const displayRepoCount = model.getElemByClass("found-result");
   const displayTotalRepoCount = model.getElemByClass("repo-total-count");
   const displayTotalRepoCounts = model.getElemByClass("repo-total-counts");

   displayRepoCount.innerHTML = `${transformRepo.length} results for the public repositories
   `;
   displayTotalRepoCount.innerHTML = `${repoData.length}`
   displayTotalRepoCounts.innerHTML = `${repoData.length}`


 const header = model.getElemByClass("header");
 const userImage = model.getElemById("user-logo");
 
let headerObserver = new IntersectionObserver(observerHandler, {});

headerObserver.observe(header)
headerObserver.observe(userImage)


  
  
  })



