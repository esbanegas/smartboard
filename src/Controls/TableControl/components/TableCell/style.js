import styled, { css } from 'styled-components';
import { screenSmallerThan } from "../../../../Style/utils";

export const TableCellStyled = styled.td`
    font-size: 17px;
    border: 1px solid #f3f2f1;
    padding-left: 5px;
    padding-right: 5px;

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