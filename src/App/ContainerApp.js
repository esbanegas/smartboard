import React, { useState, useMemo, Suspense } from 'react';

import { IconButton, Shimmer } from '@fluentui/react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import HeaderApp from './HeaderApp';
// import Menu from '../Menu';

import { routes } from '../Routes';
import { Dashboard } from '../Dashboard';

const Menu = React.lazy(() => import('../Menu'));

// import Dashboard from '../Dashboard';

// import { routes } from '../routes';
// import BackgroundMain from '../BackgroundMain/main';
// import MenuScreen from '../Controls/MenuScreen';

const ContainerAppStyled = styled.div`
    /* background: #eeeeee; */

    display: grid;
    grid-template-columns: ${prop => prop.isCollapsed ? '50px' : '300px'} auto;

    background: red;
    position: fixed;
    top: 60px;
    right: 0;
    left: 0;
    bottom: 0;

    
    .menu {
        background: #faf9f8;
        /* background: #edebe9; */
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 40px auto;

        i {
            font-size: 22px;
        }
    }

    .work-area {
        background: #ffffff;
        display: grid;
        padding-left: 5px;
        padding-right: 5px;
    }
`;

// const ComponentWithMenuStyled = styled.div`
//     display: grid;
//     grid-template-rows: 120px calc(100% - 120px);
// `;

// const ComponentWithMenu = ({ component, history, location, match }) => {

//     const Component = React.createElement(component, { history, location, match });

//     return (
//         <ComponentWithMenuStyled>
//             <MenuScreen width={100} height={100} />
//             {Component}
//         </ComponentWithMenuStyled>
//     )
// }

const ContainerApp = ({ history, dispatch, setSelectedLanguge, selectedLanguage }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const routeComponents = useMemo(() => {
        return routes.map(({ path, component }, key) =>
            <Route
                exact
                path={path}
                component={component}
                key={key}
            />
        )
    }, [routes]);

    const MenuMemorized = useMemo(() => <Menu isCollapsed={isCollapsed} />, [routes, isCollapsed]);

    const handleMenuClick = () => {
        setIsCollapsed(!isCollapsed);
    }

    const getShimerStyle = {
        shimmerWrapper: [
            {
                backgroundColor: '#deecf9',
            },
        ],
        shimmerGradient: [
            {
                backgroundColor: '#deecf9',
                backgroundImage:
                    'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #c7e0f4 50%, rgba(255, 255, 255, 0) 100%)',
            },
        ],
    }

    return (
        <ContainerAppStyled isCollapsed={isCollapsed}>

            <HeaderApp selectedLanguage={selectedLanguage}
                setSelectedLanguge={setSelectedLanguge} />

            {/* <div className="menu">
            <IconButton
                title="Menu"
                iconProps={{ iconName: 'CollapseMenu' }}
                onClick={handleMenuClick}
            />

            <Suspense fallback={<div style={{ display: 'grid', height: 160 }}>
                <Shimmer styles={getShimerStyle} />
                <Shimmer styles={getShimerStyle} />
                <Shimmer styles={getShimerStyle} />
                <Shimmer styles={getShimerStyle} />
                <Shimmer styles={getShimerStyle} />
                <Shimmer styles={getShimerStyle} />
            </div>}>
                {MenuMemorized}
            </Suspense>
        </div> */}

            <div className="work-area">
                <Router>
                    <Switch>
                        {routeComponents}
                        <Route path="/home" component={Dashboard} />
                        {/* <Route exact path="/home" component={Dashboard} /> */}
                    </Switch>
                </Router>
            </div>
        </ContainerAppStyled>)
}


export default ContainerApp;