import styled from 'styled-components';

export const LeftPanel = styled.div`
    width: 20%;
    height: 400px;
    padding: 10px 3% !important;
    background-color:rgb(235, 232, 232);
    border-radius: 3%;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3);
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const TitleH3 = styled.h3`
    margin-bottom: 0px !important;
    font-size: 1.2rem;
`;

export const Item = styled.li`
    margin-bottom: 10px;

    a:hover {
        color: #007bff
    }
`;

