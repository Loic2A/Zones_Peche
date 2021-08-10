import React from 'react'
import './Navbar.scss'

export default function Navbar() {

    const navSlide = () => {
        const nav = document.querySelector('.menu-site');
        const burger = document.querySelector('.burger');
        const menuLinks = document.querySelectorAll('li');

        nav!.classList.toggle('nav-active');
        burger!.classList.toggle('burger-active');

        menuLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `fadeinMenu 0.4s ease-in forwards ${index / 7}s`;
            }
        });

    }


    function alert(btn:string) {
        console.log(btn)
    }




    return (
        <div className="navbar-module">
            <nav>
                <div className="logo-site">
                    Zone Peche
                </div>
                <ul className="menu-site">
                    <li><a onClick={(e) => alert("accueil")}>Accueil</a></li>
                    <li><a onClick={(e) => alert("statistiques")}>Statistiques</a></li>
                    <li><a onClick={(e) => alert("ajout-zone")}>Ajout zone</a></li>
                </ul>                
                <div className="burger" onClick={navSlide}>
                    <div className="burger-line line1"></div>
                    <div className="burger-line line2"></div>
                    <div className="burger-line line3"></div>
                </div>
            </nav>
        </div>
    )
}