import React from 'react';
import { TableCellStyled } from './style';

export const TableCell = ({ indexRow, indexColumn, item, column }) => {

    return (
        <TableCellStyled
            key={`row[${indexRow}]-column[${indexColumn}]`}
            css={column.css}
            hideOnDesktop={column.hideOnDesktop}
            hideOnTablet={column.hideOnTablet}
            hideOnPhone={column.hideOnPhone}>
            {
                column.onRenderCell ?
                    column.onRenderCell(item) : item[column.fieldName]
            }
        </TableCellStyled>
    )
}