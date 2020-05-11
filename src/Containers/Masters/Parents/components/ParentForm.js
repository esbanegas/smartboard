import React, { useState } from 'react';
import styled from 'styled-components';
import { PanelControl } from '../../../../Controls';
import { utils } from '../../../../utils';
import { TextField, Dropdown } from '@fluentui/react';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert'
import { restClient } from '../../../../Services/restClient';

const ParentFormStyled = styled.div``;

export const ParentForm = ({ selectedParent, onDissmis, onRefresh }) => {
    const [parent, setParent] = useState(selectedParent);
    const [isEditing] = useState(utils.evaluateObject(selectedParent) ? true : false);

    const translate = useTranslate('data');
    const alert = useAlert();

    const handleFieldChange = prop => event => {
        setParent({ ...parent, [prop]: event.target.value });
    }

    const handleOptionChange = prop => (event, option) => {
        setParent({ ...parent, [prop]: option.key });
    }

    const handleSaveClick = async () => {
        const request = {
            ...parent,
            status: parent.status === 'active' ? true : false
        }

        const response = await restClient.httpPost('parents', request);

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
            <ParentFormStyled>
                <TextField
                    label={translate('firstName')}
                    value={parent.firstName}
                    onChange={handleFieldChange('firstName')} />

                <TextField
                    label={translate('lastName')}
                    value={parent.lastName}
                    onChange={handleFieldChange('lastName')} />

                <TextField
                    label={translate('identity')}
                    value={parent.parentIdentity}
                    onChange={handleFieldChange('parentIdentity')} />

                <TextField
                    label={translate('email')}
                    value={parent.email}
                    onChange={handleFieldChange('email')} />

                <TextField
                    label={translate('address')}
                    value={parent.address}
                    onChange={handleFieldChange('address')} />

                <TextField
                    label={translate('phone')}
                    value={parent.phone}
                    onChange={handleFieldChange('phone')} />

                <Dropdown
                    label={translate('status')}
                    selectedKey={parent.status || ''}
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
            </ParentFormStyled>
        </PanelControl>
    )
}