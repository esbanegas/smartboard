import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CardsStyled } from './style';
import { utils } from '../../utils';

const CardsControl = ({
  items,
  onSeletedItemChange,
  onRenderItem,
  justifyContentItems,
  widthCard,
  onRenderActions,
  onDoubleClickItemChange,
  height,
}) => {
  const [selectedItem, setSelectedItem] = useState({});
  const [activeHover, setActiveHover] = useState({});

  const handleOnSeletedItemChange = item => {
    setSelectedItem(item);
    if (onSeletedItemChange) {
      onSeletedItemChange(item);
    }
  };

  const handleOnDoubleClickItemChange = item => {
    if (onDoubleClickItemChange) {
      setSelectedItem(item);

      onDoubleClickItemChange(item);
    }
  };

  const list = useMemo(
    () => {
      if (utils.evaluateArray(items)) {
        return items.map((item, index) => ({ ...item, uniqueId: index }));
      }

      return [];
    },
    [items],
  );

  return (
    <CardsStyled
      height={height}
      widthCard={widthCard}
      justifyContentItems={justifyContentItems}
    //   Depths={Depths}
    >
      <div className="__cards --centered ">
        {utils.evaluateArray(list) &&
          list.map(item => (
            <div
              className={`ms-depth-8 __cards__item --centered ${selectedItem ===
                item && '__cards__item--selected'}`}
              onClick={() => handleOnSeletedItemChange(item)}
              onDoubleClick={() => handleOnDoubleClickItemChange(item)}
              role="presentation"
              onMouseEnter={() => setActiveHover(item)}
              onMouseLeave={() => setActiveHover({})}
              key={item.uniqueId}
            >
              {onRenderItem && onRenderItem(item)}

              {onRenderActions && (
                <div
                  style={{
                    display: activeHover === item ? 'grid' : 'none',
                  }}
                  className="__display-actions"
                >
                  {onRenderActions(item)}
                </div>
              )}
            </div>
          ))}
      </div>
    </CardsStyled>
  );
};

CardsControl.propTypes = {
  items: PropTypes.array.isRequired,
  justifyContentItems: 'start' || 'center' || 'end',
  widthCard: PropTypes.number,
  onSeletedItemChange: PropTypes.func.isRequired,
  onRenderItem: PropTypes.func.isRequired,
  onRenderActions: PropTypes.func,
  onDoubleClickItemChange: PropTypes.func,
  height: PropTypes.number,
};

CardsControl.defaultProps = {
  justifyContentItems: 'center',
  widthCard: 200,
};

export default CardsControl;
