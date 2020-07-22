import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Callout, DirectionalHint, Dropdown } from '@fluentui/react';
import { style } from './style';
import { screenSmallerThan } from '../../Style/utils';
import { Responsive } from '../../Style/responsive';
import { useTranslate } from 'react-translate';

const HeaderApp = ({screenName, selectedLanguage, setSelectedLanguge }) => {
    const [isCalloutVisible, setIsCalloutVisible] = useState(false);
    // const institute = JSON.parse(localStorage.getItem('institute')) || {};
    // const [selectedLanguage, setSelectedLanguge] = useState('es');

    const translate = useTranslate('data');

    const institute = {
        name: 'My SmartBoard',
        slogan: 'Cambiando Vidas'
    };

    const content = useRef();

    const teacherProfile = {
        name: 'Erlin',
        lastName: 'Banegas',
        profession: 'Software Engineer'
    }

    return (
        <style.Header>
            <div className="head-left align-content-center">
                <div>
                    <h2>{institute.name}</h2>
                    <span>{`"${institute.slogan}"`}</span>
                </div>

                <h2>{` | ${translate(screenName)}`}</h2>
            </div>

            <Responsive.Tablet>
                <div className="head-center align-content-center">

                </div>
            </Responsive.Tablet>

            <Responsive.Desktop>
                <div className="head-center align-content-center">

                </div>
            </Responsive.Desktop>

            <div className="head-right align-content-center">
                <style.User ref={content} onClick={() => setIsCalloutVisible(true)}>
                    <div>
                        <h3>{`${teacherProfile.name.charAt(0)}${teacherProfile.lastName.charAt(0)}`}</h3>
                    </div>
                </style.User>
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
        </style.Header>
    )
}

HeaderApp.propTypes = {
    children: PropTypes.element,
}

export default HeaderApp;