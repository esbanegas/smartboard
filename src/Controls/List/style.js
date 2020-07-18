import styled from 'styled-components';

const ListStyled = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    /* border: 0.04px solid rgba(0, 0, 0, 0.1); */
    overflow: auto;
`;

const ListItemStyled = styled.li`
    padding: 5px;
    cursor: pointer;

    :hover{
        background-color: rgba(0, 0, 0, 0.04);
    }
`;

export const ListStyles = {
    ListStyled,
    ListItemStyled
}