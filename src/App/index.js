import React, { useState, useRef } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { TranslatorProvider } from 'react-translate';

import styled from 'styled-components';
import ContainerApp from './ContainerApp';

import es from '../Translate/es.json';
import en from '../Translate/en.json';

import Store from '../Store';
import Login from '../Login';
import { DashboardHome } from '../Dashboard/DashboardHome';
import { Responsive } from '../Style/responsive';
import { DashboardMobile } from '../Dashboard/DashboardMobile';


const AppStyled = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;

    background: #eeeeee;
`;

const App = () => {
    const [selectedLanguage, setSelectedLanguge] = useState('es');

    const translations = {
        locale: selectedLanguage,
        data: selectedLanguage === 'es' ? es : en,
    }

    return (
        <TranslatorProvider translations={translations}>
            <AppStyled>
                <HashRouter>
                    <Switch>
                        <Route path="/home" render={props => <Store>
                            <ContainerApp
                                selectedLanguage={selectedLanguage}
                                setSelectedLanguge={setSelectedLanguge}
                                {...props} /></Store>} />
                        <Route path="/" render={props => <Store><Login {...props} /></Store>} />
                    </Switch>
                </HashRouter>

                <Responsive.Tablet>
                    <DashboardMobile />
                </Responsive.Tablet>

                <Responsive.Mobile>
                    <DashboardMobile />
                </Responsive.Mobile>

                <Responsive.Desktop>
                    <DashboardHome />
                </Responsive.Desktop>
                {/* <WaitControl /> */}
            </AppStyled>
        </TranslatorProvider>
    )
}

export default App;