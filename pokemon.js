// const fetchPokemon =  async (name) => {
//     try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//         const json = response.json()
//         return json
//     } catch (error) {
//           console.log(error)  
//     }
// }


// const appNode = document.getElementById('app')

// const renderPokemon = async (name) => {
//     const pokemonData = await fetchPokemon(name)

//     const pokemonImageNode = document.createElement('img')
//     pokemonImageNode.src = pokemonData.sprites.front_default

//     const pokemonNameNode = document.createElement('div')
//     pokemonNameNode.innerHTML = pokemonData.name

//     appNode.appendChild(pokemonImageNode)
//     appNode.appendChild(pokemonNameNode)
// }


// renderPokemon('pikachu')        
// renderPokemon('mew')
// renderPokemon('mewtwo')

// //https://pokeapi.co/api/v2/pokemon/bulbasaur


const listapokemon = document.getElementById("listaPokemon")
let URL = "https://pokeapi.co/api/v2/pokemon/";

for(let i = 1; i <= 151; i++) {
    fetch(URL + i)
    .then((response) => response.json())
    .then(data => mostrapokemon(data))

}
function mostrapokemon (poke) {


    let tipos = poke.types.map(type => `<p class="${type.type.name}">${type.type.name}</p>`)
    tipos = tipos.join('');
    // console.log(tipos);

    let pokeId = poke.id.toString();
    // console.log(typeof pokeId);
    if(pokeId.length === 1) {
        pokeId = "00" + pokeId
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId
    }
    
    

    const div = document.createElement("div")
    // div.className.add("pokemon")
    div.innerHTML = `<div class="pokemon">
                    <p class="pokemon-id-back">#${pokeId}</p>
                    <div class="pokemon-imagen">
                        <img src="${poke.sprites.other.dream_world.front_default}" alt="Pikachu" width="250px">
                    </div>
                    <div class="pokemon-info">
                        <div class="nombre-contenedor">
                            <h2 class="pokemon-nombre">${poke.name}</h2>
                        </div>
                        <div class="pokemon-tipos">
                        ${tipos}    
                        </div>
                        <div class="pokemon-stats">
                            <p class="stat">${poke.height}</p>
                            <p class="stat">${poke.weight}</p>
                        </div>
                    </div>
                </div>`
                listapokemon.append(div);
                // console.log(poke);
                

}