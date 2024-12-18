import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';

import { Header } from '../../atoms/Header';
import { CategoryList } from '../../atoms/CategoryList';
import { ProjectService } from '../../../services/ProjectService';

import { LayoutContainer, PageContainer, MainContainer } from './styles';

import logo from '../../../assets/logo.png';
import userIcon from '../../../assets/user_icon.png';

export const Default: React.FC<{enableCategory: boolean }> = ({ enableCategory: enabledCategory = true}) => {
    const [categories, setCategories] = useState<string[]>([]);
    const location = useLocation();

    const menuItems = [
        { label: 'Inicio', link: '/projects', active: false },
        { label: 'Projetos em Destaque', link: '/projects', active: location.pathname === '/projects' },
        { label: 'Meus Favoritos', link: '/favorites', active: location.pathname === '/favorites' },
    ];

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryNames = await ProjectService.getAllCategories();
                setCategories(categoryNames);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <LayoutContainer>
            <Header
                logoSrc={logo}
                menuItems={menuItems}
                userAvatar={userIcon}
            />
            
            <MainContainer className="d-flex p-5">
                {enabledCategory && <CategoryList items={categories} /> }
                <PageContainer hasCategories={enabledCategory}>
                    <Outlet />
                </PageContainer>
            </MainContainer>
        </LayoutContainer>
    );
};
