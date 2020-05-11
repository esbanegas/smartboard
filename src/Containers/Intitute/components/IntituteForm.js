import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert'
import { TextField } from '@fluentui/react';
import { restClient } from '../../../Services/restClient';
import { PanelControl } from '../../../Controls';
import { utils } from '../../../utils';

const InstituteFormStyled = styled.div``;

const InstituteForm = ({ isOpen, onDismiss, selectedInstitute }) => {
    const [institute, setInstitute] = useState(selectedInstitute);
    const [isEditing] = useState(utils.evaluateObject(selectedInstitute) ? true : false);

    const translate = useTranslate('data');
    const alert = useAlert();

    const handleFieldChange = prop => event => {
        setInstitute({ ...institute, [prop]: event.target.value });
    }

    const handleSaveClick = async () => {
        if (!institute.name) {
            alert.info('Instituto vacio');
            return;
        }

        if (isEditing) {
            const response = await restClient.httpPost('institutes', institute);

            if (response.message === 'Success') {
                alert.success(translate('msgDataSavedCorrectly'))
            }

            return;
        }

        const response = await restClient.httpPost('institutes', institute);

        if (response.message === 'Success') {
            alert.success(translate('msgDataSavedCorrectly'))
        }

        return;
    }



    return (
        <PanelControl
            title={isEditing ? 'editInstitute' : 'addInstitute'}
            isOpen = { isOpen }
            onDismiss={onDismiss}
            commands={[{
                text: 'save',
                iconName: 'Add',
                onClick: handleSaveClick
            }]}>
            <InstituteFormStyled>
                <TextField
                    label={translate('nameInstitute')}
                    value={isEditing ? institute.name : ''}
                    onChange={handleFieldChange('name')} />

                <TextField
                    label={translate('slogan')}
                    value={isEditing ? institute.slogan : ''}
                    onChange={handleFieldChange('slogan')} />

                <TextField
                    label={translate('description')}
                    value={isEditing ? institute.description : ''}
                    onChange={handleFieldChange('description')} />
            </InstituteFormStyled>
        </PanelControl>
    )
}


export default InstituteForm;