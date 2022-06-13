'use strict';

function titleClickHandler(event){
  
    event.preventDefault();  
  
    const clickedElement = this ;
  
  console.log('Link was clicked!' + event);

/* [Done]remove class 'active' from all article links  */

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}


  /* [IN PROGRESS] add class 'active' to the clicked link */

  for(let activeLink of activeLinks){
    activeLink.classList.add('active');
  }
   

console.log ('clickedElement:' , clickedElement) ;


  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.articles a.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  } 



  /* get 'href' attribute from the clicked link */



const articleSelector = 'href' ;

 let href = clickedElement.getAttribute('href')

 console.log (href) ;
 




  /* find the correct article using the selector (value of 'href' attribute) */

const targetArticle = document.querySelector('href');

console.log (href)






  /* add class 'active' to the correct article */

  for(let activeArticle of activeArticles){
    activeArticle.classList.add('active');
  }



}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}