import React from 'react'

import Grid from '../layout/grid'
import moment from 'moment'


export default props => (
    
    <Grid cols= {props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>  
            <input {...props.input} className={props.className} placeholder={props.placeholder}
            readOnly={props.readOnly} type={props.type} />
            
        </div>
    </Grid>
 )