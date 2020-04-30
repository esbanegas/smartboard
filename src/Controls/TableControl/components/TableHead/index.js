import React, { useMemo } from 'react';
import { TableHeadStyled } from './style';

export const TableHead = ({ columns, textColor, backgroundColor }) => {

    const headers = useMemo(() => {
        return columns.map(column => (
            <TableHeadStyled
                key={column.fieldName}
                backgroundColor={backgroundColor}
                textColor={textColor}
                align={column.align}
                width={column.width}
                hideOnDesktop={column.hideOnDesktop}
                hideOnTablet={column.hideOnTablet}
                hideOnPhone={column.hideOnPhone}
                css={column.cssHeader}>
                {
                    column.onRenderHeader ? column.onRenderHeader() : column.label
                }
            </TableHeadStyled>))
    }, [columns]);

    return (
        <thead>
            <tr> {headers}</tr>
        </thead>
    )
}