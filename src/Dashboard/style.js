import styled from 'styled-components';

const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 210px);
    grid-template-rows: repeat(auto-fit, 150px);
    grid-gap: 5px;
    justify-content: center;

    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #ffffff;

    position: fixed;
    top: 60px;
    right: 0;
    left: 0;
    bottom: 0;
`;

const Home = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 210px);
    grid-template-rows: repeat(auto-fit, 150px);
    grid-gap: 5px;
    justify-content: center;

    padding: 5px;

    position: fixed;
    /* top: 60px; */
    right: 0;
    left: 0;
    bottom: 0;
    /* bottom: ${props => props.isVisible ? '0px' : '100%'}; */
    width: 50%;
    height: 65%;
    overflow: auto;
    /* background-color: rgba(0, 0, 0, 0.7); */
    background-color: rgba(255, 255, 255, 0.5);
    /* background-color: #ffffff; */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    animation-name: ${props => props.isVisible && 'animation_dashboard'};
    animation-duration: 0.2s;

    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};

    @keyframes animation_dashboard {
        from {
            height: 0px;
        }

        to {
            height: 65%;
        }
    }
`;

const Item = styled.div`
    background-color: ${ props => props.color ? props.color : 'rgba(255, 255, 255, 1)'};
    border-radius: 2.6px;
    padding: 5px;
    font-weight: bold;
    display: grid;

    cursor: pointer;

    :hover {
        opacity: 80%;
    }

    a {
        text-decoration: none;
        display: grid;
        grid-template-rows: auto auto;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        color: #ffffff;
        text-align: center;

        i {
            font-size: 80px;
        }

        span {
            font-size: 20px;
        }

        :hover {
          text-decoration: none;
        }
    }
`;


export const DashboardStyled = {
    Main,
    Home,
    Item
}