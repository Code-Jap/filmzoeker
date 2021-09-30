
const movieList = document.querySelector('#movies');

const radioButtons = document.getElementsByName('movie');

const searchBar = document.querySelector('#search--bar')


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



searchBar.addEventListener('keyup', function(e) {

   if (e.keyCode === 13) {
   const input = e.target.value;
   const filteredMovies = movies.filter(movie => {
      return movie.Title.includes(input)
   });

   removeMoviesFromDom();
   addMoviesToDom(filteredMovies);
}
})



const addEventListeners = () => {

   radioButtons.forEach(button =>
      
    button.addEventListener('change', function(e) {

      handleOnChangeEvent(e);
     
   }));
};
   
addEventListeners();



handleOnChangeEvent = (e) => {

   switch (e.target.value) {

      case 'avengers':
         filterMovies('Avengers');
         break;

      case 'x-men':
        filterMovies('X-Men');
         break;
   
      case 'princess':
        filterMovies('Princess');
         break;

      case 'batman':
        filterMovies('Batman');
         break;

      case 'newest':
         filterLatestMovies();
         break;
      
      default:
         console.log('default');
   };
};



const removeMoviesFromDom = () => {
   movieList.innerHTML = '';
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
     return parseInt(movie.Year) >= 2014;
   });
   
   removeMoviesFromDom();
   addMoviesToDom(latestMovies) 
};