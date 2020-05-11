import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommandBarControl, TableControl } from '../../../Controls'
import { columnsGradesTable } from './setting';
import { IconButton } from '@fluentui/react';

import { restClient } from '../../../Services/restClient';
import { utils } from '../../../utils';
import { GradeForm } from './components/GradeForm';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert';

const GradesStyled = styled.div`

`;

const Grades = () => {
    const [degrees, setDegrees] = useState([]);
    const [filteredGrades, setFilteredGrades] = useState([]);
    const [selectedGrade, setSelectedGrade] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const translate = useTranslate('data');
    const alert = useAlert();

    useEffect(() => {
        fetchGrades();
    }, []);

    const fetchGrades = async () => {
        const response = await restClient.httpGet('grades', {
            queryInfo: {
                pageIndex: 0,
                pageSize: 10
            },
        });

        if (utils.evaluateArray(response.items)) {
            setDegrees(response.items);

            return;
        }

        setDegrees([]);
    }

    const onDissmis = () => {
        setIsOpen(false);
        setSelectedGrade({});
    }

    const handleEditClick = row => {
        setSelectedGrade(row);
        setIsOpen(true);
    }

    const handleDeleteClick = async row => {
        const response = await restClient.httpDelete('grades', {
            gradeId: row.gradeId
        })

        if (response.message === 'Success') {
            alert.success(translate('Record successfully deleted'))

            fetchGrades();
        }
    }

    const handleSearch = data => {
        setFilteredGrades(data.length > 0 ? data : null );
    }

    return (
        <GradesStyled>
            <CommandBarControl items={[
                {
                    text: 'add',
                    iconName: 'add',
                    onClick: () => setIsOpen(true),
                }
            ]} />


            <TableControl
                data={degrees}
                columns={columnsGradesTable(handleEditClick, handleDeleteClick)}
                onSearch={handleSearch} />

            {isOpen && (
                <GradeForm
                    onRefresh={fetchGrades}
                    selectedGrade={selectedGrade}
                    onDissmis={onDissmis}
                />
            )}
        </GradesStyled>
    )
}


export default Grades;