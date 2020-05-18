import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CustomButton } from '../../..';

const ActionsCellStyled = styled.div`
    display: flex;
    height: 40px;
`;

const ActionItemStyled = styled.div`
    display: grid;
    margin-left: ${props => props.marginLeft && `${props.marginLeft}px`};
    /* height: ${props => `${props.size * 3}px`}; */
`;

export const ActionsCell = ({ actions, item }) => {

    const handleActionClick = (action) => () => {
        if(action.onClick){
            action.onClick(item)
        }
    }

    const renderAction = action => {

        switch (action.type) {
            case 'add':
                return (
                    <ActionItemStyled marginLeft={action.marginLeft || 5}>
                        <CustomButton
                            iconName={action.iconName || 'Add'}
                            onClick={handleActionClick(action)}
                            size={action.size || 10} />
                    </ActionItemStyled>
                )

            case 'edit':
                return (
                    <ActionItemStyled size={action.size || 5} marginLeft={action.marginLeft || 5}>
                        <CustomButton
                            iconName={action.iconName || 'Edit'}
                            onClick={handleActionClick(action)}
                            size={action.size || 5}
                            colorHover={action.colorHover || '#ffffff'} />
                    </ActionItemStyled>
                )

            case 'delete':
                return (
                    <ActionItemStyled marginLeft={action.marginLeft || 5}>
                        <CustomButton
                            iconName={action.iconName || 'Delete'}
                            onClick={handleActionClick(action)}
                            size={action.size || 5}
                            colorHover={action.colorHover || 'red'} />
                    </ActionItemStyled>
                )

            default:
                return null;
        }
    }

    return (
        <ActionsCellStyled>
            {
                actions.map((action, index) => (
                    renderAction(action)
                ))
            }
        </ActionsCellStyled>
    )
}

ActionsCell.propTypes = {
    actions: PropTypes.oneOf(
        PropTypes.shape({
            type: PropTypes.oneOfType(['add', 'edit', 'delete']),
            onClick: PropTypes.func.isRequired,
        }),
    )
}