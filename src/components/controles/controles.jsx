import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const arrowControl = [
    <FontAwesomeIcon icon={faChevronUp} />,
    <FontAwesomeIcon icon={faChevronLeft} />,
    <FontAwesomeIcon icon={faChevronRight} />,
    <FontAwesomeIcon icon={faChevronDown} />]

const Controles = (props) => {
    let controles = '',
        setShiny = '',
        rndPokemon = '',
        shiny = '',
        data = '';

    if(props && setShiny === ''){
        setShiny = props.setShiny
        rndPokemon = props.rndPokemon
        shiny = props.shiny
        data = props.data
        controles = props.arrowControl

    }
    let type = data.types

    if(type == null)
        type = ['0']
    
    

    return <div className="controles">
        <div className="change-control">
            <div className="rnd-pokemon"
                onClick={()=>{rndPokemon()}}
            >
                <div className="botton">Random</div>
            </div>
            <div className="shiny-botton" onClick={
                    () => {setShiny(!shiny)}
                }>
                <div className="botton" >Shiny</div>
            </div>
        </div>
        <div className="pokemon-name">
            {/* {getTypes()} */}
            <div className="pokemon-data"><p>Nombre: </p><span className="poke-name">{data.name}</span></div>
            <div className="pokemon-data"><p>Tipo: </p>{type.map((item) =>{
                if(item !== '0'){
                    return <span key={item.type.name}  className={item.type.name}>{item.type.name}</span>
                }
            })}</div>
            
        </div>
        <div>    
            <div className="arrowControl">
                <div className="up" onClick={async ()=>{await controles(-1)}}>{arrowControl[0]}</div>
                <div className="centralArrows">
                    <div className="left" onClick={async ()=>{await controles(-10)}}>{arrowControl[1]}</div>
                    <div className="right" onClick={async ()=>{await controles(10)}}>{arrowControl[2]}</div>
                </div>
                <div className="down" onClick={async ()=>{await controles(1)}}>{arrowControl[3]}</div>
            </div>
        </div>
    </div>
}

export default Controles