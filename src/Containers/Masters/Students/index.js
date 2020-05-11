import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommandBarControl, TableControl, ReadExcelFile } from '../../../Controls'
import { columnsStudentsTable } from './setting';
import { IconButton } from '@fluentui/react';

import { restClient } from '../../../Services/restClient';
import { utils } from '../../../utils';
import { StudentForm } from './components/StudentForm';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert';

const StudentsStyled = styled.div`

`;

const Students = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const translate = useTranslate('data');
    const alert = useAlert();

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const response = await restClient.httpGet('students', {
            queryInfo: {
                pageIndex: 0,
                pageSize: 10
            },
        });

        if (utils.evaluateArray(response.items)) {
            setStudents(response.items);

            return;
        }

        setStudents([]);
    }

    const onDissmis = () => {
        setIsOpen(false);
        setSelectedStudent({});
    }

    const handleEditClick = row => {
        setSelectedStudent(row);
        setIsOpen(true);
    }

    const handleDeleteClick = async row => {
        const response = await restClient.httpDelete('students', {
            studendId: row.studendId,
            studentIdentity: row.studentIdentity
        })

        if (response.message === 'Success') {
            alert.success(translate('Record successfully deleted'))

            fetchStudents();
        }
    }

    const handleSearch = data => {
        setFilteredStudents(data.length > 0 ? data : null);
    }

    const handleGetData = data => {
    }

    return (
        <StudentsStyled>
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
                data={students}
                columns={columnsStudentsTable(handleEditClick, handleDeleteClick)}
                onSearch={handleSearch} />

            {isOpen && (
                <StudentForm
                    onRefresh={fetchStudents}
                    studentSubject={selectedStudent}
                    onDissmis={onDissmis}
                />
            )}
        </StudentsStyled>
    )
}


export default Students;