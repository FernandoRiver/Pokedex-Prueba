import React, { useState } from "react";

//Componentes
import Pantalla  from "./pantalla/pantalla"
import Controles from "./controles/controles";

const Pokedex = () => {
    // Id inicial

    const [pokeData, setPokeData] =useState(''),
        [shiny, setShiny] = useState(false),
        [id, setId] = useState(6);
    // Arrow control
    const arrowControl = (input) => {
        if((id + input) < 1){
            setId(1)
            pokemon(1)
            return
        }
        pokemon(id+input)
        setId(id+input)
    }
    
    // Pokemon Data
    const pokemon = async (idPokemon) =>{
        await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then(res => res.json())
        .then(data => setPokeData(data))
    }
    if(!pokeData)
        pokemon(id)
    
    const menu = document.getElementById("menu")
    if(menu !== null){
        menu.addEventListener('click', () =>{
            if(menu.classList.contains('menu-select')){
                menu.classList.remove('menu-select')
            }
            else{
                menu.classList.add('menu-select')
            }
        })
    }
    // Get random id
    const rndPokemon = () => {
        const rnd_pokemon = Math.floor((Math.random() * 898) + 1);
        setId(rnd_pokemon)
        pokemon(rnd_pokemon)
        return rnd_pokemon
    }
    return <div className="pokedex-container">
        <div id="menu" className="menu" >
            <div className="line_1"></div>
            <div className="line_2"></div>
            <div className="line_3"></div>
        </div>
        <Pantalla data={pokeData} shiny={shiny} male={false}></Pantalla>
        <Controles 
            setShiny={setShiny} 
            arrowControl={arrowControl}
            rndPokemon={rndPokemon}
            shiny={shiny} 
            data={pokeData}></Controles>
    </div>
}

export default Pokedex;