import { api } from './api';
import { IProjectProps } from './IProjectService';

export const ProjectService = {
    getAllPosts: async (): Promise<IProjectProps[]> => {
        try {
            const response = await api.get<IProjectProps[]>('/projetos');
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar todos os posts:", error);
            throw error;
        }
    },
    
    getPostById: async (id: number): Promise<IProjectProps> => {
        try {
            const response = await api.get<IProjectProps>(`/projetos/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao buscar o post com ID ${id}:`, error);
            throw error;
        }
    },

    getPostsByCategory: async (category: string): Promise<IProjectProps[]> => {
        try {
            const response = await api.get<IProjectProps[]>(`/projetos`, {
                params: { category },
            });
          return response.data;
        } catch (error) {
            console.error(`Erro ao buscar posts da categoria ${category}:`, error);
            throw error;
        }
    },

    getAllCategories: async (): Promise<string[]> => {
        try {
            const response = await api.get<IProjectProps[]>('/projetos');
            
            const categorias = Array.from(
                new Set(response.data.map((projeto) => projeto.category))
            );
    
            return categorias;
        } catch (error) {
            console.error("Erro ao buscar categorias:", error);
            throw error;
        }
    }
};
