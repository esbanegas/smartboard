import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommandBarControl, TableControl, ReadExcelFile } from '../../../Controls'
import { columnsTeachersTable } from './setting';
import { IconButton } from '@fluentui/react';

import { restClient } from '../../../Services/restClient';
import { utils } from '../../../utils';
import { TeacherForm } from './components/TeacherForm';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert';

const TeachersStyled = styled.div`

`;

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [filteredTeachers, setFilteredTeachers] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const translate = useTranslate('data');
    const alert = useAlert();

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        const response = await restClient.httpGet('teachers', {
            queryInfo: {
                pageIndex: 0,
                pageSize: 10
            },
        });

        if (utils.evaluateArray(response.items)) {
            setTeachers(response.items);

            return;
        }

        setTeachers([]);
    }

    const onDissmis = () => {
        setIsOpen(false);
        setSelectedTeacher({});
    }

    const handleEditClick = row => {
        setSelectedTeacher(row);
        setIsOpen(true);
    }

    const handleDeleteClick = async row => {
        const response = await restClient.httpDelete('teachers', {
            teacherId: row.teacherId,
        })

        if (response.message === 'Success') {
            alert.success(translate('Record successfully deleted'))

            fetchTeachers();
        }
    }

    const handleSearch = data => {
        setFilteredTeachers(data.length > 0 ? data : null);
    }

    const handleGetData = data => {
    }

    return (
        <TeachersStyled>
            <CommandBarControl items={[
                {
                    text: 'add',
                    iconName: 'add',
                    onClick: () => setIsOpen(true),
                }
            ]} />

            <ReadExcelFile schema={
                {
                    'Identidad': {
                        prop: 'identity',
                        type: Number,
                    },

                    'Nombres': {
                        prop: 'names',
                        type: String,
                    },

                    'Apellidos': {
                        prop: 'lastName',
                        type: String,
                    },

                    'Correo Electronico': {
                        prop: 'email',
                        type: String,
                    },

                    'Direccion': {
                        prop: 'address',
                        type: String,
                    },

                    'Telefono': {
                        prop: 'phone',
                        type: Number,
                    },

                    'Estado': {
                        prop: 'status',
                        type: String,
                    },
                }}

                getData={handleGetData}
            />


            <TableControl
                data={teachers}
                columns={columnsTeachersTable(handleEditClick, handleDeleteClick)}
                onSearch={handleSearch} />

            {isOpen && (
                <TeacherForm
                    onRefresh={fetchTeachers}
                    selectedTeacher={selectedTeacher}
                    onDissmis={onDissmis}
                />
            )}
        </TeachersStyled>
    )
}


export default Teachers;