import React from 'react';
import styled from 'styled-components';
import { StyleButton } from './StyleButton';

const InlineStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-template-rows: 26px;
    grid-column-gap: 5px;
    padding-top: 5px;
`;

var INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
    { label: 'Monospace', style: 'CODE' },
];

export const InlineStyleControls = ({ editorState, onToggle }) => {
    var currentStyle = editorState.getCurrentInlineStyle();
    return (
        <InlineStyled>
            {INLINE_STYLES.map(type =>
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={onToggle}
                    style={type.style}
                />
            )}
        </InlineStyled>
    );
};