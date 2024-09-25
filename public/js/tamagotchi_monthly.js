// Get new adult Tamagotchi every month //

tamagotchi_character = document.getElementById("Tamagotchi_Character");
tamagotchi_name = document.getElementById("Tamagotchi_Name");

function foo() {
   d = new Date();
   try {
      if (d.getMonth() === 0) {
         tamagotchi_charater.src = "public/static/Tamagotchi_Monthly_Sprites/Mametchi/Mametchi.png";
         tamagotchi_name.textContent = "Mametchi";
      }
      else if (d.getMonth() === 1) {
         tamagotchi_character.src = "public/static/Tamagotchi_Monthly_Sprites/Kuchipatchi/Kuchipatchi.webp";
         tamagotchi_name.textContent = "Kuchipatchi";

      }
      else if (d.getMonth() === 2) {
         tamagotchi_character.src = "public/static/Tamagotchi_Monthly_Sprites/Memetchi/Memetchi.webp";
         tamagotchi_name.textContent = "Memetchi";
      }
      else if (d.getMonth() === 3) {
         tamagotchi_character.src = "public/static/Tamagotchi_Monthly_Sprites/Gozarutchi/Gozarutchi.webp";
         tamagotchi_name.textContent = "Gozarutchi";
      }
      else if (d.getMonth() === 4) {
         tamagotchi_character.src = "public/static/Tamagotchi_Monthly_Sprites/Togetchi/Togetchi.webp";
         tamagotchi_name.textContent = "Togetchi";
      }
      else if (d.getMonth() === 5) {
         tamagotchi_character.src = "public/static/Tamagotchi_Monthly_Sprites/Maskutchi/Maskutchi.webp";
         tamagotchi_name.textContent = "Maskutchi";
      }
      else if (d.getMonth() === 6) {
         tamagotchi_character.src = "public/static/Tamagotchi_Monthly_Sprites/Lovelitchi/Lovelitchi.webp";
         tamagotchi_name.textContent = "Lovelitchi";
      }
      else if (d.getMonth() === 7) {
         tamagotchi_character.src = "public/static/Tamagotchi_Monthly_Sprites/Chamametchi/Chamametchi.webp";
         tamagotchi_name.textContent = "Chamametchi";
      }
      else if (d.getMonth() === 8) {
         tamagotchi_character.src = "public/static/Tamagotchi_Monthly_Sprites/Debirutchi/Debirutchi.webp";
         tamagotchi_name.textContent = "Debirutchi";
      }
      else if (d.getMonth() === 9) {
         tamagotchi_character.src = "public/static/Tamagotchi_Monthly_Sprites/Pochitchi/Pochitchi.webp";
         tamagotchi_name.textContent = "Pochitchi";
      }
      else if (d.getMonth() === 10) {
         tamagotchi_character.src = "public/static/Tamagotchi_Monthly_Sprites/Flowertchi/Flowertchi.webp";
         tamagotchi_name.textContent = "Flowertchi";
      }
      else {
         tamagotchi_character.src = "public/static/Tamagotchi_Monthly_Sprites/Mimitchi/Mimitchi.webp";
         tamagotchi_name.textContent = "Mimitchi";
      }
   } catch (error) {
      console.error("An error occured while retrieving .webp files:", error);
   }
}

foo();