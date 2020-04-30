import React, { useMemo, Suspense } from 'react';

import PropTypes from 'prop-types';
import { TableHead } from './components/TableHead';
import { TableRow } from './components/TableRow';
import { TableCell } from './components/TableCell';
import { TableMain, TableStyled, TableContainerStyled } from './style';
import { HeadActions } from './components/HeadActions';
import { utils } from '../../utils';



// const headerColor = 'black';
const textColor = '#ffffff';
const backgroundColor = '#004578';

const TableControl = ({ columns, data, rowConfig, currentPage, totalPages, basePageLink }) => {

    // if (!utils.evaluateArray(columns)) {
    //     return null;
    // }

    // if (!utils.evaluateArray(data)) {
    //     return null;
    // }

    const rows = useMemo(() => {
        if (!utils.evaluateArray(data)) {
            return null;
        }

        return data.map((item, indexRow) => (
            <TableRow
                indexRow={indexRow}
                item={item}
                rowConfig={rowConfig}>
                {
                    columns.map((column, indexColumn) => (
                        <TableCell
                            indexRow={indexRow}
                            indexColumn={indexColumn}
                            item={item}
                            column={column}
                        />
                    ))
                }
            </TableRow>
        ));
    }, [data])

    return (
        <TableMain>
            <HeadActions columns={columns} />
            <TableContainerStyled>
                <TableStyled>
                    <TableHead
                        columns={columns}
                        textColor={textColor}
                        backgroundColor={backgroundColor} />

                    <tbody>
                        {rows}
                    </tbody>
                </TableStyled>
            </TableContainerStyled>

            {/* <TablePagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePageLink={basePageLink} /> */}
        </TableMain>
    )
}

TableControl.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            fieldName: PropTypes.string.isRequired,
            label: PropTypes.string,
            align: 'left' || 'center' || 'left',
            width: PropTypes.number,
            onRenderCell: PropTypes.func,
            css: PropTypes.string,
            cssHeader: PropTypes.string,
            hideOnDesktop: PropTypes.bool,
            hideOnTablet: PropTypes.bool,
            hideOnPhone: PropTypes.bool,
        })),
    data: PropTypes.array,
    rowConfig: PropTypes.shape({
        uniqueKey: PropTypes.string,
        css: PropTypes.string,
        onClick: PropTypes.func,
    }),
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    basePageLink: PropTypes.number,
}

export default TableControl;