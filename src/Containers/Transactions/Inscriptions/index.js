import React from 'react';
import styled from 'styled-components';
import { CommandBarControl, TextControl } from '../../../Controls';
import { SearchBox, ComboBox } from '@fluentui/react';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert';

const InscriptionsStyled = styled.div`
    display: grid;
    grid-template-rows: 60px 50px 220px 120px;
    grid-row-gap: 20px;
    .detail {
        display: grid;
        grid-template-columns: 260px auto;
        grid-row-gap: 10px;
        padding-left: 5px;
        background: #ffffff;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    }

    .search {
        width: 300px;
    }

    .sections {
        width: 200px;
    }
`;

const Inscriptions = () => {

    const translate = useTranslate('data');
    const alert = useAlert();

    const handleEnrollClick = () => {

    }

    const handleEnrollStudentsClick = () => {

    }

    const handleCancelInscriptionClick = () => {

    }

    return (
        <InscriptionsStyled>
            <CommandBarControl items={[
                {
                    text: 'enroll',
                    iconName: 'add',
                    onClick: handleEnrollClick,
                },
                {
                    text: 'enrolledStudents',
                    iconName: 'List',
                    onClick: handleEnrollStudentsClick,
                },
                {
                    text: 'cancelInscription',
                    iconName: 'Cancel',
                    onClick: handleCancelInscriptionClick,
                },
            ]} />


            <SearchBox className="search" placeholder={translate('identity')} />

            <div className="detail">
                <TextControl text={`${translate('name')}: `} bold />
                <TextControl text="Erlin Samir" />

                <TextControl text={`${translate('lastName')}: `} bold />
                <TextControl text="Banegas Hernández" />

                <TextControl text={`${translate('age')}: `} bold />
                <TextControl text="24 años" />

                <TextControl text={`${translate('sex')}: `} bold />
                <TextControl text="Masculino" />

                <TextControl text={`${translate('address')}: `} bold />
                <TextControl text="La Ceiba" />
            </div>

            <div className="detail">
                <TextControl text={`${translate('gradeToStudy')}: `} bold />
                <TextControl text="Sexto" />

                <TextControl text={`${translate('section')}: `} bold />
                <ComboBox className="sections" options={[{
                    key: 'section1',
                    text: '1'
                }]} />

                <TextControl text={`${translate('paymentInscription')}: `} bold />
                <TextControl text="500 lps" />
            </div>

            <TextControl text={translate('seeCompleteUserInformation')} />

        </InscriptionsStyled>
    )
}

export default Inscriptions;