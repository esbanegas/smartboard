import React, { useState } from 'react';
import styled from 'styled-components';
import { PanelControl } from '../../../../Controls';
import { utils } from '../../../../utils';
import { TextField, Dropdown } from '@fluentui/react';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert'
import { restClient } from '../../../../Services/restClient';

const SubjectFormStyled = styled.div``;

export const SubjectForm = ({ selectedSubject, onDissmis, onRefresh }) => {
    const [subject, setSubject] = useState(selectedSubject);
    const [isEditing] = useState(utils.evaluateObject(selectedSubject) ? true : false);

    const translate = useTranslate('data');
    const alert = useAlert();

    const handleFieldChange = prop => event => {
        setSubject({ ...subject, [prop]: event.target.value });
    }

    const handleOptionChange = prop => (event, option) => {
        setSubject({ ...subject, [prop]: option.key });
    }

    const handleSaveClick = async () => {
        const request = {
            ...subject,
            status: subject.status === 'active' ? true : false
        }

        const response = await restClient.httpPost('subjects', request);

        if (response.message === 'Success') {
            alert.success(translate('msgDataSavedCorrectly'));

            onRefresh();
        }
    }

    return (
        <PanelControl
            isOpen
            title={isEditing ? 'editSubject' : 'addSubject'}
            onDismiss={onDissmis}
            commands={[
                {
                    text: 'save',
                    iconName: "save",
                    onClick: handleSaveClick
                }
            ]}
        >
            <SubjectFormStyled>
                <TextField
                    label={translate('title')}
                    value={subject.title}
                    onChange={handleFieldChange('title')} />

                <TextField
                    label={translate('description')}
                    value={subject.description}
                    onChange={handleFieldChange('description')} />

                <Dropdown
                    label={translate('status')}
                    selectedKey={subject.status || ''}
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
            </SubjectFormStyled>
        </PanelControl>
    )
}