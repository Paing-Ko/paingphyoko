const pokemonInput = document.getElementById("pokemonInput");
const showButton = document.getElementById("showButton");
const pokemonDiv = document.getElementById("pokemonDiv");
const nameSpan = document.getElementById("nameSpan");
const heightSpan = document.getElementById("heightSpan");
const weightSpan = document.getElementById("weightSpan");

const experienceSpan = document.getElementById("experienceSpan");
const typesSpan = document.getElementById("typesSpan");
const spriteImg = document.getElementById("spriteImg");

async function showPokemon() {
  const pokemonName = pokemonInput.value.toLowerCase();
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await response.json();
  nameSpan.textContent = pokemon["name"];
  heightSpan.textContent = pokemon["height"];
  weightSpan.textContent = pokemon["weight"];
  experienceSpan.textContent = pokemon["base_experience"];

  typesSpan.textContent = pokemon["types"]
    .map((type) => type.type.name)
    .join(", ");

  spriteImg.src = pokemon["sprites"]["front_default"];
  pokemonDiv.hidden = false;
}

showButton.addEventListener("click", showPokemon);
