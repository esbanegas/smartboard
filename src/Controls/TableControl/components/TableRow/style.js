import styled, { css } from 'styled-components';
import { rgba } from 'polished';

export const TableRowStyled = styled.tr`
    border-bottom: .1px solid ${rgba(151, 151, 151, 50)};
    height: auto;
    cursor: pointer;

    &: hover {
        background-color: #d8d8d852;
    }

    ${props => props.css && css(...props.css)}
`;