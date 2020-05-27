import styled, { css } from 'styled-components';
import { screenSmallerThan } from '../../../../Style/utils';

export const TableHeadStyled = styled.th`
    position: sticky;
    top: 0;
    color: ${props => props.textColor};
    background-color: #0078d4;
    font-size: 14px;
    font-weight: 700;
    text-align: ${props => props.align ? props.align : 'left'};
    width: ${props => props.width && `${props.width}px`};
    height: 30px;
    border: 1px solid #f3f2f1;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
    z-index: 1;

    ${screenSmallerThan.desktop`
        display: ${props => props.hideOnDesktop && "none"};
    `};

    ${screenSmallerThan.tablet`
        display: ${props => props.hideOnTablet && "none"};
    `};

    ${screenSmallerThan.phone`
        display: ${props => props.hideOnPhone && "none"};
    `};

    ${props => props.css && css(...props.css)}
`;