import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'


const URL = 'http://localhost:3001/api'

const INITIAL_VALUE = {visitors: [{}]}

export const changeName = event => ({
         
    type: 'VISITORS_CHANGED',
    payload: event.target.value.toUpperCase()


})


export const search = (description = '') => {
    const search = description ? `&${tipoPesquisa.value}__regex=/${description}/` : ''
    console.log(search)
    const request = axios.get(`${URL}/visitors?sort=+code${search}`)
     return {
        type: 'VISITORS_SEARCHED',
        payload: request
    }
}

export function createVisitors(values){
    return BotaoSubmit(values,'post')
}
export function updateVisitors(values){
    return BotaoSubmit(values,'put')

}
export function deleteVisitors(values){
    return BotaoSubmit(values,'delete')
}

function BotaoSubmit(values, method){
    console.log(values)
    return dispatch => {
        const id =  values._id ? values._id : ''
        axios[method](`${URL}/visitors/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}
export function showUpdate(visitors){
    return[
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('visitorsForm',visitors)
    ]
}
export function showDelete(visitors){
    return[
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('visitorsForm',visitors)
    ]
}
export function init() {
    return [
        showTabs('tablist', 'tabcreate'),
        selectTab('tablist'),
        search(),

        initialize('visitorsForm', INITIAL_VALUE)
    ]

}
export default function desabilitaEnter() {
    $('input').keypress(function (e) {
        var code = null;
        code = (e.keyCode ? e.keyCode : e.which);
        return (code == 13) ? false : true;
    })
}