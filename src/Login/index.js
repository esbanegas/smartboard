import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DefaultButton, TextField } from '@fluentui/react';
import Institutes from '../Containers/Intitute';
import { useTranslate } from 'react-translate';
import { restClient } from '../Services/restClient';

const LoginStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #ffffff;

    .fields {
        height: 160px;
        width: 300px;
        padding: 5px;
        border-radius: 6px;

        -webkit-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.2);
        -moz-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.2);
        box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.2);
    }
`;

const Login = ({ history }) => {
    const [user, setUser] = useState({
        userName: '',
        password: ''
    })

    const translate = useTranslate('data');

    const fetchIntitute = async () => {
        const response = await restClient.httpGet('institutes', {
            queryInfo: {
                paramValues: [1]
            },
        });

        localStorage.setItem('institute', JSON.stringify(response.items[0]));
    }

    useEffect(() => {
        // fetchIntitute();
    }, []);

    const handleUserChange = prop => event => {
        setUser({ ...user, [prop]: event.target.value });
    }

    const handleEnterLoginClick = () => {



        history.push('/home')
    }

    return (
        <LoginStyled>
            {/* <Institute /> */}

            <div className="fields">
                <TextField
                    label={translate('userName')}
                    value={user.userName}
                    onChange={handleUserChange('userName')} />

                <TextField
                    type="password"
                    label={translate("password")}
                    value={user.password}
                    onChange={handleUserChange('password')} />

                <DefaultButton text="Entrar" primary onClick={handleEnterLoginClick} />
            </div>


        </LoginStyled>
    )
}

export default Login;