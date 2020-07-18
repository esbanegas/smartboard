import React from 'react';
import { TableCellStyled } from './style';
import { ActionsCell } from '../Actions';

export const TableCell = ({ indexRow, indexColumn, item, column }) => {

    return (
        <TableCellStyled
            key={`row[${indexRow}]-column[${indexColumn}]`}
            width={column.width}
            css={column.css}
            hideOnDesktop={column.hideOnDesktop}
            hideOnTablet={column.hideOnTablet}
            hideOnPhone={column.hideOnPhone}>
            {
                column.onRenderCell ?
                    column.onRenderCell(item)
                    : (column.actions ?
                        (
                            <ActionsCell
                                item={item}
                                actions={column.actions} />
                        )
                        : item[column.fieldName])
            }
        </TableCellStyled>
    )
}