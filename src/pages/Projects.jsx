import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://portfolio-backend-final-nepn.onrender.com/api/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log("Respuesta del backend:", data);
        setProjects(data.projects || data); 
        setLoading(false);
      })

      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando proyectos...</p>;

  return (
    <section id="proyectos" className="sectionProjects">
      <h1>Proyectos</h1>
      <div className="grid">
        {projects.map((p) => (
          <article key={p._id} className="card">
            <h3>{p.title}</h3>
            <p>
              {p.description.slice(0, 120)}
              {p.description.length > 120 ? "..." : ""}
            </p>
            <p>
              <strong>Tecnologías:</strong> {p.technologies?.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
