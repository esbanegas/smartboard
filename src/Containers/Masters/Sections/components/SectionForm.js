import React, { useState } from 'react';
import styled from 'styled-components';
import { PanelControl } from '../../../../Controls';
import { utils } from '../../../../utils';
import { TextField, Dropdown } from '@fluentui/react';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert'
import { restClient } from '../../../../Services/restClient';

const SectionFormStyled = styled.div``;

export const SectionForm = ({ selectedSection, onDissmis, onRefresh }) => {
    const [section, setSection] = useState(selectedSection);
    const [isEditing] = useState(utils.evaluateObject(selectedSection) ? true : false);

    const translate = useTranslate('data');
    const alert = useAlert();

    const handleFieldChange = prop => event => {
        setSection({ ...section, [prop]: event.target.value });
    }

    const handleOptionChange = prop => (event, option) => {
        setSection({ ...section, [prop]: option.key });
    }

    const handleSaveClick = async () => {
        const request = {
            ...section,
            status: section.status === 'active' ? true : false
        }

        const response = await restClient.httpPost('sections', request);

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
            <SectionFormStyled>
                <TextField
                    label={translate('name')}
                    value={section.name}
                    onChange={handleFieldChange('name')} />

                <TextField
                    label={translate('description')}
                    value={section.description}
                    onChange={handleFieldChange('description')} />

                <Dropdown
                    label={translate('status')}
                    selectedKey={section.status || ''}
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
            </SectionFormStyled>
        </PanelControl>
    )
}