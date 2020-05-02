import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Callout, DirectionalHint, Dropdown } from '@fluentui/react';

const HeaderStyled = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    height: 60px;

    /* background: #eeeeee; */
    background: #0078d4;

    padding-left: 5px;

    display: grid;
    grid-template-columns: 300px 1fr 300px;
    grid-template-rows: 60px;
    align-items: center;

    .align-content-center {
        display: grid;
        align-items: center;
    }

    .head-left {
        h2 {
            color: #ffffff;
        }
    }

    .head-center {
        display: grid;
        justify-content: center;
    }

    .head-right {
        display: flex;
        justify-content: flex-end;
        height: 59px;

        /* border: 1px solid gray; */
    }

`;

const UserStyled = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    div {
        border-radius: 50%;
        /* border: 1px solid gray; */
        background-color: #a4373a;
    }

    h3 {
        padding: 0px;
        margin: 12px;
        color: #ffffff;
    }

    :hover {
        background-color: rgba(255, 255, 255, .1);
    }
`;

const HeaderApp = ({ selectedLanguage, setSelectedLanguge }) => {
    const [isCalloutVisible, setIsCalloutVisible] = useState(false);
    // const [selectedLanguage, setSelectedLanguge] = useState('es');
    const content = useRef();

    const teacherProfile = {
        name: 'Erlin',
        lastName: 'Banegas',
        profession: 'Software Engineer'
    }

    return (
        <HeaderStyled>
            <div className="head-left align-content-center">
                <h2>Smartboard</h2>
            </div>

            <div className="head-center align-content-center">
                {/* Center */}
            </div>

            <div className="head-right align-content-center">
                <UserStyled ref={content} onClick={() => setIsCalloutVisible(true)}>
                    <div>
                        <h3>{`${teacherProfile.name.charAt(0)}${teacherProfile.lastName.charAt(0)}`}</h3>
                    </div>
                </UserStyled>
            </div>

            {isCalloutVisible && (
                <Callout
                    style={{
                        height: '200px',
                        minWidth: '300px'
                    }}
                    gapSpace={0}
                    target={content}
                    isBeakVisible={false}
                    beakWidth={0}
                    onDismiss={() => setIsCalloutVisible(false)}
                    directionalHint={DirectionalHint.bottomCenter}
                    setInitialFocus
                >
                    <Dropdown selectedKey={selectedLanguage}
                        options={[
                            {
                                key: 'es',
                                text: 'es'
                            },
                            {
                                key: 'en',
                                text: 'en'
                            }]}
                        onChange={(event, option) => setSelectedLanguge(option.key)} />
                </Callout>)}
        </HeaderStyled>
    )
}

HeaderApp.propTypes = {
    children: PropTypes.element,
}

export default HeaderApp;