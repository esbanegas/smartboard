
export const reducer = (state, action) => {
    switch (action.type) {
        case 'USER_ACTION':
            return { ...state, ...action.payload }

        default:
            return state;
    }
}