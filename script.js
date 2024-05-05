let baseUrl = "https://api.themoviedb.org/3/configuration"

let mainDiv = document.getElementsByTagName("body")[0];

// let container = document.createElement("div");
// container.setAttribute("class", "container");

// let h1 = document.createElement("h1");
// h1.textContent = "Pelis Search API";
// let input = document.createElement("input");
// input.setAttribute("type", "text");
// input.setAttribute("id", "inputSearch");

// let button = document.createElement("button");
// button.setAttribute("id", "btnSearch");
// button.textContent = "Search";
// button.addEventListener("click",function(){
 
//     alert("Please enter"); 

// });


// mainDiv.appendChild(container);
// container.appendChild(h1);
// container.appendChild(input);
// input.setAttribute("type", "text");
// container.appendChild(button);

// fetch(baseUrl)
// .then(data => data.json())

// .then(data => {
//     console.log(data);

//     let rick= document.createElement("a");
//     rick.setAttribute("href", data.info.next);
//     rick.textContent = data.info.next;

//     container.appendChild(rick);


// });

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FmOWY1MjFkZTQwMjIxNDc0ZTUwZjUzMGEyZDQyNCIsInN1YiI6IjY2MzU5NThlOTU5MGUzMDEyM2JiYzhmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3KJhtrevVYpaknKscqkj4aIIJaLqAsyp_3EWGGRtqRQ'
//   }
// };

// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=es-ES&page=1&sort_by=popularity.desc', options)
//   .then(response => response.json())
// //   .then(response => console.log(response))
//   .catch(err => console.error(err));

//   const option = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FmOWY1MjFkZTQwMjIxNDc0ZTUwZjUzMGEyZDQyNCIsInN1YiI6IjY2MzU5NThlOTU5MGUzMDEyM2JiYzhmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3KJhtrevVYpaknKscqkj4aIIJaLqAsyp_3EWGGRtqRQ'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/movie/823464/videos?language=en-US', option)
//     .then(response => response.json())
//     .then(response =>{
//         console.log(response);
        
//         let rick= document.createElement("img");
//         //  - rick.setAttribute("src", "https://api.themoviedb.org/3/movie/823464/images");
//           rick.src = `https://image.tmdb.org/t/p/w500${response.backdrops[0].file_path}`;
//           rick.setAttribute("width", "100%");
//           mainDiv.appendChild(rick);
//     })
//     .catch(err => console.error(err));

//     const optio= {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FmOWY1MjFkZTQwMjIxNDc0ZTUwZjUzMGEyZDQyNCIsInN1YiI6IjY2MzU5NThlOTU5MGUzMDEyM2JiYzhmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3KJhtrevVYpaknKscqkj4aIIJaLqAsyp_3EWGGRtqRQ'
//         }
//       };
      
//       fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', optio)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));

//         const o= {
//             method: 'GET',
//             headers: {
//               accept: 'application/json',
//               Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FmOWY1MjFkZTQwMjIxNDc0ZTUwZjUzMGEyZDQyNCIsInN1YiI6IjY2MzU5NThlOTU5MGUzMDEyM2JiYzhmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3KJhtrevVYpaknKscqkj4aIIJaLqAsyp_3EWGGRtqRQ'
//             }
//           };
const o= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FmOWY1MjFkZTQwMjIxNDc0ZTUwZjUzMGEyZDQyNCIsInN1YiI6IjY2MzU5NThlOTU5MGUzMDEyM2JiYzhmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3KJhtrevVYpaknKscqkj4aIIJaLqAsyp_3EWGGRtqRQ'
    }
  };
          fetch('https://api.themoviedb.org/3/movie/823461/watch/providers', o)
            .then(response => response.json())
            .then(response => {
                console.log(response.results.AD);
                console.log(response.results.AD)
                let rick= document.createElement("video");
         
                   rick.src = `response.results.AD`;
                  rick.setAttribute("width", "100%");
                  mainDiv.appendChild(rick);
            })