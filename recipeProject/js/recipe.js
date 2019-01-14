'use strict';

function fetchRecipe() {
  var food = document.getElementById('searchIngredients').value;
  console.log(food);

  return fetch(`https://www.food2fork.com/api/search?key=1725e4099adeb5407b4af7fc84a460bb&q=${food}`)
    .then(function(response) {
      console.log(response);
      const myRecipe = response.json();
      return myRecipe
    })

    .then(function(myRecipe) {
      console.log(myRecipe);

      var foodArray = [];
      var food = {};
      for (let i = 0; i < myRecipe.count; i++) {
        food = {
          title: myRecipe.recipes[i].title,
          picture: myRecipe.recipes[i].image_url,
          source: myRecipe.recipes[i].source_url
        };
        foodArray.push(food);
      }

      var firstArray = foodArray.splice(0, 6);
      console.log(firstArray);


      for (let i = 0; i < firstArray.length; i++) {

        var article = document.createElement('article');
        var title = document.createElement('li');
        var picture = document.createElement('img');
        var link = document.createElement('a');

        //create class to make all pics same size
        picture.className = 'myPic';
        article.className = 'eachArticle';

        var titleData = firstArray[i].title;
        var pictureData = firstArray[i].picture;
        console.log(pictureData);
        var source = firstArray[i].source;

        title.innerHTML = titleData;
        picture.src = pictureData;
        link.setAttribute('href', source);
        link.appendChild(title);
        article.appendChild(picture);
        article.appendChild(link);
        document.getElementsByClassName('grid-container')[0].appendChild(article);
      }
      var button = document.createElement('button');
      button.innerHTML = 'Show more';
      document.getElementById('more').appendChild(button);
      button.addEventListener('click', function() {
        var nextArray = foodArray.splice(0, 6);
        console.log(nextArray);
        for (let i = 0; i < nextArray.length; i++) {

          var articleNext = document.createElement('article');
          var titleNext = document.createElement('li');
          var pictureNext = document.createElement('img');
          var linkNext = document.createElement('a');

          //create class to make all pics same size
          pictureNext.className = 'myPic';
          articleNext.className = 'eachArticle';

          var titleDataNext = nextArray[i].title;
          var pictureDataNext = nextArray[i].picture;
          var sourceNext = nextArray[i].source;

          titleNext.innerHTML = titleDataNext;
          pictureNext.src = pictureDataNext;
          linkNext.setAttribute('href', sourceNext);
          linkNext.appendChild(titleNext);
          articleNext.appendChild(pictureNext);
          articleNext.appendChild(linkNext);
          document.getElementsByClassName('show')[0].appendChild(articleNext);
        }

      });
    });
}




// .catch(function(err){
//   console.log(error)
// });
