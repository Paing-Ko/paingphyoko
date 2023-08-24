const pokemonInput = document.getElementById("pokemonInput");
const showButton = document.getElementById("showButton");
const pokemonDiv = document.getElementById("pokemonDiv");
const nameSpan = document.getElementById("nameSpan");
const spriteImage = document.getElementById("spriteImage");
const heightSpan = document.getElementById("heightSpan");
const weightSpan = document.getElementById("weightSpan");
const baseExperienceSpan = document.getElementById("baseExperienceSpan");
const typeSpan = document.getElementById("typeSpan");

async function showPokemon() {
  const pokemonName = pokemonInput.value.toLowerCase();
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await response.json();
  nameSpan.textContent = pokemon["name"];
  spriteImage.src = pokemon["sprites"]["front_default"];
  spriteImage.alt = `Front view of ${pokemon["name"]}`;
  heightSpan.textContent = pokemon["height"];
  weightSpan.textContent = pokemon["weight"];
  baseExperienceSpan.textContent = pokemon["base_experience"];
  const types = [];
  for (const typeData of pokemon["types"]) {
    types.push(typeData["type"]["name"]);
  }
  typeSpan.textContent = types.join(" and ");
  pokemonDiv.hidden = false;
}

showButton.addEventListener("click", showPokemon);

function rotateSpriteImage() {
  spriteImage.classList.toggle("rotated");
}

spriteImage.addEventListener("click", rotateSpriteImage);
