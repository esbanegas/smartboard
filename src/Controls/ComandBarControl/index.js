import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CommandBar } from '@fluentui/react';

import { materializeLeftCommnads, materializeRigthCommnads } from './setting';
import { useTranslate } from 'react-translate';

const CommandBarControlStyled = styled.div`
    .command-bar {
        div {
            background: #faf9f8;

            button {
                background: #faf9f8;

                :hover {
                    background: #f3f2f1;
                }

                span {
                    color: #0078d4;
                }
            }
        }
    }
`;

export const CommandBarControl = ({ items, rightCommands }) => {
    const translate = useTranslate('data');

    const leftCommands = useMemo(() => materializeLeftCommnads(items, translate), [items]);

    const farItems = useMemo(() => materializeRigthCommnads(rightCommands, translate), [rightCommands]);


    return (
        <CommandBarControlStyled>
            <CommandBar
                className="command-bar"
                items={leftCommands}
                farItems={farItems}
            />
        </CommandBarControlStyled>
    )
}

CommandBarControl.propTypes = {
    items: PropTypes.array,
}