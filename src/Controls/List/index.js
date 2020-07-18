import React from 'react';
import { ListStyles } from './style';
import { utils } from '../../utils';
import { ListItem } from './ListItem';

const ListControl = ({ items, onRenderItem, fieldKey }) => {

    return (
        <ListStyles.ListStyled>
            {
                utils.evaluateArray(items) &&
                items.map((item, index) => (
                    <ListItem 
                        fieldKey={fieldKey} 
                        index={index}
                        item={item} 
                        onRenderItem={onRenderItem} />
                ))
            }
        </ListStyles.ListStyled>
    )
};


export default ListControl;