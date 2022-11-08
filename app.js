let container = document.querySelector('.container')
const getPokemon = async id => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(url);
    let pokemon = await res.json();
    // console.log(pokemon)
    createPokemonCard(pokemon)

}

const fetchPokemon = async () => {
    for (let i = 1; i <= 150; i++) {
        await getPokemon(i)

    }
}
fetchPokemon()

function createPokemonCard(pokemon) {
    const name = `${pokemon.name}`
    let card = document.createElement('div')
    card.classList.add('card')
    container.appendChild(card)
    let types = []
    let pokeAbility = []

    for (let i = 0; i < pokemon.types.length; i++) {
        types.push(pokemon.types[i])
    }

    for (let j = 0; j < pokemon.abilities.length; j++) {
        pokeAbility.push(pokemon.abilities[j])
    }

    //image
    let pokeImage = document.createElement('img')
    pokeImage.setAttribute('src', `${pokemon.sprites.front_default}`)
    pokeImage.setAttribute("alt", `${pokemon.name}`)
    card.appendChild(pokeImage)
    pokeImage.classList.add('pokeImage')

    //name
    let heading = document.createElement('h1')
    heading.innerHTML = name;
    card.appendChild(heading)
    heading.classList.add('pokeName')

    //types
    let type = document.createElement('p')
    let pokeTypes = []
    types.map((x) => {
        pokeTypes.push(x.type.name)

        type.innerHTML = "<strong>Types: </strong>" + pokeTypes.join(",")
        card.appendChild(type)
        type.classList.add('pokeType')
    })

    //abilities
    let abilityTxt = document.createElement('p')
    let pokeAbilities = []

    pokeAbility.map((x) => {
        pokeAbilities.push(x.ability.name)
        abilityTxt.innerHTML = "<strong>Abilities: </strong>" + pokeAbilities.join(",")
        card.appendChild(abilityTxt)
        abilityTxt.classList.add('pokeAbility')
    })
}

