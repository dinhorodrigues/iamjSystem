import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'


export default props =>(
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='dashboard'/>
        <MenuTree label='Cadastro' icon='edit'>
             <MenuItem path='billingCycles' label='Entradas e Saídas' icon='usd'/>
             <MenuItem path='pepple' label='Membros' icon='address-book'/>
             <MenuItem path='visitors' label='Visitantes' icon='users'/>
        </MenuTree>
        

    </ul>
)