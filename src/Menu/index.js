import React from 'react';
import styled from 'styled-components';
import { routes } from '../Routes';
import { Icon, Link } from '@fluentui/react';

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

         i {
            font-size: ${prop => prop.isCollapsed ? '28px' : '22px'};
            color: #a19f9d;
        }

        span {
            display: ${prop => prop.isCollapsed ? 'none' : 'block'};
            padding-left: 10px;
            color: #605e5c;
        }
    }

    :hover {
        background-color: #edebe9;

        /* i {
            color: #ffffff;
        } */
    }
`;

const Menu = ({ isCollapsed}) => {

    return (
        <MenuStyled isCollapsed={isCollapsed} >
            {
                routes.map(route =>
                    <MenuItemStyled
                        key={route.name}
                        isSelected={route.name}>
                        <Link href={route.path}>
                            <Icon iconName={route.iconName} />
                            <span>{route.title}</span>
                        </Link>
                    </MenuItemStyled>
                )
            }
        </MenuStyled>
    )
}


export default Menu;