import React from 'react';
import styled from 'styled-components';
import { routes } from '../Routes';
import { Icon, Link, TooltipHost, DirectionalHint } from '@fluentui/react';
import { useTranslate } from 'react-translate';

const MenuStyled = styled.div`
    
`;

const MenuItemStyled = styled.div`
    padding: 5px;
    cursor: pointer;

    /* background-color: ${props => props.isSelected && '#0078d4'}; */

    a {
        text-decoration: none;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: ${prop => prop.isCollapsed ? 'center' : 'start'};

        span {
            display: ${prop => prop.isCollapsed ? 'none' : 'block'};
            padding-left: 10px;
            color: #605e5c;
            font-size: 14px;
        }

        :hover {
          text-decoration: none;
          text-decoration: none;
        }
    }

    :hover {
        background-color: #edebe9;

        /* i {
            color: #ffffff;
        } */
    }
`;

const Menu = ({ isCollapsed }) => {
    const translate = useTranslate('data');

    return (
        <MenuStyled>
            {
                routes.map(route =>
                    <MenuItemStyled
                        key={route.name}
                        isSelected={route.name}
                        isCollapsed={isCollapsed}>
                        <Link href={route.path}>
                            <TooltipHost
                                content={translate(route.title)}
                                calloutProps={{ directionalHint: DirectionalHint.rightCenter}}>
                                <Icon style={{
                                    fontSize: isCollapsed ? 28 : 22,
                                }}
                                    iconName={route.iconName} />
                            </TooltipHost>
                            <span>{translate(route.title)}</span>
                        </Link>
                    </MenuItemStyled>
                )
            }
        </MenuStyled>
    )
}


export default Menu;