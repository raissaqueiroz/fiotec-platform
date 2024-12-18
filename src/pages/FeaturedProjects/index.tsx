import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import icon_favorite from '../../assets/heart_icon.png';
import icon_access from '../../assets/view_icon.png';

import { Card } from "../../components/molecules/Card";
import { ProjectService } from "../../services/ProjectService";
import { IProjectProps } from "../../services/IProjectService";

export const FeaturedProjects = () => {
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
        <Container className="row row-cols-1 row-cols-md-3 g-4 justify-content-between align-items-strech">
            {projects.length > 0 ? (
                projects.map((project) => (
                    <Card 
                        key={project.id} 
                        description={project.description} 
                        title={project.title} 
                        imageSrc={project.image} 
                        buttons={[
                            {
                                title: 'Acessar',
                                iconSrc: icon_access,
                                handleClick: () => handleAccessClick(project.id),
                            },
                            {
                                title: 'Favoritar',
                                iconSrc: icon_favorite,
                                handleClick: () => console.log(`Projeto ${project.id} favoritado`),
                            },
                        ]} 
                    />
                ))
            ) : (
                <p>Carregando projetos...</p> // Exibe uma mensagem de carregamento enquanto os dados são buscados
            )}
        </Container>
    );
}
