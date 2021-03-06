import React, { Component } from 'react'

import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import labelAndInput from '../common/form/labelAndInput'
import selectedIput from '../common/form/selectedIput'
import desabilitaEnter, { init, consultaCep } from './peppleActions'



desabilitaEnter()




class PeppleForm extends Component {
 

    
  
    render() {
        desabilitaEnter()
        
        
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}  >

                <div className="box-body cad">


                    <Field name='code' component={labelAndInput} label='Código' cols='12 1' className='form-control' placeholder='Código' readOnly={readOnly} />
                    <Field name='name' component={labelAndInput} label='Nome Completo' cols='12 3' className='form-control' placeholder='Nome' readOnly={readOnly} />
                    <Field name='cpf' component={labelAndInput} label='CPF' cols='12 2' className='form-control' placeholder='090.585.494-84' readOnly={readOnly} />
                    <Field name='rg' component={labelAndInput} label='RG' cols='12 2' className='form-control' placeholder='RG' readOnly={readOnly} />

                    <Field name='dataNas' type='date' component={labelAndInput} label='Data Nascimento' cols='12 2' className='form-control' placeholder='01/03/1990' readOnly={readOnly} />

                    <Field name='sexo' component={selectedIput} label='Sexo' cols='12 2' readOnly={readOnly} />
                    <Field name='celular' component={labelAndInput} label='Celular' cols='12 2' className='form-control' placeholder='Celular' readOnly={readOnly} />
                    <Field name='email' component={labelAndInput} label='E-mail' cols='12 3' className='form-control' placeholder='exemplo@exemplo.com' readOnly={readOnly} />

                    <Field id='cep'name='cep' component={labelAndInput} label='Cep' cols='12 2' className='form-control'
                        placeholder='exemplo 58400940' readOnly={readOnly} />
                    <Field name='logradouro' id='logradouro' component={labelAndInput} label='Endereço' cols='12 3' className='form-control' placeholder='Av. das laranjeiras' readOnly={readOnly} />
                    <Field name='numCasa' component={labelAndInput} label='Número' cols='12 2' className='form-control' placeholder='800' readOnly={readOnly} />
                    <Field name='complemento' component={labelAndInput} label='Complemento' cols='12 2' className='form-control' placeholder='Bloco / Apart.' readOnly={readOnly} />
                    <Field name='bairro' id='bairro' component={labelAndInput} label='Bairro' cols='12 3' className='form-control' placeholder='Jardim Botânico' readOnly={readOnly} />
                    <Field name='localidade' id='localidade' component={labelAndInput} label='Cidade' cols='12 3' className='form-control' placeholder='João Pessoa-PB' readOnly={readOnly} />
                    <Field name='referen' component={labelAndInput} label='Ponto de referência' className='form-control' cols='12 4' placeholder='Ex. Padaria Vitória' readOnly={readOnly} />

                  

                </div>


                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}><i className='fa fa-upload'>
                    </i> {this.props.labelSubmit} </button>

                    <button type='button' className={`btn btn-secondary`} onClick={this.props.init}><i className='fa fa-power-off'>
                    </i> Cancelar</button>
                   
                </div>
              


            </form>
            

)
}

}
PeppleForm = reduxForm({ form: 'peppleForm', destroyOnUnmount: false })(PeppleForm) 
const selecetor = formValueSelector('peppleForm')

const mapStateToProps = state => ({cliente: selecetor(state, 'cliente')})

const mapDispatchToProps = dispatch => bindActionCreators({ init,consultaCep}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PeppleForm)