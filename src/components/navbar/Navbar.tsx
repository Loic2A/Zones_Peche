// import React from 'react'
import MeteoInfos from '../meteo/MeteoInfos';
import './Navbar.scss'

export default function Navbar() {

    const navSlide = () => {
        const nav:Element | null = document.querySelector('.menu-site');
        const burger:Element | null = document.querySelector('.burger');
        const menuLinks:NodeListOf<HTMLLIElement> = document.querySelectorAll('li');

        if(nav != null && burger != null){
            nav.classList.toggle('nav-active');
            burger!.classList.toggle('burger-active');
        }

        menuLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `fadeinMenu 0.4s ease-in forwards ${index / 7}s`;
            }
        });

    }

    return (
        <div className="navbar-module">
            <nav>
                <div className="logo-site">
                    Zone Peche
                </div>
                <div>
                    <MeteoInfos 
                        meteoInfosLite={true}
                    />
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