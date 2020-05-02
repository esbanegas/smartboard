import React, { useState, useEffect } from 'react';
import { useTranslate } from 'react-translate';
import styled from 'styled-components';
import { TextField, DocumentCard, DocumentCardTitle } from '@fluentui/react';
import { PanelControl, CommandBarControl, CardsControl } from '../../Controls';
import { restClient } from '../../Services/restClient';
import { useAlert } from 'react-alert'
import image from './image.jpg';

const InstituteStyled = styled.div`
    /* border: 1px solid gray;

    width: 500px;
    height: 500px; */
    /* background: red; */
`;

const Institutes = () => {
    const [institutes, setInstitutes] = useState([]);
    const [institute, setInstitute] = useState({
        name: '',
        slogan: '',
        descrption: '',
    });

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

    const handleFieldChange = prop => event => {
        setInstitute({ ...institute, [prop]: event.target.value });
    }

    const handleSaveClick = async () => {
        if (!institute.name) {
            alert.info('Instituto vacio');
            return;
        }

        const response = await restClient.httpPost('institutes', institute);
    }

    const onRenderCard = item => {
        return (
            <div>
                <img src={image} />
                {item.name}
            </div>
        )
    }

    return (
        <InstituteStyled>
            <CommandBarControl items={[
                {
                    text: 'add',
                    iconName: 'Add',
                    onClick: handleSaveClick
                },
                {
                    text: 'edit',
                    iconName: 'Edit'
                }]
            } />

            <TextField label={translate('nameInstitute')} onChange={handleFieldChange('name')} />
            <TextField label={translate('slogan')} onChange={handleFieldChange('slogan')} />
            <TextField label={translate('description')} onChange={handleFieldChange('description')} />

            {/* {
                institutes.map(item => (
                    <DocumentCard>
                        <DocumentCardTitle
                            title={
                                'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_' +
                                'it_needs_truncating.pptx'
                            }
                            shouldTruncate={true}
                        />
                    </DocumentCard>
                ))

            } */}

            <CardsControl
                items={institutes}
                onRenderItem={onRenderCard}
                justifyContentItems="start"
                widthCard={230} />


            <PanelControl isOpen commands={[{
                text: 'Save',
                iconName: 'Add'
            }]} />

        </InstituteStyled>
    )
}

export default Institutes;