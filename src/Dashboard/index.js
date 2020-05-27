import React from 'react';
import { DashboardStyled } from './style';
import { routes } from '../Routes';
import { Link, Icon } from '@fluentui/react';
import { useTranslate } from 'react-translate';

export const Dashboard = () => {

    const translate = useTranslate('data');

    return (
        <DashboardStyled.Main>
            {
                routes.map(route => (
                    <DashboardStyled.Item className="fadein-animation" color={route.color}>
                        <Link href={route.path}>
                            <Icon iconName={route.iconName} />
                            <span>{translate(route.title)}</span>
                        </Link>
                    </DashboardStyled.Item>
                ))
            }
        </DashboardStyled.Main>
    )
}