import React, { useState, useEffect } from 'react';
import { useTranslate } from 'react-translate';
import styled from 'styled-components';
import { TextField, DocumentCard, DocumentCardTitle, IconButton } from '@fluentui/react';
import { CommandBarControl, CardsControl } from '../../Controls';
import { restClient } from '../../Services/restClient';
import { useAlert } from 'react-alert'
import image from './image.jpg';
import InstituteForm from './components/IntituteForm';

const InstituteStyled = styled.div`
    /* border: 1px solid gray;

    width: 500px;
    height: 500px; */
    /* background: red; */
`;

const Institutes = () => {
    const [institutes, setInstitutes] = useState([]);
    const [selectedInstitute, setSelectedInstitute] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const translate = useTranslate('data');
    const alert = useAlert();

    useEffect(() => {
        fetchIntitutes();
    }, []);

    const fetchIntitutes = async () => {
        const response = await restClient.httpGet('institutes', {
            queryInfo: {
                pageIndex: 0,
                pageSize: 10
            },
        });

        setInstitutes(response.items);
    }

    const handleEditClick = item => () => {
        setSelectedInstitute(item);
        setIsOpen(true);
    }

    const onRenderCard = item => {
        return (
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', right: 1 }}>
                    <IconButton
                        menuProps={{
                            items: [
                                {
                                    key: 'edit',
                                    text: translate('edit'),
                                    iconProps: { iconName: 'Edit' },
                                    onClick: handleEditClick(item)
                                },
                                {
                                    key: 'delete',
                                    text: translate('delete'),
                                    iconProps: { iconName: 'Delete' },
                                },
                            ]
                        }}
                        title="Options"
                        ariaLabel="Options"
                    // checked={true}
                    />
                </div>
                <img src={image} />

                <div style={{ display: 'grid', justifyContent: 'center' }}>
                    <strong> {item.name} </strong>
                    <span>{`"${item.slogan}"`}</span>
                </div>

            </div>
        )
    }


    const onDismiss = () => {
        setIsOpen(false);
        setSelectedInstitute({});
    }

    return (
        <InstituteStyled>
            <CommandBarControl items={[
                {
                    text: 'add',
                    iconName: 'Add',
                    onClick: () => setIsOpen(true),
                },
            ]} />

            <CardsControl
                items={institutes}
                onRenderItem={onRenderCard}
                justifyContentItems="start"
                widthCard={230} />

            {isOpen && (
                <InstituteForm
                    isOpen={isOpen}
                    onDismiss={onDismiss}
                    selectedInstitute={selectedInstitute} />
            )}

        </InstituteStyled>
    )
}

export default Institutes;