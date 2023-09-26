import React from "react";
import "./navbar.css"; // Importa tu archivo CSS para estilos

const NavbarBottom = () => {
    return (
        <nav className="navbar">
            <nav className="navbar-bottom">
                <div className="navbar-bottom-start">
                    <div className="logo-p">
                        <a href="/"><img
                            src={require("./img/competiciones/logo-kings.svg").default}
                            alt="logo-kings"
                            className="logo-main"
                        /></a>
                    </div>
                    <a href="/equipos" className="options">Equipos</a>
                    <a href="/jugador-12" className="options">Jugador 12 y 13</a>
                    <a href="/leyendas" className="options">Leyendas</a>
                    <a href="/partidos" className="options">Partidos</a>
                    <a href="/clasificacion" className="options">Clasificación</a>
                    <a href="/estadisticas" className="options">Estadísticas</a>
                    <a href="/presupuestos" className="options">Presupuestos</a>
                </div>
                <div className="navbar-bottom-end">
                    <button className="navbar-button">
                        <img
                            className="icon-button"
                            src="https://img.icons8.com/ios/50/ticket--v1.png"
                            alt="ticket--v1" />
                            ENTRADAS
                    </button>
                    <button className="navbar-button">
                        <img
                            className="icon-button"
                            src="https://img.icons8.com/fluency-systems-regular/48/t-shirt.png"
                            alt="t-shirt" />
                            TIENDA</button>
                    <button className="navbar-button">
                        <img 
                            className="icon-button"
                            src="https://img.icons8.com/ios-glyphs/30/twitch.png"
                            alt="twitch" />
                            DIRECTO</button>
                </div>
            </nav>
        </nav>
    );
};

export default NavbarBottom;