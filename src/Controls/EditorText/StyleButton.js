import React from 'react';
import styled from 'styled-components';

const StyleButtonStyled = styled.span`
    cursor: pointer;
    border-radius: 4px;
    text-align: center;

    background-color: ${props => props.active ? '#2D9CDB' : '#ffffff'};
    color: ${props => props.active ? '#ffffff' : 'rgba(0, 0, 0, 0.6)'};
`;

export const StyleButton = ({ label, active, style, onToggle }) => {

    const handleToggle = (e) => {
        e.preventDefault();
        onToggle(style);
    };

    let className = 'RichEditor-styleButton';
    if (active) {
        className += ' RichEditor-activeButton';
    }

    return (
        <StyleButtonStyled active={active} onMouseDown={handleToggle}>
            {label}
        </StyleButtonStyled>
    );
}