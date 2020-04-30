import React from 'react';
import styled from 'styled-components';


const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

const Page = styled.div`
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 16.5px;
    font-weight: 700;
    margin: 0px 8px;
    border-radius: 6px;
    text-align: center;

    ${props => props.selected ? `
        color: #ffffff;
        background: red;
    `: `
        color: green;
        background: blue;
    `};
`;

const TablePagination = ({ currentPage, totalPages, basePageLink }) => {

    if(totalPages <= 1){
        return null;
    }

    const elements = [];

    for (let index = 0; index < totalPages; index++) {
        elements.push(
            <Page
                key={index}
                selected={index === currentPage}>
                {
                    index + 1
                }
            </Page>)
    }

    return (
        <Pagination>
            {elements}
        </Pagination>
    )
}


export default TablePagination;