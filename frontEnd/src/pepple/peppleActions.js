import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

import moment from 'moment'






const URL = 'http://localhost:3001/api'


const INITIAL_VALUE = { cliente: [{}] }
let listaCep = {}


export const changeName = event => ({

    type: 'NAME_CHANGED',
    payload: event.target.value.toUpperCase()


})


export const search = (description = '') => {
    const search = description ? `&${tipo.value}__regex=/${description}/` : ''
    const request = axios.get(`${URL}/pepple?sort=+code${search}`)


    return {
        type: 'PESSOA_SEARCHED',
        payload: request
    }
}

export function createPepple(values) {

    return  botaoSubmit(values, 'post')
      
    
}
export function consultaCep(values) {
         return console.log(values)
   
}
function botaoConsulta(valor){
    const cepInformado = valor
    
    
}




export function updatePepple(values) {

    return botaoSubmit(values, 'put')
}
export function deletePepple(values) {
    return botaoSubmit(values, 'delete')
}


function botaoSubmit(values, method) {

    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${URL}/pepple/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}
export function showUpdate(pepple) {

    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('peppleForm', { ...pepple, dataNas: moment.utc(pepple.dataNas).local("BR").format("yyyy-MM-DD") })
    ]
}

export function showDelete(pepple) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('peppleForm', { ...pepple, dataNas: moment.utc(pepple.dataNas).local("BR").format("yyyy-MM-DD") })
    ]
}
export function init() {
    return [
        showTabs('tablist', 'tabcreate'),
        selectTab('tablist'),
        search(),

        initialize('peppleForm', INITIAL_VALUE)
    ]

}


export default function desabilitaEnter() {
    $('input').keypress(function (e) {
        var code = null;
        code = (e.keyCode ? e.keyCode : e.which);
        return (code == 13) ? false : true;
    })
}

export function viaCep() {
    //// faz o request
    const cep =
        fetch(`//viacep.com.br/ws/${cep}/json`)
            .then(response => {
                return response.json()
            })
            //// exibi a informação
            .then(data => {
                if (data.erro) {
                    alert('Cep Não Cadastrado na Base de Dados')
                    console.log(data)
                } else {
                    listaCep = [data]
                    console.log(listaCep)
                }
            })





}