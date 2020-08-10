const INITIAL_STATE = {name: '', list: [] }


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'VISITORS_CHANGED':
            return{...state, name: action.payload}

        case 'VISITORS_SEARCHED':

            return { ...state, list: action.payload.data }
        default:
            return state
    }

} 