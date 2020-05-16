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

function sliderAdd (event){
if (event.target.classList.contains("slick-disabled")){
  event.preventDefault()
console.log(event.target)
let currentQuery = document.querySelector(".form-control").value
fetch(`https://www.omdbapi.com/?apikey=107b2873&s=${currentQuery}&page=${currentPage}`)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
  let movies = data.Search
  if (data.Response=="True"){
  movies.forEach(el=> {  
  let poster = "./assets/images.jpg"
  if(el.Poster!=="N/A")
  poster = el.Poster
  let new_movie = document.createElement('div')
  new_movie.className="movie item"
  new_movie.innerHTML=`
  <h5 class="movie__name">${el.Title}</h5>
  <img src=${poster}> 
  <div class="movie__year">${el.Year}</div>
  `;
  sliderDestroy()
  document.querySelector(".slides").appendChild(new_movie)
 })
  sliderCreate()
  currentPage++
  }
})}}
 

export {sliderCreate , sliderDestroy , sliderAdd}