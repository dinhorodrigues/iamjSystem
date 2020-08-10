import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search, showUpdate, showDelete } from './visitorsActions'
import { reduxForm } from 'redux-form'
import moment from 'moment'

import '../common/template/custom.css'





class VisitorsList extends Component {



    renderRows() {



        const list = this.props.list || []

        return list.map(visit => (
            <tr key={visit._id}>
                <td>{moment.utc(visit.dataCad).local("America/Recife").format("DD/MM/YYYY")}</td>
                <td>{visit.name}</td>
                <td>{visit.celular}</td>

                <td>
                    <button className='btn btn-light' onClick={() => this.props.showUpdate(visit)}>
                        <i className='fa fa-eye'></i>
                    </button>
                    <button className='btn btn-light' onClick={() => this.props.showDelete(visit)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }


    render() {
        return (

            <div>
                <div>

                    <table className='table table-striped'>
                        <thead>

                            <tr>
                                <th>Data Cadastro</th>
                                <th>Nome</th>
                                <th>Celular</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

VisitorsList = reduxForm({ form: 'visitorsList', destroyOnUnmount: false })(VisitorsList)
const mapStateToProps = state => ({ list: state.visitors.list })
const mapDispatchToProps = dispatch => bindActionCreators({ showUpdate, showDelete, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VisitorsList)