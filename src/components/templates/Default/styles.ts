import styled from 'styled-components';

export const LayoutContainer = styled.div`
    min-height: 100vh;
`;

export const PageContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'hasCategories', 
})<{ hasCategories: boolean }>`
    width: ${({ hasCategories }) => (hasCategories ? '80%' : '100%')};
    padding: 0 4%;

    @media (max-width: 768px) {
      width: 100%;
    }
`;

export const MainContainer =  styled.div`

`;