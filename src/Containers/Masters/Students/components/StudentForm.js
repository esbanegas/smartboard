import React, { useState } from 'react';
import styled from 'styled-components';
import { PanelControl } from '../../../../Controls';
import { utils } from '../../../../utils';
import { TextField, Dropdown } from '@fluentui/react';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert'
import { restClient } from '../../../../Services/restClient';

const StudentFormStyled = styled.div``;

export const StudentForm = ({ studentSubject, onDissmis, onRefresh }) => {
    const [student, setStudent] = useState(studentSubject);
    const [isEditing] = useState(utils.evaluateObject(studentSubject) ? true : false);

    const translate = useTranslate('data');
    const alert = useAlert();

    const handleFieldChange = prop => event => {
        setStudent({ ...student, [prop]: event.target.value });
    }

    const handleOptionChange = prop => (event, option) => {
        setStudent({ ...student, [prop]: option.key });
    }

    const handleSaveClick = async () => {
        const request = {
            ...student,
            status: student.status === 'active' ? true : false
        }

        const response = await restClient.httpPost('students', request);

        if (response.message === 'Success') {
            alert.success(translate('msgDataSavedCorrectly'));

            onRefresh();
        }
    }

    return (
        <PanelControl
            isOpen
            title={isEditing ? 'editStudent' : 'addStudent'}
            onDismiss={onDissmis}
            commands={[
                {
                    text: 'save',
                    iconName: "save",
                    onClick: handleSaveClick
                }
            ]}
        >
            <StudentFormStyled>
                <TextField
                    label={translate('firstName')}
                    value={student.firstName}
                    onChange={handleFieldChange('firstName')} />

                <TextField
                    label={translate('lastName')}
                    value={student.lastName}
                    onChange={handleFieldChange('lastName')} />

                <TextField
                    label={translate('studentIdentity')}
                    value={student.studentIdentity}
                    onChange={handleFieldChange('studentIdentity')} />

                <TextField
                    label={translate('parent')}
                    value={student.parentId}
                    onChange={handleFieldChange('parentId')} />

                <TextField
                    label={translate('email')}
                    value={student.email}
                    onChange={handleFieldChange('email')} />

                <TextField
                    label={translate('address')}
                    value={student.address}
                    onChange={handleFieldChange('address')} />

                <TextField
                    label={translate('phone')}
                    value={student.phone}
                    onChange={handleFieldChange('phone')} />

                <Dropdown
                    label={translate('status')}
                    selectedKey={student.status || ''}
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
            </StudentFormStyled>
        </PanelControl>
    )
}