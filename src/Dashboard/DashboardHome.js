import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { routes } from '../Routes';
import { Icon, Link } from '@fluentui/react';
import { useTranslate } from 'react-translate';
import { AnimationFadeInStyled } from '../Style/fadein';
import { DashboardStyled } from './style';

export const DashboardHome = () => {
    const [isVisible, setIsVisible] = useState(false);
    const translate = useTranslate('data');

    const handleKeyPress = event => {
        if (event.ctrlKey) {
            if (event.code === 'KeyM') {
                setIsVisible(!isVisible);
            }
        }
    }

    const handleDocumentClick = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("click", handleDocumentClick);
        }
    }, [isVisible]);

    return (
        <DashboardStyled.Home isVisible={isVisible}>
            {isVisible && routes.map(route => (
                <DashboardStyled.Item className="fadein-animation" color={route.color}>
                    <Link href={route.path}>
                        <Icon iconName={route.iconName} />
                        <span>{translate(route.title)}</span>
                    </Link>
                </DashboardStyled.Item>
            ))}
        </DashboardStyled.Home>
    )
}