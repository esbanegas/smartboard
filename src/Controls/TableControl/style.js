import styled from 'styled-components';

export const TableMain = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #edebe9;
    border-collapse: collapse;
    padding-top: 5px;
`;

export const TableContainerStyled = styled.div`
    height: 800px;;
    position: relative;
    overflow: auto;
`;

export const TableStyled = styled.table`
    width: 100%;
    border-collapse: collapse;

    tbody:before {
        /* content: "-"; */
        display: block;
        line-height: 0.6em;
        color: transparent;
    }
`;