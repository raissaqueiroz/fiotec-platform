import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardLarge } from "../../components/molecules/CardLarge";

import { ProjectService } from "../../services/ProjectService";
import { IProjectProps } from "../../services/IProjectService";

export const FavoriteProjects = () => {
    const [projects, setProjects] = useState<IProjectProps[]>([]); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await ProjectService.getAllPosts();
                
                setProjects(data);
            } catch (error) {
                console.error('Erro ao carregar os projetos:', error);
            }
        };

        fetchProjects();
    }, []); 
    
    const handleAccessClick = (projectID: number) => {
        navigate(`/projects/${projectID}`); 
    };

    return (
        <>
        <h5 className="fs-5 mb-5">Meus Favoritos</h5>
            {projects.length > 0 ? (
                projects.map((project) => (
                    <CardLarge
                        key={project.id} 
                        description={project.description} 
                        title={project.title} 
                        imageSrc={project.image} 
                        onClick={() => handleAccessClick(project.id)}
                    />
                ))
            ) : (
                <p>Carregando projetos...</p> // Exibe uma mensagem de carregamento enquanto os dados são buscados
            )}
        </>
    );
}
