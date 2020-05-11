import styled from 'styled-components';

const isDisabledStyle = disabled => {
  if (disabled) {
    return;
  }
};

export const StyledCustomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => `${props.size}px` || '50px'};
  height: ${props => `${props.size}px` || '50px'};
  background-color: ${props =>
    props.disabled
      ? props.colorDefault
      : props.selected
        ? props.colorSelected || props.colorDefault
        : props.colorDefault};
  ${'' /* margin: 5px; */}
  padding: 15px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  font-size: 11px;
  line-height: 32px;
  text-transform: uppercase;
  overflow: hidden;

  background-position: center;
  transition: background 0.5s;

  :hover {
    background: ${props =>
      props.disabled
        ? ''
        : '#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%'};
  }

  :active {
    background-color: ${props =>
      props.disabled ? props.colorDefault : 'white'};
    background-size: 100%;
    transition: background 0s;
  }

  .custom-buttom {
    color: ${props =>
      props.activate ? props.iconColorSelected : props.iconColor || 'black'};

    :hover {
      color: ${props => props.colorHover || ''};
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
