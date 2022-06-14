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
/* optArticleTagsSelector = '.post-tags .list'; */

function generateTitleLinks(){


  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector) ;
  titleList.innerHTML='' ;
 


  /* for each article  
  zamiast .post  optArticleSelector ? */

  const articles = document.querySelectorAll(optArticleSelector) ;

  let html = '';

  console.log (html);

  for (let article of articles) {

  
    /* get the article id 
    cos tu jest nie tak */

    let articleId = article.getAttribute('id');



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




function generateTags(){

  /* find all articles */




  /* START LOOP: for every article: */

  /* find tags wrapper */

  /* make html variable with empty string */

  /* get tags from data-tags attribute */

  /* split tags into array */

  /* START LOOP: for each tag */

  /* generate HTML of the link */

  /* add generated code to html variable */

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();






function tagClickHandler(event){

  /* prevent default action for this event */

  /* make new constant named "clickedElement" and give it the value of "this" */

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

  /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

  /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

  /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();