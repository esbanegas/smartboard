import React, { useState, useEffect } from 'react';
import { HashRouter, Link } from "react-router-dom";
import styled from 'styled-components';
import { useSwipeable, Swipeable } from 'react-swipeable'
import { Icon } from '@fluentui/react';
import { DashboardStyled } from './style';
import { useTranslate } from 'react-translate';
import { routes } from '../Routes';

const DashboardMobileStyled = styled.div`
    .swipeable-container {
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 0;
        width: 30px;
    }
`;

const DashboardDropDown = styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;

    width: 65%;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    overflow-x: auto;

    animation-name: ${props => props.isVisible && 'animation_dashboard'};
    animation-duration: 0.2s;

    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};

    @keyframes animation_dashboard {
        from {
            width: 0px;
        }

        to {
            width: 65%;
        }
    }

    .title {
        position: relative;
        background-color: #ffffff;

        h3 {
            margin: 0;
        }

        i {
            position: absolute;
            top: 0;
            right: 5px;
            font-size: 20px;
            font-weight: bold;
            color: red;
            cursor: pointer;
        }
    }

    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, 210px);
        grid-template-rows: repeat(auto-fit, 150px);
        grid-gap: 5px;
        justify-content: center;
    }
`;

export const DashboardMobile = () => {
    const [isVisible, setIsVisible] = useState(false);
    const translate = useTranslate('data');

    const config = {
        delta: 0,                             // min distance(px) before a swipe starts
        preventDefaultTouchmoveEvent: false,   // preventDefault on touchmove, *See Details*
        trackTouch: true,                      // track touch input
        trackMouse: false,                     // track mouse input
        rotationAngle: 0,                      // set a rotation angle
    };

    const eventHandler = e => {
        setIsVisible(true);
    }

    const handleDocumentClick = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        }
    }, [isVisible]);

    return (
        <DashboardMobileStyled>
            <Swipeable onSwiped={eventHandler} {...config} >
                <div className="swipeable-container" />
            </Swipeable>

            {isVisible && (
                <DashboardDropDown isVisible={isVisible}>
                    <div className="title">
                        <h3>Dashboard</h3>
                        <Icon iconName="Cancel" onClick={() => setIsVisible(false)} />
                    </div>

                    <div className="container">
                        <HashRouter>
                            {routes.map(route => (
                                <DashboardStyled.Item className="fadein-animation" color={route.color}>
                                    <Link to={route.path}>
                                        <Icon iconName={route.iconName} />
                                        <span>{translate(route.title)}</span>
                                    </Link>
                                </DashboardStyled.Item>
                            ))}
                        </HashRouter>
                    </div>
                </DashboardDropDown>
            )}
        </DashboardMobileStyled>
    )
}