let baseURL = "https://pokeapi.co/api/v2/berry/"

let berries = document.getElementById('berries');
let berryPic = document.querySelector('berryPic');

berries.addEventListener('click', fetchQuote);


async function fetchQuote(){
    let response = await fetch(baseURL);
    let json = await response.json();
    console.log(json)


}

function displayBerry(json){
    let berry = data.berries[0];
    let berryName = berry.strberry;
    let heading = document.createElement('p');
    heading.innerHTML = berryName;
    berrydiv.appendChild(heading);
} 
