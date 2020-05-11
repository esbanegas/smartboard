import React, { useState } from 'react';
import styled from 'styled-components';
import { PanelControl } from '../../../../Controls';
import { utils } from '../../../../utils';
import { TextField, Dropdown } from '@fluentui/react';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert'
import { restClient } from '../../../../Services/restClient';

const GradeFormStyled = styled.div``;

export const GradeForm = ({ selectedGrade, onDissmis, onRefresh }) => {
    const [grade, setGrade] = useState(selectedGrade);
    const [isEditing] = useState(utils.evaluateObject(selectedGrade) ? true : false);

    const translate = useTranslate('data');
    const alert = useAlert();

    const handleFieldChange = prop => event => {
        setGrade({ ...grade, [prop]: event.target.value });
    }

    const handleOptionChange = prop => (event, option) => {
        setGrade({ ...grade, [prop]: option.key });
    }

    const handleSaveClick = async () => {
        const request = {
            ...grade,
            status: grade.status === 'active' ? true : false
        }

        const response = await restClient.httpPost('grades', request);

        if (response.message === 'Success') {
            alert.success(translate('msgDataSavedCorrectly'));

            onRefresh();
        }
    }

    return (
        <PanelControl
            isOpen
            title={isEditing ? 'editGrade' : 'addGrade'}
            onDismiss={onDissmis}
            commands={[
                {
                    text: 'save',
                    iconName: "save",
                    onClick: handleSaveClick
                }
            ]}
        >
            <GradeFormStyled>
                <TextField
                    label={translate('grade')}
                    value={grade.gradeId}
                    onChange={handleFieldChange('gradeId')} />

                <TextField
                    label={translate('description')}
                    value={grade.description}
                    onChange={handleFieldChange('description')} />

                <Dropdown
                    label={translate('status')}
                    selectedKey={grade.status || ''}
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
            </GradeFormStyled>
        </PanelControl>
    )
}