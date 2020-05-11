import React, { useState } from 'react';
import styled from 'styled-components';
import { PanelControl } from '../../../../Controls';
import { utils } from '../../../../utils';
import { TextField, Dropdown } from '@fluentui/react';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert'
import { restClient } from '../../../../Services/restClient';

const TeacherFormStyled = styled.div``;

export const TeacherForm = ({ selectedTeacher, onDissmis, onRefresh }) => {
    const [teacher, setTeacher] = useState(selectedTeacher);
    const [isEditing] = useState(utils.evaluateObject(selectedTeacher) ? true : false);

    const translate = useTranslate('data');
    const alert = useAlert();

    const handleFieldChange = prop => event => {
        setTeacher({ ...teacher, [prop]: event.target.value });
    }

    const handleOptionChange = prop => (event, option) => {
        setTeacher({ ...teacher, [prop]: option.key });
    }

    const handleSaveClick = async () => {
        const request = {
            ...teacher,
            status: teacher.status === 'active' ? true : false,
            instituteId: 1,
            // teacherIdentity: parseInt(teacher.teacherIdentity),
        }

        const response = await restClient.httpPost('teachers', request);

        if (response.message === 'Success') {
            alert.success(translate('msgDataSavedCorrectly'));

            onRefresh();
        }
    }

    return (
        <PanelControl
            isOpen
            title={isEditing ? 'editTeacher' : 'addTeacher'}
            onDismiss={onDissmis}
            commands={[
                {
                    text: 'save',
                    iconName: "save",
                    onClick: handleSaveClick
                }
            ]}
        >
            <TeacherFormStyled>
                <TextField
                    label={translate('firstName')}
                    value={teacher.firstName}
                    onChange={handleFieldChange('firstName')} />

                <TextField
                    label={translate('lastName')}
                    value={teacher.lastName}
                    onChange={handleFieldChange('lastName')} />

                <TextField
                    label={translate('teacherIdentity')}
                    value={teacher.teacherIdentity}
                    onChange={handleFieldChange('teacherIdentity')} />

                <TextField
                    label={translate('email')}
                    value={teacher.email}
                    onChange={handleFieldChange('email')} />

                <TextField
                    label={translate('address')}
                    value={teacher.address}
                    onChange={handleFieldChange('address')} />

                <TextField
                    label={translate('phone')}
                    value={teacher.phone}
                    onChange={handleFieldChange('phone')} />

                <Dropdown
                    label={translate('status')}
                    selectedKey={teacher.status || ''}
                    options={[
                        {
                            key: 'active',
                            text: translate('active')
                        },
                        {
                            key: 'inactive',
                            text: translate('inactive')
                        }
                    ]}
                    onChange={handleOptionChange('status')}
                />
            </TeacherFormStyled>
        </PanelControl>
    )
}