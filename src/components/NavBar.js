import React from "react";
import { CartWidget } from "./CartWidget";


export const NavBar = () => {
    return(
        <div>
            <header>
                <img src="https://www.creativefabrica.com/wp-content/uploads/2020/09/17/Book-Logo-Graphics-5535886-1-1-580x386.jpg" alt="logo"></img>
                <h2>Librería Gotria</h2>
                <CartWidget contador={333}/>
                <nav>
                    <ul>
                        <li><a href="">Terror</a></li>
                        <li><a href="">Ciencia Ficción</a></li>
                        <li><a href="">Filosofía</a></li>
                        <li><a href="">Fantasía</a> </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}