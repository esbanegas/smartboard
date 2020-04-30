import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SearchBox, Dropdown } from '@fluentui/react';
import { utils } from '../../../../utils';

const HeadActionStyled = styled.div`
    display: grid;
    grid-template-columns: 300px 160px;
    grid-column-gap: 5px;
    height: 40px;
`;

export const HeadActions = ({ columns, onSearch }) => {
    const [selectedFilter, setSelectedFilter] = useState({
        key: '',
        text: '',
    });

    useEffect(() => {
        if (utils.evaluateArray(columns)) {
            setSelectedFilter({
                key: columns[0].fieldName,
                text: columns[0].label,
            });
        }
    }, [columns]);

    const handleOnSearch = value => {
        if (onSearch) {
            onSearch(value);
        }
    }

    const handleSelectFilterChange = (event, option) => {
        setSelectedFilter(option);
    }

    return (
        <HeadActionStyled>
            <SearchBox
                iconProps={{ iconName: 'Filter' }}
                placeholder={`Search ${selectedFilter.text}`}
                onSearch={handleOnSearch}
                onClear={handleOnSearch}
            />

            <Dropdown
                selectedKey={selectedFilter.key}
                options={utils.evaluateArray(columns) ? columns.map(column => ({
                    key: column.fieldName,
                    text: column.label
                })) : []}
                onChange={handleSelectFilterChange}
            />

        </HeadActionStyled>
    )
}