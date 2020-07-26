function sliderCreate (){
    $(document).ready(function(){
        $('.slides').slick({
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
      $('.slick-next').on('click', sliderAdd )})}

function sliderDestroy (){
    $('.slides').slick('unslick');
}

let currentPage = 2

function sliderAdd (){
if (document.querySelector('.slick-next').classList.contains("slick-disabled")){
let currentQuery = document.querySelector(".form-control").value
if(currentQuery=="")
currentQuery = "dream"
fetch(`https://www.omdbapi.com/?apikey=107b2873&s=${currentQuery}&page=${currentPage}`)
.then((response) => {
  return response.json();
})
.then((data) => {
  const movies = data.Search
  console.log(movies)
  if (data.Response=="True"){
  movies.forEach(el=> {  
  let poster = "./assets/images.jpg"
  if(el.Poster!=="N/A")
  poster = el.Poster
  const newMovie = document.createElement('div')
  newMovie.className="movie item"
  newMovie.innerHTML=`
  <h5 class="movie-name">${el.Title}</h5>
  <img src=${poster}> 
  <div class="movie-year">${el.Year}</div>
  `;
  $('.slides').slick('slickAdd',newMovie);
/*   sliderDestroy()
  document.querySelector(".slides").appendChild(newMovie) */
 })
/*   sliderCreate() */
  currentPage++
  console.log(currentPage)
  $('.slick-next').removeClass("slick-disabled")
  $('.slick-next').on('click', sliderAdd )
  }
})}}
 

export {sliderCreate , sliderDestroy , sliderAdd}


