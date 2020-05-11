export const columnsParentsTable = (handleEditClick, handleDeleteClick) => [
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
        label: 'firstName',
        fieldName: 'firstName',
    },
    {
        label: 'lastName',
        fieldName: 'lastName'
    },
    {
        label: 'identity',
        fieldName: 'parentIdentity'
    },
    {
        label: 'email',
        fieldName: 'email'
    },
    {
        label: 'address',
        fieldName: 'address'
    },
    {
        label: 'phone',
        fieldName: 'phone'
    },
    {
        label: 'status',
        fieldName: 'status'
    }
]