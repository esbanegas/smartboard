import styled from 'styled-components';

export const CardsStyled = styled.div`
  position: relative;
  border: 1px solid #c8c8c8;
  overflow: auto;
  height: ${props => props.height ? `${props.height}px` : '100%' };
  width: 100%;
  background-color: #f6f6f6;
  .__cards {
    position: absolute;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, ${props => `${props.widthCard}px`});
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    padding: 5px;
    overflow: auto;
    justify-content: ${props => props.justifyContentItems};
  }

  .__cards__item {
    position: relative;
    display: grid;
    height: auto;
    width: auto;
    /* border-radius: 5px;*/
    box-shadow: 11px 11px 6px -11px rgba(0,0,0,0.69);
    padding: 5px;
    background: #fff;
    overflow: hidden;
    background-color: white;
    :hover {
      .__display-actions {
        display: grid;
      }
    }
  }

  .__cards__item--selected {
    background: rgba(0, 0, 0, 0.1);
  }

  .__display-actions {
    position: absolute;
    display: none;
    width: 100%;
    height: 40px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.4);
    animation-name: animation_display-actions;
    animation-duration: 0.4s;
  }

  @keyframes animation_display-actions {
    from {
      height: 0px;
    }
    to {
      height: 40px;
    }
  }

  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;
