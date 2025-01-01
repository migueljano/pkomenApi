const fetchPokemon =  async (name) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const json = response.json()
        return json
    } catch (error) {
          console.log(error)  
    }
}


const appNode = document.getElementById('app')

const renderPokemon = async (name) => {
    const pokemonData = await fetchPokemon(name)

    const pokemonImageNode = document.createElement('img')
    pokemonImageNode.src = pokemonData.sprites.front_default

    const pokemonNameNode = document.createElement('div')
    pokemonNameNode.innerHTML = pokemonData.name

    appNode.appendChild(pokemonImageNode)
    appNode.appendChild(pokemonNameNode)
}


renderPokemon('pikachu')
renderPokemon('mew')
renderPokemon('mewtwo')

//https://pokeapi.co/api/v2/pokemon/bulbasaur


const fetchPokemon1 = async () => {
    try {
        const apiPokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        return apiPokemon.json()
    } catch (error) {
        console.log(error);
        
    }
}

const pokemon = document.getElementById("pokemon")
