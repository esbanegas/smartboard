import styled from 'styled-components';
import { screenSmallerThan } from '../../Style/utils';

const Header = styled.div`
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

    ${screenSmallerThan.tablet`
        display: grid;
        grid-template-columns: auto auto;
    `};

    .align-content-center {
        display: grid;
        align-items: center;
    }

    .head-left {
        h2 {
            color: #ffffff;
            padding: 0px;
            margin: 0px;
        }

        span {
            color: #ffffff;
        }

        ${screenSmallerThan.phone`
            h2 {
                font-size: 14px;
            }

            span {
                font-size: 14px;
            }
        `};
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

const User = styled.div`
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


export const style = {
    Header,
    User
}