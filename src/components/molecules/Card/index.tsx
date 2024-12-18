import React from 'react';

import { CardContainer, CardImage, CardBody, CardTitle, CardText, CardFooterButton, CardButton, CardButtonIcon } from './styles';
import { ICardButton, ICardProps } from './card.d';

export const Card: React.FC<ICardProps> = ({ title, description, imageSrc, buttons }) => {
    return (
        <CardContainer className="card d-flex flex-column mb-3">
            <CardImage src={imageSrc} className="card-img-top" alt="Card image" />
            <CardBody className="card-body">
                <CardTitle className="card-title">{title}</CardTitle>
                <CardText className="card-text">{description}</CardText>
                <CardFooterButton className="d-flex justify-content-between align-items-center">
                    {buttons?.map((button: ICardButton, index: number) => (
                        <CardButton key={index} onClick={button.handleClick} className="btn btn-secondary">
                            <CardButtonIcon src={button.iconSrc} /> {button.title}
                        </CardButton>
                    ))} 
                </CardFooterButton>
                
            </CardBody>
        </CardContainer>
    );
};
