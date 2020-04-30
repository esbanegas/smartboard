import React from 'react';
import styled from 'styled-components';
import { DefaultButton } from '@fluentui/react';

const LoginStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* background: red; */
`;

const Login = ({ history }) => {

    const handleEnterLoginClick = () => {
        history.push('/home')
    }

    return (
        <LoginStyled>
            <DefaultButton text="Entrar" primary onClick={handleEnterLoginClick} />
        </LoginStyled>
    )
}

export default Login;