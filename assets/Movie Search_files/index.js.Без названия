import {sliderCreate , sliderDestroy , sliderAdd} from "./slider.js";

function request(url){
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data.Response=="False"){
      alert(data.Error)
      searchForm.value  = ""
      request('http://www.omdbapi.com/?apikey=107b2873&s=dream')
    }
    console.log(data);
    document.querySelector(".slides").innerHTML=""
    sliderFill(data)
    spinner.style.display="none"
  });
}



request('http://www.omdbapi.com/?apikey=107b2873&s=dream')





function sliderFill (respond){
  let movies = respond.Search
  let ratingStar = document.createElement("img")
  ratingStar.src = "./assets/star.png"
  movies.forEach((el) => {
    let movie = document.createElement("div")
    movie.className = "movie"
    movie.classList.add("item")
    let movie__name = document.createElement("h5")
    movie__name.className = "movie__name"
    movie__name.innerHTML=el.Title
    let movie__poster = document.createElement("img")
    if (el.Poster!== "N/A")
    movie__poster.src = el.Poster
    else
    movie__poster.src = "./assets/images.jpg"
    let movie__year = document.createElement("div")
    movie__year.innerHTML = el.Year
    movie__year.className = "movie__year"
    let movie__rating = document.createElement("div")
    movie__rating.appendChild(ratingStar)
    movie.appendChild(movie__name)
    movie.appendChild(movie__poster)
    movie.appendChild(movie__year)
    document.querySelector(".slides").appendChild(movie)
    
  })
  sliderCreate()
}



let spinner = document.getElementById("spinner")
let searchBtn = document.querySelector("#button-addon2")
let searchForm = document.querySelector(".form-control")
let inputClear = document.querySelector(".input__clear")


searchBtn.addEventListener("click", search )
function search(){
    sliderDestroy ()
    let query = searchForm.value
    spinner.style.display="inline-block"
    request(`http://www.omdbapi.com/?apikey=107b2873&s=${query}`)
}


inputClear.addEventListener("click", ()=> {
  searchForm.value=""
})



document.addEventListener("keydown", ()=>{
  if(event.key == "Enter")
  search()
})


