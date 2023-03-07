import React, { useState } from "react"
import Card from './Card'


const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        edad: '',
        pizza: '',
    });

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
            if(user.nombre.length >=3 && string.charAt(0) != " " && user.age.length >0 && user.pizza.length >=6) {
            setShow(true);
            alert(
            `Bienvenido/a, ${user.nombre}! tu edad es ${user.edad} y tu pizza favorita es ${
                user.pizza} años ` 
            );else { ; setErr(true)            }};
            

            }
    
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" value={user.nombre} onChange={(event) => setUser({...user, nombre: event.target.value})}/>
            
            <label>Edad</label>
            <input type="text" value={user.edad} onChange={(event) => setUser({...user, edad: event.target.value})}/>
            
            <label>Tu pizza favorita </label>
            <input type="text" value={user.pizza} onChange={(event) => setUser({...user, pizza: event.target.value})}/>
            
            <button type="submit">Enviar</button>

        </form>
    {show ? <Card nombre={user.nombre}  edad={user.edad} pizza={user.pizza}/> : null }
    </div>
    );
};

export default Form;