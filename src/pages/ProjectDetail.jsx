import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/projects/${id}`)
            .then((res) => res.json())
            .then((data) => setProject(data.project))
            .catch((err) => console.error(err));
    }, [id]);

    if (!project) return <p>Cargando...</p>;
    return (
        <section>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p><strong>Tecnologias:</strong> {project.technologies?.join(", ")}</p>
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Ver en vivo</a>}
            {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Repositorio</a>}
        </section>
    );
}