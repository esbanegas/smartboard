export const columnsTeachersTable = (handleEditClick, handleDeleteClick) => [
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
        fieldName: 'teacherIdentity'
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