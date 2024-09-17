// Display Hunger //
const GetHunger = document.getElementById("FetchHungerLink");
const GetHungerDisplay = document.getElementById("DisplayHunger");

const HungerUrl = 'http://localhost:3000/api/hunger/1'

GetHunger.addEventListener('click', GetHungerInfo);

async function GetHungerInfo(event) {
    event.preventDefault();
    try {
     
const res = await fetch(HungerUrl, {method:"GET"});
const data = await res.json();
console.log(data);

GetHungerDisplay.textContent = `Hunger Level: ${data.hunger}/100`;
    }catch(error) {
        console.error("An error occured while retrieving GET request.")
    }
     
}

// Display Health //
const GetHealth = document.getElementById("FetchHealthLink");
const GetHealthDisplay = document.getElementById("DisplayHealth");

const HealthUrl = 'http://localhost:3000/api/health/:id'

GetHealth.addEventListener('click', GetHealthInfo);

async function GetHealthInfo(event) {
    event.preventDefault();
    try {
     
const res = await fetch(HealthUrl, {method:"GET"});
const data = await res.json();
console.log(data);

GetHealthDisplay.textContent = `Hunger Level: ${data.health}/100`;
    }catch(error) {
        console.error("An error occured while retrieving GET request.")
    }
     
}





