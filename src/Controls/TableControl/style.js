import styled from 'styled-components';

export const TableMain = styled.div`
    display: grid;
    grid-template-rows: 40px calc(100% - 40px);
    height: 100%;
    /* border: 0.05px solid #edebe9; */
    border-collapse: collapse;
`;

export const TableContainerStyled = styled.div`
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