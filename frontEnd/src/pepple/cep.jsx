import React from  'react'
import Grid from '../common/layout/grid'




export default props => (
    <div>
        <Grid cols='12 2'>
            <input id='valor' className ='form-control' placeholder='58989-993' value={props.valor} 
            onChange={props.handleChange}></input>
            <button type='button' onClick={props.onClick}>Pesquisar</button>

        </Grid>
    </div>
)