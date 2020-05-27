import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableControl } from '../../../../Controls';
import { Button } from '@fluentui/react';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert';

const TasksStyled = styled.div`
    .filters {

    }
`;

export const Tasks = () => {

    const translate = useTranslate('data');
    const alert = useAlert();

    const onSendTaskRender = row => <Button text={translate('send')} primary />

    return (
        <TasksStyled>
            <TableControl data={[]} columns={[
                {
                    label: 'class',
                    fieldName: 'classId'
                },
                {
                    label: 'description',
                    fieldName: 'description'
                },
                {
                    label: 'deliverDate',
                    fieldName: 'deliverDate'
                },
                {
                    label: 'sendDate',
                    fieldName: 'sendDate'
                },
                {
                    label: 'state',
                    fieldName: 'state'
                },
                {
                    onRenderCell: onSendTaskRender,
                }
            ]} />
        </TasksStyled>
    )
}

Tasks.propTypes = {

};