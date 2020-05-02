import { utils } from "../../utils";

export const materializeLeftCommnads = items => {
    if (items) {
        return items.map((item, index) => {
            const { iconName, subMenu, split } = item;

            let commandItem = {
                key: `${item.text}-${index}`,
                text: item.text,
                ariaLabel: item.text,
                disabled: item.disabled || null,
                onClick: item.onClick
            };

            if (split) {
                commandItem = {
                    ...commandItem,
                    split: true,
                }
            }

            if (iconName) {
                commandItem = {
                    ...commandItem,
                    iconProps: { iconName }
                }
            }

            if (utils.evaluateArray(subMenu)) {
                commandItem = {
                    ...commandItem,
                    subMenuProps: item.subMenu.map((subItem, subMenuIndex) => ({
                        key: `item.${item.text}-submenu-${subItem.text}-${subMenuIndex}`,
                        text: subItem.text,
                        iconProps: { iconName: subItem.iconName || null },
                        onClick: item.onClick
                    })),
                }
            }

            return commandItem;
        });
    }

    return [];
}

export const materializeRigthCommnads = items => {
    if (items) {
        return items.map(item => {
            let subMenu = null;

            if (item.subMenuProps) {
                subMenu = item.subMenuProps.map(subItem => {
                    let subMenuItems;

                    if (utils.evaluateArray(subItem.subMenu)) {
                        subMenuItems = subItem.subMenu.map(subItem => ({
                            key: subItem.text,
                            name: subItem.text,
                            iconProps: {
                                iconName: subItem.iconName,
                            },
                            onClick: subItem.onClick,
                            disabled: subItem.disabled,
                            onRender: subItem.onRender,
                        }));
                    }

                    return {
                        key: subItem.text,
                        name: subItem.text,
                        iconProps: {
                            iconName: subItem.iconName,
                        },
                        onClick: subItem.onClick,
                        disabled: subItem.disabled,
                        onRender: subItem.onRender,
                        subMenuProps: subMenuItems && { items: subMenuItems },
                    };
                });
            }

            return {
                key: item.text,
                disabled: item.disabled,
                name: item.text,
                iconProps: {
                    iconName: item.iconName,
                },
                onRender: item.onRender,
                onClick: item.onClick,
                subMenuProps: subMenu && { items: subMenu },
            };
        });
    }

    return [];
}