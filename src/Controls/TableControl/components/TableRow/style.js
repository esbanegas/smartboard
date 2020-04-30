import styled, { css } from 'styled-components';
import { rgba } from 'polished';

export const TableRowStyled = styled.tr`
    border-bottom: 2px solid ${rgba(151, 151, 151, 50)};
    height: 50px;
    cursor: pointer;

    &: hover {
        background-color: #d8d8d852;
    }

    ${props => props.css && css(...props.css)}
`;