import React from 'react';

import { CardContainer, CardTitle, CardText, CardImage } from './styles';
import { ICardLargeProps } from './cardLarge.d';

export const CardLarge: React.FC<ICardLargeProps> = ({ title, description, imageSrc, onClick }) => {
    return (
        <CardContainer onClick={onClick} className="card mb-3">
            <CardContainer className="row g-0">
                <CardContainer className="col-md-4">
                    <CardImage src={imageSrc} className="img-fluid rounded-start" alt="..." />
                </CardContainer>
                <CardContainer className="col-md-8">
                    <CardContainer className="card-body">
                        <CardTitle className="card-title mb-5">{title}</CardTitle>
                        <CardText className="card-text">{description}</CardText>
                    </CardContainer>
                </CardContainer>
            </CardContainer>
        </CardContainer>
    );
};
