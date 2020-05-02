import styled from 'styled-components';

export const PanelStyled = styled.div`
  position: fixed;
  top: ${props => (props.showHeader ? '46px' : '0px')};
  right: 0px;
  bottom: 0px;
  left: ${props => (props.isBlocked ? '0px' : 'none')};
  z-index: 1000000;
  background: rgba(244, 244, 244, 0.6);
  .panel-grid {
    position: fixed;
    display: grid;
    grid-template-rows: ${props =>
    props.hideHeader
      ? props.hideFotter
        ? '100%'
        : 'calc(100% - 70px ) 70px'
      : props.hideFotter
        ? '70px calc(100% - 70px)'
        : '70px calc(100% - 140px ) 70px'};
    background: white;
    top: 0px;
    right: 0px;
    bottom: 0px;
    width: ${props => props.customWidth || '500px'};
    box-shadow: 0px 2px 14px 2px rgba(0, 0, 0, 0.5);
    animation-name: ${props => props.withAnimation && 'animation_panel'};
    animation-duration: 0.4s;
    overflow: auto;
    @media only screen and (max-width: ${props =>
    props.customWidth || '500px'}) {
      width: 100%;
      bottom: 0px;
    }
  }
  .panel-control-container {
    display: grid;
    overflow: auto;
    padding: 10px;
  }

  @keyframes animation_panel {
    from {
      right: 0px;
      width: 0px;
    }
    to {
      width: ${props => props.customWidth || '500px'};
    }
  }
`;
