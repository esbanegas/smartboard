import React from 'react';
import { TableRowStyled } from './style';

export const TableRow = ({ indexRow, item, rowConfig, children }) => {

    const handleRowClick = row => e => {
        if (!rowConfig) return;
        if (rowConfig.onClick) {
            rowConfig.onClick(row);
        }
    }

    return (
        <TableRowStyled
            key={`row-${indexRow}`}
            css={rowConfig ? rowConfig.css : null}
            onClick={handleRowClick(item)}>
            {children}
        </TableRowStyled>
    )
}