import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CommandBar } from '@fluentui/react';
import { utils } from '../../utils';

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

export const CommandBarControl = ({ items }) => {

    const commandItems = items.map((item, index) => {
        const { iconName, subMenu, split } = item;

        let commandItem = {
            key: `${item.text}-${index}`,
            text: item.text,
            ariaLabel: item.text,
            disabled: item.disabled || null,
            onClick: item.onClick
        };

        if (split) {
            commandItem = {
                ...commandItem,
                split: true,
            }
        }

        if (iconName) {
            commandItem = {
                ...commandItem,
                iconProps: { iconName }
            }
        }

        if (utils.evaluateArray(subMenu)) {
            commandItem = {
                ...commandItem,
                subMenuProps: item.subMenu.map((subItem, subMenuIndex) => ({
                    key: `item.${item.text}-submenu-${subItem.text}-${subMenuIndex}`,
                    text: subItem.text,
                    iconProps: { iconName: subItem.iconName || null },
                    onClick: item.onClick
                })),
            }
        }

        return commandItem;
    });

    return (
        <CommandBarControlStyled>
            <CommandBar
                className="command-bar"
                items={commandItems}
            />
        </CommandBarControlStyled>
    )
}

CommandBarControl.propTypes = {
    items: PropTypes.array,
}