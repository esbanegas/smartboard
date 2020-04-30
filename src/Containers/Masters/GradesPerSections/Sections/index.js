import React from 'react';
import styled from 'styled-components';
import { useTranslate } from 'react-translate';

const SectionsStyled = styled.div`

`;

const Sections = () => {
    const translate = useTranslate('data');

    return (
        <SectionsStyled>
            <h1>{translate('sections')}</h1>
        </SectionsStyled>
    )
}

export default Sections;