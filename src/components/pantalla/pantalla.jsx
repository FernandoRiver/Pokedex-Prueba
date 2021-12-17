import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faVenus, faMars } from '@fortawesome/free-solid-svg-icons'


const star = <FontAwesomeIcon icon={faStar} />
const maleIcon = <FontAwesomeIcon icon={faMars} />
const femaleIcon = <FontAwesomeIcon icon={faVenus} />

const Pantalla = (props) => { 
    const data = props.data,
        shiny = props.shiny,
        male = props.male;

    let id = ''
    let sprite = ''
    if(data){
        id = data.id
        if(shiny){
            sprite = data.sprites.front_shiny
        }
        else{
            sprite = data.sprites.front_default
        }
    }

    return <div className="pantalla">
        {
            shiny?<div  className="shiny">{star}</div>:null
        }
        
        <div>{male}</div>
        <h1 className="pokemon-id">#0{id}</h1>
        <img src={sprite} className="pokemon" alt="pokemon"/>
    </div>
}

export default Pantalla