const baseURL = "https://ghibliapi.herokuapp.com/people";
let url;

const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");
const section = document.querySelector("section");

nav.style.display = "none";

let pageNumber = 0;

searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

function fetchResults(e){
    e.preventdefault();
    console.log(e);
    url = `${baseURL}&pagenumber=${pagenumber}&q=${searchterm.value}`;
    console.log("URL:", url);
}

fetch(url)
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      console.log(json);
      displayResults(json);
    });

  function displayResults(json) {
    while (section.firstChild) {
      section.removeChild(section.firstChild)
    }; 