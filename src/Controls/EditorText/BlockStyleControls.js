import React from 'react';
import styled from 'styled-components';
import { StyleButton } from './StyleButton';

const BlockStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 30px);
    grid-template-rows: 26px;
    grid-column-gap: 5px;
`;

const BLOCK_TYPES = [
    { label: 'H1', style: 'header-one' },
    { label: 'H2', style: 'header-two' },
    { label: 'H3', style: 'header-three' },
    { label: 'H4', style: 'header-four' },
    { label: 'H5', style: 'header-five' },
    { label: 'H6', style: 'header-six' },
    { label: 'BQ', style: 'blockquote' },
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
    { label: 'CB', style: 'code-block' },
];

export const BlockStyleControls = ({ editorState, onToggle }) => {
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <BlockStyled>
            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={onToggle}
                    style={type.style}
                />
            )}
        </BlockStyled>
    );
};