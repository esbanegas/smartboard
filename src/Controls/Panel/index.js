import React from 'react';
import PropTypes from 'prop-types';
import { PanelStyled } from './styles';
import { Header } from './components/Header';
import { Fotter } from './components/Fotter';

const PanelControl = ({
  title,
  isOpen,
  hideHeader,
  hideFotter,
  header,
  showHeader,
  customWidth,
  onDismiss,
  children,
  commands,
  withAnimation,
  isBlocked,
  id,
}) =>
  isOpen ? (
    <PanelStyled
      data-testid={id}
      header={header}
      showHeader={showHeader}
      customWidth={customWidth}
      hideHeader={hideHeader}
      hideFotter={hideFotter}
      withAnimation={withAnimation}
      isOpen={isOpen}
      isBlocked={isBlocked}
    >
      <div className="panel-grid">
        {!hideHeader && <Header title={title} header={header || {}} />}
        <div className="panel-control-container">{children}</div>
        {!hideFotter && <Fotter onDismiss={onDismiss} commands={commands} />}
      </div>
    </PanelStyled>
  ) : null;

PanelControl.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  showHeader: PropTypes.bool,
  customWidth: PropTypes.string,
  onDismiss: PropTypes.func,
  commands: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      iconName: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      onRender: PropTypes.func,
      subMenuProps: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          iconName: PropTypes.string,
          onClick: PropTypes.func,
          onRender: PropTypes.func,
        }),
      ),
    }),
  ),
  children: PropTypes.element,
  header: PropTypes.shape({
    title: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string,
    direction: 'start' || 'center' || 'end',
    onRender: PropTypes.func,
  }),
  withAnimation: PropTypes.bool,
  hideHeader: PropTypes.bool,
  hideFotter: PropTypes.bool,
  isBlocked: PropTypes.bool,
  id: PropTypes.string,
};

PanelControl.defaultProps = {
  withAnimation: true,
  isBlocked: true,
  id: '',
};

export default PanelControl;
