import React from "react"

const Card= ({nombre, edad, pizza}) = {

    return(
        <div>
        <h2> Bienvenido/a {nombre}, tiene {edad} y tu pizza favorita es {pizza} </h2>
        </div>
    );
}

export default Card;
