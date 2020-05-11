export const columnsSubjectTable = (handleEditClick, handleDeleteClick) => [
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
        label: 'subjectId',
        fieldName: 'subjectId',
        width: 110
    },
    {
        label: 'title',
        fieldName: 'title'
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