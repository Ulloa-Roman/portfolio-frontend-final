import React from "react";
import Contact from "./Contact";
import Projects from "./Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export default function Home() {

  return (
    <main>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="fw-bold">Roman Ulloa</span>
          <div>
            <a href="#hero" className="me-3">Inicio</a>
            <a href="#projects" className="me-3">Proyectos</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="section hero">
        <div className="hero-text hover-card">
          <h1 className="front-text">Hola, soy Roman Ulloa</h1>
          <p className="back-text">
            Soy desarrollador Full-Stack apasionado por la programación científica, 
            análisis numérico y visualización de datos.
          </p>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="section">
        <Projects />
        
      </section>

      {/* CONTACTO */}
      <section id="contact" className="section">
        <Contact />
      </section>
      
    </main>
  );
}


