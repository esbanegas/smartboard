import React from 'react';
import styled from 'styled-components';
import { TabsControl } from '../../../Controls';
import Sections from './Sections';

const GradesPerSectionStyled = styled.div`
    display: grid;
`;


const GradesPerSection = () => {

    return (
        <GradesPerSectionStyled>
            <TabsControl tabs={[
                {
                    label: 'Sections',
                    itemIcon: 'Add',
                    component: <Sections />
                },
                {
                    label: 'Tab 2',
                    itemIcon: 'Add',
                    component: <div>Hola 1</div>
                },
                {
                    label: 'Tab 3',
                    itemIcon: 'Add',
                    component: <div>Hola 2</div>
                }
            ]} />
        </GradesPerSectionStyled>
    )
}

export default GradesPerSection;