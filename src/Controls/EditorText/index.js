import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Button } from '@fluentui/react';
import { BlockStyleControls } from './BlockStyleControls';
import { InlineStyleControls } from './InlineStyleControls';

const EditorTextStyled = styled.div`
    position: relative;
    height: ${props => props.height ? `${props.height}px` : '100%'};
    border: 0.5px solid rgba(0, 0, 0, 0.1);

    .container-controls {
        background-color: rgba(0, 0, 0, 0.05);
        padding: 5px;
    }

    .container-editor {
        position: absolute;
        top: 80px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        overflow: auto;
    }
`;

const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

const EditorTextControl = ({ height }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const editorRef = useRef(null);

    const onBoldClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(
            editorState,
            'BOLD'
        ))
    }

    const toggleBlockType = blockType => {
        setEditorState(
            RichUtils.toggleBlockType(
                editorState,
                blockType
            ));
    };

    const toggleInlineStyle = inlineStyle => {
        setEditorState(
            RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle
            )
        );
    }

    const handleKeyCommand = command => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return true;
        }
        return false;
    }

    function getBlockStyle(block) {
        switch (block.getType()) {
            case 'blockquote': return 'RichEditor-blockquote';
            default: return null;
        }
    }

    return (
        <EditorTextStyled height={height}>
            <div className="container-controls">
                <BlockStyleControls
                    editorState={editorState}
                    onToggle={toggleBlockType} />

                <InlineStyleControls
                    editorState={editorState}
                    onToggle={toggleInlineStyle} />
            </div>

            <div className="container-editor" rol="presentation" onClick={() => editorRef.current.focus()}>
                <Editor
                    ref={editorRef}
                    blockStyleFn={getBlockStyle}
                    editorState={editorState}
                    customStyleMap={styleMap}
                    onChange={editorState => setEditorState(editorState)}
                    handleKeyCommand={handleKeyCommand}
                    placeholder="Describa algo..."
                    spellCheck />
            </div>
        </EditorTextStyled>
    )
}


export default EditorTextControl;