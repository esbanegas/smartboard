export const columnsSectionsTable = (handleEditClick, handleDeleteClick) => [
    {
        // onRenderCell: onRenderAction,
        actions: [{
            type: 'edit',
            onClick: handleEditClick
        },
        {
            type: 'delete',
            onClick: handleDeleteClick
        }],
        width: 100
    },
    {
        label: 'name',
        fieldName: 'name'
    },
    {
        label: 'description',
        fieldName: 'description'
    },
    {
        label: 'status',
        fieldName: 'status'
    }
]