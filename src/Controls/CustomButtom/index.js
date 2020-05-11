import React from 'react';
import PropTypes from 'prop-types';
import { StyledCustomButton } from './styles';
import { useTranslate } from 'react-translate';
import { IconButton, TooltipHost, Label } from '@fluentui/react';

const colorDefault = '#dde3e6';

const CustomButton = ({
  title,
  label,
  iconName,
  size,
  onClick,
  iconColor,
  colorSelected,
  iconColorSelected,
  activate,
  disabled,
  colorHover,
  buttonId,
  toolTipContent,
  colorText,
}) => {

  const handleOnButtomCustomClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  const translate = useTranslate('data');

  const buttom = () => (
    <IconButton
    style={{background:'transparent'}}
      className="custom-buttom"
      data-testid={buttonId}
      iconProps={{ iconName }}
      title={title ? translate(title) : ''}
      disabled={disabled || false}
    />
  );

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: label ? `${size}px 10px` : `${size}px`,
        justifyItems: 'center',
      }}
    >
      <StyledCustomButton
        size={size}
        onClick={handleOnButtomCustomClick}
        selected={activate || false}
        colorSelected={colorSelected}
        colorHover={colorHover}
        activate={activate}
        iconColorSelected={iconColorSelected}
        iconColor={iconColor}
        colorDefault={colorDefault}
        disabled={disabled}
      >
        {toolTipContent ? (
          <TooltipHost content={translate(toolTipContent)}>
            {buttom()}
          </TooltipHost>
        ) : (
          buttom()
        )}
      </StyledCustomButton>
      {label && (
        <Label style={{ color: colorText || 'black' }}>
          {translate(label)}
        </Label>
      )}
    </div>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  iconName: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  iconColor: PropTypes.string,
  buttonId: PropTypes.string,
  colorSelected: PropTypes.string,
  iconColorSelected: PropTypes.string,
  activate: PropTypes.bool,
  disabled: PropTypes.bool,
  colorHover: PropTypes.string,
  colorText: PropTypes.string,

  toolTipContent: PropTypes.string,
};

export default CustomButton;
