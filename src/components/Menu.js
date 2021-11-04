import React from 'react'
import './styles/Menu.css'

class Menu extends React.Component{
    render(){
        return(
            <ul className="menu">
                <li>Home</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        )
    }
}

export default Menu