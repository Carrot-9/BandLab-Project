// Display Hunger //
const GetHunger = document.getElementById("FetchHungerLink");
const GetHungerDisplay = document.getElementById("DisplayHunger");

const url = 'http://localhost:3000/api/hunger/1'

GetHunger.addEventListener('click', GetHungerInfo);

async function GetHungerInfo(event) {
    event.preventDefault();
    try {
     
const res = await fetch(url, {method:"GET"});
const data = await res.json();
console.log(data);

GetHungerDisplay.textContent = `Hunger Level: ${data.hunger}/100`;
    }catch(error) {
        console.error("An error occured while retrieving GET request.")
    }
     
}



