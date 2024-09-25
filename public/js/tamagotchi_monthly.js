tamagotchi_character = document.getElementById("Tamagotchi_Character");
tamagotchi_name = document.getElementById("Tamagotchi_Name");

function foo() {
    d = new Date();
    try {
    if(d.getMonth() === 0) {
      tamagotchi_charater.src = "public/static/Hotcaketchi.webp";
      tamagotchi_name.textContent = "Hotcaketchi";
    }
    else if(d.getMonth() === 1) {
      tamagotchi_character.src = "public/static/Mametchi.png";
      tamagotchi_name.textContent = "Mametchi";
       
    } 
    else if(d.getMonth() === 2) {
      tamagotchi_character.src = "public/static/Kuchipatchi.webp";
      tamagotchi_name.textContent = "Kuchipatchi";
    } 
    else if(d.getMonth() === 3) {
      tamagotchi_character.src = "public/static/Mimitchi.webp";
      tamagotchi_name.textContent = "Mimitchi";
    } 
    else if(d.getMonth() === 4) {
      tamagotchi_character.src = "public/static/Lovelitchi.webp";
      tamagotchi_name.textContent = "Lovelitchi";
    } 
    else if(d.getMonth() === 5) {
      tamagotchi_character.src = "public/static/Memetchi.webp";
      tamagotchi_name.textContent = "Memetchi";
    } 
    else if(d.getMonth() === 6) {
      tamagotchi_character.src = "public/static/Maskutchi.webp";
      tamagotchi_name.textContent = "Maskutchi";
    }  
    else if(d.getMonth() === 7) {
      tamagotchi_character.src = "public/static/Melodytchi.webp";
      tamagotchi_name.textContent = "Melodytchi";
    } else {
      tamagotchi_character.src = "public/static/Flowertchi.webp"
      tamagotchi_name.textContent = "Flowertchi";
    }
} catch(error) {
    console.error("An error occured while retrieving .webp files:", error);
}
}

foo();