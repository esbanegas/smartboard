import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PanelControl, TextControl, EditorTextControl } from '../../../../Controls';
import { utils } from '../../../../utils';
import { Dropdown, DatePicker } from '@fluentui/react';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert';

const TaskFormStyled = styled.div`
    .fields {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 5px;
    }

    .description {
        margin-top: 10px;
    }
`;

export const TaskForm = ({ isOpen, selectedTask, onDissmis }) => {
    const [task, setTask] = useState(selectedTask);

    const translate = useTranslate('data');
    const alert = useAlert();

    const handleSelectOptionChange = prop => (event, option) => {
        setTask({ ...task, [prop]: option.key });
    }

    const handleSaveTaskClick = () => {
        
    }

    const handleSaveAndSendTaskClick = () => {
        
    }

    return (
        <PanelControl
            title={utils.evaluateObject(selectedTask) ? 'editTask' : 'addTask'}
            isOpen={isOpen}
            customWidth="900px"
            onDismiss={onDissmis}
            commands={[
                {
                    text: 'save',
                    iconName: 'Save',
                    onClick: handleSaveTaskClick
                },
                {
                    text: 'saveAndSend',
                    iconName: 'send',
                    onClick: handleSaveAndSendTaskClick
                }
            ]}>
            <TaskFormStyled>
                <div className="fields">
                    <Dropdown
                        label={translate('grade')}
                        options={[{ key: 'key', value: 'value' }]}
                        selectedKey={task ? task.grade : ''}
                        onChange={handleSelectOptionChange('grade')}
                    />

                    <Dropdown
                        label={translate('class')}
                        options={[{ key: 'key', value: 'value' }]}
                        selectedKey={task ? task.classId : ''}
                        onChange={handleSelectOptionChange('classId')}
                    />

                    <DatePicker label={translate('deliverDate')} />
                </div>

                <div className="description">
                    <TextControl text={translate('description')} />
                    <EditorTextControl height={400} />
                </div>
            </TaskFormStyled>
        </PanelControl>
    )
}