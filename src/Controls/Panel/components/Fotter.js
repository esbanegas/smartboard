import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TooltipHost, Icon } from 'office-ui-fabric-react';
import { CommandBarControl } from '../..';

const FotterStyled = styled.div`
  display: grid;
  grid-template-columns: 40px calc(100% - 40px);
  justify-content: center;
  align-items: center;
  background: rgba(244, 244, 244, 1);
  padding-left: 17px;
  padding-right: 5px;
  .icon-back {
    color: black;
    font-size: 20px;
    :hover {
      color: red;
      cursor: pointer;
    }
  }
  .actions-control {
    display: grid;
    width: 100%;
    height: 100%;
    align-items: center;
    overflow-x : auto;
  }
  .command-bar {
    width: 100%;
  }
`;
export const Fotter = ({ onDismiss, commands }) => {
  const handleOnDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };
  return (
    <FotterStyled>
      <TooltipHost content="close panel">
        <Icon
          className="icon-back"
          iconName="Back"
          onClick={handleOnDismiss}
          data-testid="formControl-backButton"
        />
      </TooltipHost>
      <div className="actions-control">
        <CommandBarControl className="command-bar" rightCommands={commands} />
      </div>
    </FotterStyled>
  );
};

Fotter.propTypes = {
  onDismiss: PropTypes.func,
  commands: PropTypes.array,
};
