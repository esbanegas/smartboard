import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommandBarControl, EditorTextControl, TableControl, TabsControl } from '../../../Controls'
import { columnsSectionsTable } from './setting';
import { IconButton, TextField, Dropdown, DatePicker } from '@fluentui/react';

import { restClient } from '../../../Services/restClient';
import { utils } from '../../../utils';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert';
import { Tasks } from './components/Tasks';
import { CommonStudentsPerTeacher } from '../../Commons/StudentsPerTeacher';
import { TaskForm } from './components/TaskForm';

const MonthlyTasksStyled = styled.div`
    display: grid;
    grid-template-rows: 40px calc(100% - 40px);
`;

const MonthlyTasks = () => {
    const [sections, setSections] = useState([]);
    const [filteredSections, setFilteredSections] = useState([]);
    const [selectedSection, setSelectedSection] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const translate = useTranslate('data');
    const alert = useAlert();

    useEffect(() => {
        fetchMontlyTasks();
    }, []);

    const fetchMontlyTasks = async () => {
        const response = await restClient.httpGet('monthly-task', {
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
        const response = await restClient.httpDelete('monthly-task', {
            monthlyTaskId: row.monthlyTaskId
        })

        if (response.message === 'Success') {
            alert.success(translate('Record successfully deleted'))

            fetchMontlyTasks();
        }
    }

    const handleSearch = data => {
        setFilteredSections(data.length > 0 ? data : null);
    }

    const handleSendTaskClick = () => {

    }

    const handleIsOpenClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <MonthlyTasksStyled>
            <CommandBarControl items={[
                {
                    text: 'newTask',
                    iconName: 'OpenInNewTab',
                    onClick: handleIsOpenClick,
                },
                {
                    text: 'sendTask',
                    iconName: 'Send',
                    onClick: handleSendTaskClick,
                }
            ]} />

            <TabsControl tabs={[
                {
                    label: translate('tasks'),
                    iconName: 'TaskManager',
                    component: <Tasks />
                },
                {
                    label: translate('students'),
                    component: <CommonStudentsPerTeacher />,
                    iconName: 'Family'
                }
            ]} />


            {isOpen && <TaskForm isOpen={isOpen} onDissmis={handleIsOpenClick} />}

            {/* <EditorTextControl height={300} /> */}
        </MonthlyTasksStyled>
    )
}


export default MonthlyTasks;