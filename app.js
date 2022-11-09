let container = document.querySelector(".container");
const getPokemon = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url);
  let pokemon = await res.json();
  //   console.log(pokemon);
  createPokemonCard(pokemon);
};

const fetchPokemon = async () => {
  for (let i = 1; i <= 150; i++) {
    await getPokemon(i);
  }
};
fetchPokemon();

function createPokemonCard(pokemon) {
  //------------------------------------//

  let flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  let flipCardInner = document.createElement("div");
  flipCardInner.classList.add("flip-card-inner");

  let flipCardFront = document.createElement("div");
  flipCardFront.classList.add("flip-card-front");

  let flipCardBack = document.createElement("div");
  flipCardBack.classList.add("flip-card-back");

  container.appendChild(flipCard);
  flipCard.appendChild(flipCardInner);
  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);

  //------------------------------------//

  const name = `${pokemon.name}`;
  // let card = document.createElement('div')
  // card.classList.add('card')
  // container.appendChild(card)
  let types = [];
  let pokeAbility = [];

  for (let i = 0; i < pokemon.types.length; i++) {
    types.push(pokemon.types[i]);
  }

  for (let j = 0; j < pokemon.abilities.length; j++) {
    pokeAbility.push(pokemon.abilities[j]);
  }

  //image
  let pokeImage = document.createElement("img");
  pokeImage.setAttribute("src", `${pokemon.sprites.front_default}`);
  pokeImage.setAttribute("alt", `${pokemon.name}`);
  pokeImage.classList.add("pokeImage");
  flipCardFront.appendChild(pokeImage);

  //name
  let heading = document.createElement("h1");
  heading.innerHTML = name;
  heading.classList.add("pokeName");
  flipCardFront.appendChild(heading);

  //types
  let type = document.createElement("p");
  let pokeTypes = [];
  types.map((x) => {
    pokeTypes.push(x.type.name);
    type.innerHTML = "<strong>Types: </strong>" + pokeTypes.join(",");
    flipCardBack.appendChild(type);
    type.classList.add("pokeType");
  });

  //abilities
  let abilityTxt = document.createElement("p");
  let pokeAbilities = [];

  pokeAbility.map((x) => {
    pokeAbilities.push(x.ability.name);
    abilityTxt.innerHTML =
      "<strong>Abilities: </strong>" + pokeAbilities.join(",");
    flipCardBack.appendChild(abilityTxt);
    abilityTxt.classList.add("pokeAbility");
  });

  //height
  let pokeHeight = document.createElement("p");
  pokeHeight.innerHTML = "<strong>Height: </strong>" + pokemon.height;
  flipCardBack.appendChild(pokeHeight);

  //species
  let pokeSpecies = document.createElement("p");
  pokeSpecies.innerHTML = "<strong>Species: </strong>" + pokemon.species.name;
  flipCardBack.appendChild(pokeSpecies);

  //base experience
  let baseExperience = document.createElement("p");
  baseExperience.innerHTML =
    "<strong>Base experience: </strong>" + pokemon.base_experience;
  flipCardBack.appendChild(baseExperience);

  //forms
  let forms = document.createElement("p");
  let pokeForms = [];

  for (let i = 0; i < pokemon.forms.length; i++) {
    pokeForms.push(pokemon.forms[i].name);
  }

  forms.innerHTML = "<strong>Forms: </strong>" + pokeForms;
  //   console.log(pokemon);
  flipCardBack.appendChild(forms);

  //moves
  let moves = document.createElement("p");
  let span = document.createElement("span")
  span.innerHTML = "<strong>Moves: </strong>"
  moves.appendChild(span)
  let pokeMoves = [];

  for (let i = 0; i < pokemon.moves.length; i++) {
    pokeMoves.push(pokemon.moves[i].move.name);
  }
//   console.log(pokeMoves);
  for (let i = 0; i < 3; i++) {
    moves.innerHTML += pokeMoves[i]
  }
  flipCardBack.appendChild(moves);
}
