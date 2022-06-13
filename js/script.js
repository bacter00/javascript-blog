'use strict';

function titleClickHandler(event){
  const clickedElement = this ;
  event.preventDefault();
  console.log('Link was clicked!' , event);

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }


  /* [IN PROGRESS] add class 'active' to the clicked link */


  clickedElement.classList.add('active');
  
  console.log('clickedElement:', clickedElement);



  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts .active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }


  /* get 'href' attribute from the clicked link */

const articleSelector = 'href' ;

 let href = clickedElement.getAttribute(articleSelector)

 console.log (href);


  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(href);

  console.log (targetArticle) ;
  

 
  /* add class 'active' to the correct article */

  
    targetArticle.classList.add('active');
  

}









const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles';

function generateTitleLinks(){


  /* remove contents of titleList */

const titleList = document.querySelector(optTitleListSelector).innerHTML='' ;
 


  /* for each article  
  zamiast .post  optArticleSelector ? */

  const articles = document.querySelectorAll(optArticleSelector) ;

  let html = '';

  console.log (html);

  for (let article of articles) {

  
    /* get the article id 
    cos tu jest nie tak */


    const articleId = 'id' ;
    let id = article.getAttribute(articleId);



    /* find the title element */

    /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

  
  
    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
 
    console.log (linkHTML) ;



    /* insert link into titleList */

    html = html + linkHTML;

   
  }

    titleList.innerHTML= html ;

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
    



}



generateTitleLinks();