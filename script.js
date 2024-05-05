

document.getElementById('btnSearch').addEventListener('click', searchMovies);

let resuts = document.getElementById('results');

const urlBase = 'https://api.themoviedb.org/3/search/movie'
const api_key = 'b7af9f521de40221474e50f530a2d424'
function searchMovies(){
    resuts.innerHTML="";
    let searchInput = document.getElementById('inputSearch').value
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}function displayMovies(movies){
 

    if(movies.length === 0){
        resultCoresutsntainer.innerHTML= '<p>No se encontraron resultados para tu búsqueda </p>'
        return
    }

    movies.forEach(movie => {
        
        if(movie.poster_path){

        let urlImg='https://image.tmdb.org/t/p/w400';
        let posterPath = urlImg + movie.poster_path;

        let card1 = document.createElement('div');
        card1.classList.add('card');
        card1.classList.add('rgb');
        
        let card2 = document.createElement('div');
        card2.classList.add('card-image');
        card2.classList.add('card2');
        card2.style.backgroundImage=`url('${posterPath}')`;
   
        let card3 = document.createElement('div');
        card3.classList.add('card-text');
        card3.classList.add('card2');

        let span1 = document.createElement('span');
        span1.classList.add('date');
        span1.innerHTML = `Date release: `+movie.release_date;

        let h21 = document.createElement('h2');
        h21.innerHTML = movie.title;
        let p1 = document.createElement('p');
        
      
       if(movie.overview.length >335) {

         p1.innerHTML = `${movie.overview.substring(0, 370)}...Read more.`;
         p1.addEventListener('click', () => {
             alert(movie.overview) ;
         })
       }else{


           p1.innerHTML = movie.overview;
       }
        
        resuts.appendChild(card1);
        card1.appendChild(card2);
        card1.appendChild(card3);
        card3.appendChild(h21);
        card3.appendChild(span1);
        card3.appendChild(p1);
    }
       
        
     
    })
}
