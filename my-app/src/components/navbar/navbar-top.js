import React from "react";
import "./navbar.css"; // Importa tu archivo CSS para estilos

const equipos = [
  { nombre: "ultimate-mostoles", logo: "ultimate-mostoles.svg" },
  { nombre: "1k", logo: "1k.svg" },
  { nombre: "aniquiladores", logo: "aniquiladores.svg" },
  { nombre: "el-barrio", logo: "el-barrio.svg" },
  { nombre: "jijantes-fc", logo: "jijantes-fc.svg" },
  { nombre: "kunisports", logo: "kunisports.svg" },
  { nombre: "los-troncos", logo: "los-troncos.png" },
  { nombre: "pio", logo: "pio.svg" },
  { nombre: "porcinos-fc", logo: "porcinos-fc.svg" },
  { nombre: "rayo-barcelona", logo: "rayo-barcelona.svg" },
  { nombre: "saiyans-fc", logo: "saiyans-fc.svg" },
  { nombre: "xbuyer-team", logo: "xbuyer-team.svg" },
];

const competiciones = [
  { nombre: "prince-cup", logo: "prince-cup.svg", url: "https://princecup.kingsleague.pro/" },
  { nombre: "queens-league", logo: "queens-league.svg", url: "https://www.queensleague.pro" },
]

const redes = [
  { nombre: "twitter", logo: "twitter.svg", url: "https://www.twitter.com" },
  { nombre: "instagram", logo: "instagram.svg", url: "https://www.instagram.com" },
  { nombre: "tik-tok", logo: "tik-tok.svg", url: "https://www.tiktok.com/es/" },
  { nombre: "youtube", logo: "youtube.svg", url: "https://www.youtube.com" },
];

const NavbarTop = () => {
  return (
    <header className="navbar">
      <nav className="navbar-top">
        <div className="navbar-top-start">
          {equipos.map((equipo, index) => (
            <div key={index} className="equipo">
              <img
                src={require(`./img/equipos/${equipo.logo}`)}
                alt={equipo.nombre}
                className="logo-equipo"
              />
            </div>
          ))}
        </div>
        <div className="navbar-top-end">
          {competiciones.map((competicion, index) => (
            <div key={index} className="competicion">
              <a
                href={competicion.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require(`./img/competiciones/${competicion.logo}`)}
                  alt={competicion.nombre}
                  className="logo-competicion"
                />
              </a>
            </div>
          ))}
          {redes.map((red, index) => (
            <div key={index} className="red">
              <a
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require(`./img/redes/${red.logo}`)}
                  alt={red.nombre}
                  className="logo-red"
                />
              </a>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavbarTop;
