import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { SearchBox, Dropdown } from '@fluentui/react';
import { utils } from '../../../../utils';
import { useTranslate } from 'react-translate';

const HeadActionStyled = styled.div`
    display: grid;
    grid-template-columns: 300px 160px;
    grid-column-gap: 5px;
    height: 40px;
    overflow-y: auto;
`;

export const HeadActions = ({ columns, onSearch }) => {
    const [selectedFilter, setSelectedFilter] = useState({
        key: '',
        text: '',
    });

    const translate = useTranslate('data');

    const options = useMemo(() => {
        const opts = utils.evaluateArray(columns) ? columns.filter(f => f.fieldName).map(column => ({
            key: column.fieldName,
            text: translate(column.label)
        })) : [];

        return opts;
    }, [columns]);

    useEffect(() => {
        if (utils.evaluateArray(options) && !selectedFilter.key) {
            setSelectedFilter({
                key: options[0].key,
                text: options[0].text
            });
        }
    }, [options]);

    const handleOnSearch = value => {
        if (onSearch) {
            onSearch(selectedFilter.key, value);
        }
    }

    const handleClearClick = () => {
        if (onSearch) {
            onSearch('', '');
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
                onClear={handleClearClick}
            />

            <Dropdown
                selectedKey={selectedFilter.key}
                options={options}
                onChange={handleSelectFilterChange}
            />

        </HeadActionStyled>
    )
}