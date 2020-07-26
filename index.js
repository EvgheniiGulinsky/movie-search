import {sliderCreate , sliderDestroy } from "./slider.js";
import {translate} from "./translation.js";

const startingQuery = 'https://www.omdbapi.com/?apikey=107b2873&s=dream'
function request(url){
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data.Response=="False"){
      alert(data.Error)
      searchForm.value  = ""
      request(startingQuery)
    }
    clearSlides()
    sliderFill(data)
    spinnerChange("none")
  });
}

function clearSlides(){
  document.querySelector(".slides").innerHTML=""
}

function spinnerChange (state){
  spinner.style.display = state
}

request(startingQuery)





function sliderFill (respond){
  const noPoster ='N/A'
  if (respond.Response!=="False"){
  const movies = respond.Search
  const ratingStar = document.createElement("img")
  ratingStar.src = "./assets/star.png"
  movies.forEach((el) => {
    const movie = document.createElement("div")
    movie.className = "movie"
    movie.classList.add("item")
    const movieName = document.createElement("h5")
    movieName.className = "movie-name"
    movieName.innerHTML=el.Title
    const moviePoster = document.createElement("img")
    if (el.Poster!== noPoster)
    moviePoster.src = el.Poster
    else
    moviePoster.src = "./assets/images.jpg"
    const movieYear = document.createElement("div")
    movieYear.innerHTML = el.Year
    movieYear.className = "movie-year"
    const movieRating = document.createElement("div")
    movieRating.appendChild(ratingStar)
    movie.appendChild(movieName)
    movie.appendChild(moviePoster)
    movie.appendChild(movieYear)
    document.querySelector(".slides").appendChild(movie)
    sliderCreate()
  })}
  else
  sliderDestroy()
  sliderCreate()
}



const spinner = document.getElementById("spinner")
const searchBtn = document.querySelector("#button-addon2")
const searchForm = document.querySelector(".form-control")
const inputClear = document.querySelector(".input__clear")

let query = 'dream' 

searchBtn.addEventListener("click", search )
function search(){
    spinnerChange("inline-block")
    query = searchForm.value
    sliderDestroy ()
    if (/[а-яА-Я]/i.test(query))
    translate(searchForm.value, request)
    else
    request(`https://www.omdbapi.com/?apikey=107b2873&s=${query}`)
}


inputClear.addEventListener("click", ()=> {
  searchForm.value=""
})



document.addEventListener("keydown", ()=>{
  if(event.key == "Enter")
  search()
})


export {searchForm, request}