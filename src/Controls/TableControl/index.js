import React, { useState, useMemo, Suspense } from 'react';

import PropTypes from 'prop-types';
import { TableHead } from './components/TableHead';
import { TableRow } from './components/TableRow';
import { TableCell } from './components/TableCell';
import { TableMain, TableStyled, TableContainerStyled } from './style';
import { HeadActions } from './components/HeadActions';
import { utils } from '../../utils';



// const headerColor = 'black';
const textColor = '#ffffff';
const backgroundColor = '#0078d4';

const TableControl = ({ columns, data, onSearch, rowConfig, currentPage, totalPages, basePageLink }) => {
    const [filteredData, setFilteredData] = useState(null);

    const getRows = items => {
        return items.map((item, indexRow) => (
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
    }

    const rows = useMemo(() => {
        if (!utils.evaluateArray(data)) {
            return null;
        }

        return getRows(data);
    }, [data]);

    const filteredRows = useMemo(() => {
        if (filteredData === null) {
            return null;
        }

        return getRows(filteredData);
    }, [filteredData]);

    const handleSearch = (prop, value) => {
        if (!value && onSearch) {
            onSearch([]);
            setFilteredData(null);
            return;
        }

        if(!value){
            setFilteredData(null);
        }

        const filteredResult = data.filter(item => {
            if (!Number.isInteger(item[prop])) {
                return item[prop].toUpperCase().includes(value.toUpperCase());
            }

            return false;
        });

        setFilteredData(filteredResult);

        if (onSearch) {
            onSearch(filteredResult);
        }
    }

    return (
        <TableMain>
            <HeadActions columns={columns} onSearch={handleSearch} />
            <TableContainerStyled>
                <TableStyled>
                    <TableHead
                        columns={columns}
                        textColor={textColor}
                        backgroundColor={backgroundColor} />

                    <tbody>
                        {
                            filteredData === null ? rows : filteredRows
                        }
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
            fieldName: PropTypes.string,
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