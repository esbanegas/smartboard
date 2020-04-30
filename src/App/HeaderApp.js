import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

        border: 1px solid gray;
    }
`;

const HeaderApp = () => {
    return (
        <HeaderStyled>
            <div className="head-left align-content-center">
                <h2>Smartboard</h2>
            </div>

            <div className="head-center align-content-center">
                Center
            </div>

            <div className="head-right align-content-center">
                Hola
            </div>
        </HeaderStyled>
    )
}

HeaderApp.propTypes = {
    children: PropTypes.element,
}

export default HeaderApp;