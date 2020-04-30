import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TranslatorProvider } from 'react-translate';
import styled from 'styled-components';
import ContainerApp from './ContainerApp';

import es from '../Translate/es.json';

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

    const translations = {
        locale: 'es',
        data: es,
    }

    return (
        <TranslatorProvider translations={translations}>
            <AppStyled >
                {/* <BackgroundMain top="0px" /> */}
                <Router>
                    <Switch>
                        <Route path="/home" render={props => <Store><ContainerApp {...props} /></Store>} />
                        <Route path="/" render={props => <Store><Login {...props} /></Store>} />
                        {/* <Route path="/home" component={ContainerApp} /> */}
                        {/* <Route path="/dashboard" render={props => <Store><ContainerMain {...props} /></Store>} /> */}


                        {/* <Route path="/home" component={ContainerMain}/>
                  <Route path="/dashboard" component={ContainerMain}/>
                  <Route path="/" component={Login}/> */}
                    </Switch>
                </Router>

                {/* <WaitControl /> */}
            </AppStyled>
        </TranslatorProvider>
    )
}

export default App;