
const GetHunger = document.getElementById("FetchHungerLink");
const GetHungerDisplay = document.getElementById("DisplayHunger");

const HungerUrl = 'http://localhost:3000/api/tamagotchi/hunger/1'

GetHunger.addEventListener('click', GetHungerInfo);

async function GetHungerInfo(event) {
    event.preventDefault();
    try {
     
const res = await fetch(HungerUrl, {method:"GET"});
const data = await res.json();
console.log(data);

GetHungerDisplay.textContent = `Hunger Level: ${data.hunger}/100`;
    }catch(error) {
        console.error("An error occured while retrieving GET request.", error)
    }
     
}

const GetHealth = document.getElementById("FetchHealthLink");
const GetHealthDisplay = document.getElementById("DisplayHealth");

const HealthUrl = 'http://localhost:3000/api/tamagotchi/health/1'

GetHealth.addEventListener('click', GetHealthInfo);

async function GetHealthInfo(event) {
    event.preventDefault();
    try {
     
const res = await fetch(HealthUrl, {method:"GET"});
const data = await res.json();
console.log(data);

GetHealthDisplay.textContent = `Health Level: ${data.health}/100`;
    }catch(error) {
        console.error("An error occured while retrieving GET request.", error)
    }
     
}

const GetHappinessLevel = document.getElementById("FetchHappinessLink");
const GetHappinessDisplay = document.getElementById("DisplayHappinessLevel");

const HappinessUrl = 'http://localhost:3000/api/tamagotchi/happiness/1'

GetHappinessLevel.addEventListener('click', GetHappinessInfo);

async function GetHappinessInfo(event) {
    event.preventDefault();
    try {
     
const res = await fetch(HappinessUrl, {method:"GET"});
const data = await res.json();
console.log(data);

GetHappinessDisplay.textContent = `Happiness Level: ${data.happiness_level}/100`;
    }catch(error) {
        console.error("An error occured while retrieving GET request.", error)
    }
     
}

const GetFriendshipLevel = document.getElementById("FetchFriendshipLink");
const GetFriendshipDisplay = document.getElementById("DisplayFriendshipLevel");

const FriendshipUrl = 'http://localhost:3000/api/tamagotchi/friendship/1'

GetFriendshipLevel.addEventListener('click', GetFriendshipInfo);

async function GetFriendshipInfo(event) {
    event.preventDefault();
    try {
     
const res = await fetch(FriendshipUrl, {method:"GET"});
const data = await res.json();
console.log(data);

GetFriendshipDisplay.textContent = `Friendship Level: ${data.friendship_level}/100`;
    }catch(error) {
        console.error("An error occured while retrieving GET request.", error)
    }
     
}

const GetAge = document.getElementById("FetchAgeLink");
const GetAgeDisplay = document.getElementById("DisplayAge");

const AgeUrl = 'http://localhost:3000/api/tamagotchi/age/1'

GetAge.addEventListener('click', GetAgeInfo);

async function GetAgeInfo(event) {
    event.preventDefault();
    try {
     
const res = await fetch(AgeUrl, {method:"GET"});
const data = await res.json();
console.log(data);

GetAgeDisplay.textContent = `Age: ${data.age} yrs`;
    }catch(error) {
        console.error("An error occured while retrieving GET request.", error )
    }
     
}

const GetWeight = document.getElementById("FetchWeightLink");
const GetWeightDisplay = document.getElementById("DisplayWeight");

const WeightUrl = 'http://localhost:3000/api/tamagotchi/weight/1'

GetWeight.addEventListener('click', GetWeightInfo);

async function GetWeightInfo(event) {
    event.preventDefault();
    try {
     
const res = await fetch(WeightUrl, {method:"GET"});
const data = await res.json();
console.log(data);

GetWeightDisplay.textContent = `Weight: ${data.weight} oz`;
    }catch(error) {
        console.error("An error occured while retrieving GET request.", error)
    }
     
}

const PatchFeed = document.getElementById("FeedTamagotchi");

const FeedUrl = 'http://localhost:3000/api/tamagotchi/feed/1'

PatchFeed.addEventListener('click', PatchFeedInfo);

async function PatchFeedInfo() {
    try { 
    console.log("PatchFeedInfo called");
const res = await fetch(FeedUrl, {method:"PATCH",

headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
});
console.log(await res.json());
    }catch(error) {
        console.error("An error occured while retrieving PATCH request.", error)
    }
     
}








