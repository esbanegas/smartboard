export const columnsGradesTable = (handleEditClick, handleDeleteClick) => [
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
        label: 'grade',
        fieldName: 'gradeId'
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