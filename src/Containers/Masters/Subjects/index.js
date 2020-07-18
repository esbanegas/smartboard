import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommandBarControl, TableControl } from '../../../Controls'
import { columnsSubjectTable } from './setting';
import { IconButton } from '@fluentui/react';

import { restClient } from '../../../Services/restClient';
import { utils } from '../../../utils';
import { SubjectForm } from './components/SubjectForm';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert';

const SubjectsStyled = styled.div`

`;

const Subjects = () => {
    const [subjects, setSubjects] = useState([
        {
            subjectId: 1,
            title: 'Matematicas',
            description: 'Un mundo de numeros',
            status: 'Active'
        }
    ]);
    const [filteredSubjects, setFilteredSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const translate = useTranslate('data');
    const alert = useAlert();

    useEffect(() => {
        // fetchSubjects();
    }, []);

    const fetchSubjects = async () => {
        const response = await restClient.httpGet('subjects', {
            queryInfo: {
                pageIndex: 0,
                pageSize: 10
            },
        });

        if (utils.evaluateArray(response.items)) {
            setSubjects(response.items);

            return;
        }

        setSubjects([]);
    }

    const onDissmis = () => {
        setIsOpen(false);
        setSelectedSubject({});
    }

    const handleEditClick = row => {
        setSelectedSubject(row);
        setIsOpen(true);
    }

    const handleDeleteClick = async row => {
        const response = await restClient.httpDelete('subjects', {
            subjectId: row.subjectId
        })

        if (response.message === 'Success') {
            alert.success(translate('Record successfully deleted'))

            fetchSubjects();
        }
    }

    const handleSearch = data => {
        setFilteredSubjects(data.length > 0 ? data : null);
    }

    return (
        <SubjectsStyled>
            <CommandBarControl items={[
                {
                    text: 'add',
                    iconName: 'add',
                    onClick: () => setIsOpen(true),
                }
            ]} />


            <TableControl
                data={subjects}
                columns={columnsSubjectTable(handleEditClick, handleDeleteClick)}
                onSearch={handleSearch} />

            {isOpen && (
                <SubjectForm
                    onRefresh={fetchSubjects}
                    selectedSubject={selectedSubject}
                    onDissmis={onDissmis}
                />
            )}
        </SubjectsStyled>
    )
}


export default Subjects;