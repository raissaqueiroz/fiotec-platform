import styled from 'styled-components';

export const CardContainer = styled.div`
    overflow: hidden;
`;

export const CardImage = styled.img`
    width: 100%; 
    height: auto;
`;

export const CardBody = styled.div`
  
`;

export const CardTitle = styled.h5`
    font-size: 1.25rem;
`;

export const CardText = styled.p`
    font-size: 1rem;
    margin-bottom: 1.25rem;
`;

export const CardButton = styled.button`
    text-decoration: none; 
    color:rgb(87, 87, 87); 
    padding: 4%; 
    font-size: 0.9rem; 
    background-color:rgb(202, 205, 207); 
    border: none;
    border-radius: 50px;
    text-align: center;

    &:hover {
        background-color:rgb(171, 174, 177);
    }
`;

export const CardButtonIcon = styled.img`
    width: 20px;
    height: 20px;
`;

export const CardFooterButton = styled.div `
`;