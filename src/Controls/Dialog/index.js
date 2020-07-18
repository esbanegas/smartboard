import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Dialog, DialogType } from '@fluentui/react';

const DialogStyled = styled.div``;

const DialogControl = ({ title, subText, hidden, onDismiss }) => {
    
    return (
        <Dialog
            hidden={hidden}
            onDismiss={onDismiss}
            dialogContentProps={{
                type: DialogType.normal,
                title: title || '',
                subText,
            }}
            modalProps={{
                isBlocking: true,
            }}
        >
            <strong>Erlin Samir</strong>
        </Dialog>
    )
}

DialogControl.propTypes = {
    title: PropTypes.string,
    subText: PropTypes.string,
    hidden: PropTypes.bool.isRequired,
    onDismiss: PropTypes.func.isRequired,
}

export default DialogControl;