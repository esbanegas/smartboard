import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TranslatorProvider } from 'react-translate';
import styled from 'styled-components';
import ContainerApp from './ContainerApp';

import es from '../Translate/es.json';
import en from '../Translate/en.json';

import Store from '../Store';
import Login from '../Login';

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
            <AppStyled >
                <Router>
                    <Switch>
                        <Route path="/home" render={props => <Store>
                            <ContainerApp
                                selectedLanguage={selectedLanguage}
                                setSelectedLanguge={setSelectedLanguge}
                                {...props} /></Store>} />
                        <Route path="/" render={props => <Store><Login {...props} /></Store>} />
                    </Switch>
                </Router>

                {/* <WaitControl /> */}
            </AppStyled>
        </TranslatorProvider>
    )
}

export default App;