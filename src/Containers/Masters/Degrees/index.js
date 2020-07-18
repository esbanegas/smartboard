import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommandBarControl, TableControl, CustomButton, ListControl, DialogControl } from '../../../Controls';
import { columnsGradesTable } from './setting';
import { IconButton} from '@fluentui/react';

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
    const [hideDialog, setHideDialog] = useState(true);

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
        setFilteredGrades(data.length > 0 ? data : null);
    }

    const handleAddClassToGradeId = row => () => {
        setHideDialog(false);
    }

    const addSubjectRender = row => {

        return (
            <CustomButton
                size={7}
                iconName="Add"
                onClick={handleAddClassToGradeId(row)} />
        )
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


            <div>
                <TableControl
                    data={degrees}
                    columns={columnsGradesTable(handleEditClick, handleDeleteClick, addSubjectRender)}
                    onSearch={handleSearch} />

                {/* <TableControl
                    data={degrees}
                    columns={columnsGradesTable(handleEditClick, handleDeleteClick, addSubjectRender)}
                    onSearch={handleSearch} /> */}

                {/* <ListControl
                    fieldKey="name"
                    items={[
                        {
                            name: 'Erlin'
                        },
                        {
                            name: 'Samir'
                        },
                        {
                            name: 'Banegas'
                        },
                        {
                            name: 'Hernández'
                        },
                        {
                            name: 'Violet'
                        }
                    ]}
                    onRenderItem={item => <strong>{item.name}</strong>} /> */}
            </div>

            {isOpen && (
                <GradeForm
                    onRefresh={fetchGrades}
                    selectedGrade={selectedGrade}
                    onDissmis={onDissmis}
                />
            )}

            <DialogControl
                hidden={hideDialog}
                onDismiss={() => setHideDialog(true)}
                title="Erlin"
            >
                <strong>Erlin Samir</strong>
            </DialogControl>
        </GradesStyled >
    )
}


export default Grades;