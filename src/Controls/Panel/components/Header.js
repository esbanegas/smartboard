import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Icon } from 'office-ui-fabric-react';
import { useTranslate } from 'react-translate';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  background: ${props => props.background || 'white'};
  .header-icon {
    font-size: 22px;
    color: ${props => props.iconColor || 'black'};
  }
  .header-title {
    display: grid;
    justify-content: ${props => props.direction || 'center'};
    align-items: center;
    margin-left: 12px;
    width: 100%;
    color: ${props => props.color || 'black'};
  }

  .header-title .header-title-text {
    font-size: 24px;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
  }
`;

const Header = ({ title, header }) => {
  const translate = useTranslate('data');

  return (
    <HeaderStyled
      background={header.background}
      color={header.color}
      iconColor={header.iconColor}
      direction={header.direction}
    >
      <Icon className="header-icon" iconName={header.iconName} />
      <div className="header-title">
        <div className="header-title-text">
          {translate((header && header.title) || title)}
        </div>
      </div>
    </HeaderStyled>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  header: PropTypes.object,
};

export { Header };
