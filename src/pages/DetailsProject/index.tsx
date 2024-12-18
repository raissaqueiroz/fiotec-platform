import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { ProjectService } from '../../services/ProjectService';
import { IProjectProps } from '../../services/IProjectService';
import { TitleH5, TitleH1, Image, Paragraphy } from './styles';

export const DetailsProjects = () => {

    const { projectID } = useParams<{ projectID: string }>();
    const [project, setProject] = useState<IProjectProps | null>(null); 
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjeto = async () => {

            try {
                setLoading(true);

                if (projectID) {
                    const data = await ProjectService.getPostById(Number(projectID));
                    setProject(data);
                }
            } catch (err) {
                setError('Erro ao carregar o projeto. Por favor, tente novamente mais tarde.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjeto();
    }, [projectID]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
  
    return (
        <>
        {project ? (
            <>
                <TitleH5 className="fs-5 mb-5">Projeto em Destaque</TitleH5>
                <TitleH1 className="fs-2 mb-4">{project.title}</TitleH1>
                <Image src={project.image} />
                <Paragraphy className="mt-5 fw-light lh-base font-monospace">{project.description}</Paragraphy>
            </>
        ): (
            <TitleH1 className="fs-2 mb-4">Projeto não encontrado.</TitleH1>
        )}

        </>
    );
}
