import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommandBarControl, TableControl } from '../../../Controls'
import { columnsSectionsTable } from './setting';
import { IconButton } from '@fluentui/react';

import { restClient } from '../../../Services/restClient';
import { utils } from '../../../utils';
import { SectionForm } from './components/SectionForm';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert';

const SectionsStyled = styled.div`

`;

const Sections = () => {
    const [sections, setSections] = useState([]);
    const [filteredSections, setFilteredSections] = useState([]);
    const [selectedSection, setSelectedSection] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const translate = useTranslate('data');
    const alert = useAlert();

    useEffect(() => {
        fetchSections();
    }, []);

    const fetchSections = async () => {
        const response = await restClient.httpGet('sections', {
            queryInfo: {
                pageIndex: 0,
                pageSize: 10
            },
        });

        if (utils.evaluateArray(response.items)) {
            setSections(response.items);

            return;
        }

        setSections([]);
    }

    const onDissmis = () => {
        setIsOpen(false);
        setSelectedSection({});
    }

    const handleEditClick = row => {
        setSelectedSection(row);
        setIsOpen(true);
    }

    const handleDeleteClick = async row => {
        const response = await restClient.httpDelete('sections', {
            sectionId: row.sectionId
        })

        if (response.message === 'Success') {
            alert.success(translate('Record successfully deleted'))

            fetchSections();
        }
    }

    const handleSearch = data => {
        setFilteredSections(data.length > 0 ? data : null );
    }

    return (
        <SectionsStyled>
            <CommandBarControl items={[
                {
                    text: 'add',
                    iconName: 'add',
                    onClick: () => setIsOpen(true),
                }
            ]} />


            <TableControl
                data={sections}
                columns={columnsSectionsTable(handleEditClick, handleDeleteClick)}
                onSearch={handleSearch} />

            {isOpen && (
                <SectionForm
                    onRefresh={fetchSections}
                    selectedSection={selectedSection}
                    onDissmis={onDissmis}
                />
            )}
        </SectionsStyled>
    )
}


export default Sections;