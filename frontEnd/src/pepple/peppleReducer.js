/* o reducer rescebe o estado atual e recebe uma actions e sempre que for execultada
os reducers sao chamados e eu digo se eu quero mudar o estado ou se quero deicar como estar


*/
const INITIAL_STATE = { name: '',cep:'', list: [] }


export default (state = INITIAL_STATE, action) => {
   
   /// se a ação for algun dos case evolue o estado 
    switch (action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload}
        case 'CEP_CHANGED':
            return {...state, cep: action.payload}
                   
        case 'PESSOA_SEARCHED':
            return { ...state, list: action.payload.data }

        default:

            return state

    }

}