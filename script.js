
const movieList = document.querySelector('#movies');

const radioButtons = document.getElementsByName('movie')

const addMoviesToDom = (movieArray) => {

   const listItems = movieArray.map(movie => {
    
     const newLi =  document.createElement('li');
     const newImage = document.createElement('img');
     const newA = document.createElement('a');

     newImage.src = movie.Poster;
     newA.href ='https://www.imdb.com/title/' + movie.imdbID;
     newA.target = '_blank';

     newLi.appendChild(newA);
     newA.appendChild(newImage);

     return newLi;
   });

   listItems.forEach(li => {
      movieList.appendChild(li);
   });
};

addMoviesToDom(movies);





const addEventListeners = () => {

   radioButtons.forEach(button =>
      
    button.addEventListener('change', function(event) {

      handleOnChangeEvent(event);
     
   }));
};
   
addEventListeners();



handleOnChangeEvent = (event) => {

   switch (event.target.value) {

      case "avengers":
         filterMovies("Avengers")
         console.log(filterMovies)
         console.log('avengers')
         break;
      

      case "x-men":
        filterMovies('x-men')
         break;
      

      case "princess":
        filterMovies('princess')
         break;
      

      case "batman":
        filterMovies('batman')
         break;

      case "newest":
         filterLatestMovies();
         console.log('latest')
     
         break;
      

      default:
         console.log('default');
   };

  // console.log(event.target)
};




const removeMoviesFromDom = () => {
   const listItems = document.querySelectorAll("#movies")
   listItems.forEach(item => item.remove())
};



const filterMovies = (wordInMovieTitle) => {

 const filteredMovies = movies.filter((movie) => {
 return movie.Title.includes(wordInMovieTitle);
 });
 
removeMoviesFromDom();
addMoviesToDom(filteredMovies);
};



const filterLatestMovies = () => {

   const latestMovies = movies.filter(movie => {
     return parseInt(movie.year) >= 2014;
   });
   removeMoviesFromDom();
   addMoviesToDom(latestMovies)
};



