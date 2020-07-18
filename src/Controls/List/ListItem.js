import React, { useState } from 'react';
import { ListStyles } from './style';

export const ListItem = ({ item, onRenderItem, fieldKey, index }) => {
    const [selectedItem, setSelectedItem] = useState({});

    return (
        <ListStyles.ListItemStyled 
            key={`${item[fieldKey]}-${index}`}
            isSelected={selectedItem}>
            {
                onRenderItem && onRenderItem(item)
            }
        </ListStyles.ListItemStyled>
    )
}