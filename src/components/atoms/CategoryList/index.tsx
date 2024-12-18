import React from 'react';

import { ICategoryListProps } from './categoryList';
import { LeftPanel, TitleH3, Item } from './styles';

export const CategoryList: React.FC<ICategoryListProps> = ({ items }) => {
    return (
        <LeftPanel className="d-flex row justify-content-start align-items-center">
            <TitleH3>Filtrar por Categoria</TitleH3>
            <ul>
                {items.map((item: string, index: number) => (
                    <Item key={index}>
                        <a href={`/category/${item}`}>{item}</a>
                    </Item>
                ))}
            </ul>
        </LeftPanel>
    );
};
