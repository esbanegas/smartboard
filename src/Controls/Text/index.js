import React from 'react';
import styled from 'styled-components';

const TextStyled = styled.span`
    font-size: ${props => props.type === 'title' ? '24px' : '16px'};
    font-weight: ${props => props.styleText};
    color: #848484;
`;

const TextControl = ({ text, title, normal, bold }) => {

    const getTypeText = () => {
        if (title) return 'title';

        return 'normal';
    }

    const getStyleText = () => {
        if(bold) return 'bold';

        return 'normal';
    }

    return (
        <TextStyled type={getTypeText()} styleText={getStyleText()}>
            {text}
        </TextStyled>
    );
}


export default TextControl;