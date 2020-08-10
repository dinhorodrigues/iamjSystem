import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'


import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabContent from '../common/tab/tabContent'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import VisitorsList from './visitorsList'

import VisitorsForm from './visitorsForm'
import desabilitaEnter, { init, createVisitors, deleteVisitors, updateVisitors, search, changeName, } from './visitorsActions'



const URL = 'http://localhost:3001/api'

class Visitors extends Component {
    constructor(props) {
        super(props)

        this.refresh()

    }



    componentWillMount() {
        this.props.init()
        this.props.search()


    }


    refresh(name = '',) {

        const search = name ? `&name__regex=/${name}/` : ''
        axios.get(`${URL}/visitors?sort=+code${search}`)

            .then(resp => this.setState({ ...this.state, list: resp.data }))
            

    }


    render() {
        const { name, search } = this.props


        const keyHandler = (e) => {
            if (e.key === 'Enter') {
                this.props.search(name)
            }
        }
        //// desabilita o enter
        desabilitaEnter()

        return (
            <div>

                <ContentHeader title='Cadastro de Visitantes' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tablist' />
                            <TabHeader label='Incluir' icon='plus' target='tabcreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />

                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tablist'>
                                <form className='row' >
                                    <div className='form-group col-md-2'>
                                        <label htmlFor="tip">Tipo</label>
                                        <select id='tipoPesquisa' className='form-control'>
                                            <option>Escolha...</option>
                                            <option value="name">Nome</option>
                                            <option value="celular">Celular</option>
                                        </select>
                                    </div>
                                    <div className='form-group col-md-4'>
                                        <label htmlFor="pesqui">Pesquisa</label>
                                        <input id='pesquisa' onChange={this.props.changeName} onKeyUp={keyHandler}
                                            value={name} type="text" className="form-control" placeholder="Digite aqui a Pesquisa" />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inicial">Inicial </label>
                                        <input type="date" id='dataini' className='form-control' />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="final">Final </label>
                                        <input type="date" id='datafinal' className='form-control' />
                                    </div>

                                    <div className="input-group-btn col-md-4">
                                        <h2>
                                            <button className="btn btn-info" type='button'
                                                onClick={() => search(name)}  >
                                                <i className="fa fa-search"></i>Pesquisar</button>

                                        </h2>

                                    </div>


                                </form>
                                <VisitorsList />
                            </TabContent>
                            <TabContent id='tabcreate'>
                                <VisitorsForm onSubmit={this.props.createVisitors} labelSubmit='Incluir'
                                    submitClass='primary' submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <VisitorsForm onSubmit={this.props.updateVisitors}
                                    labelSubmit='Alterar' submitClass='info' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <VisitorsForm onSubmit={this.props.deleteVisitors} labelSubmit='Alterar'
                                 submitClass='danger' readOnly={true} />

                            </TabContent>
                        


                        </TabsContent>
                    </Tabs>
                </Content>

            </div>
        )
    }
}


const mapStateToProps = state => ({name: state.visitors.name })
const mapDispatchToProps = dispatch => bindActionCreators({
    init, createVisitors, deleteVisitors,
    updateVisitors, search, changeName
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Visitors)