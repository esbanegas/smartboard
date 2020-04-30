import React from 'react';
import { Pivot, PivotItem, Label } from '@fluentui/react';
import styled from 'styled-components';

const TabsStyled = styled.div`
    display: grid;
    padding-bottom: 5px;

    .pivot {
        display: grid;
        grid-template-rows: 50px calc(100% - 50px);
    }

    .tab-item {
        display: grid;
        height: 100%;
        border: 1px solid #f3f2f1;
        padding-left: 5px;
    }
`;

const TabContainerStyled = styled.div`
    display: grid;
`;

const TabsControl = ({ tabs }) => {

    return (
        <TabsStyled>
            <Pivot className="pivot">
                {tabs.map(tab =>
                    <PivotItem className="tab-item" itemIcon={tab.itemIcon} headerText={tab.label}>
                        {/* <TabContainerStyled> */}
                        {tab.component}
                        {/* </TabContainerStyled> */}
                    </PivotItem>)}
            </Pivot>
        </TabsStyled>
    )
}

export default TabsControl;