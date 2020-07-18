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
        width: 170
    },
    {
        label: 'title',
        fieldName: 'title',
        width: 170
    },
    {
        label: 'description',
        fieldName: 'description',
        width: 300
    },
    {
        label: 'status',
        fieldName: 'status',
        width: 170
    }
]