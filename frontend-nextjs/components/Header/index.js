import React from 'react';
import {LinK} from 'router'

import 'index.css'

export default function Header(){
    return (
        <header className='gf-header'>
        <Link to ='/login'>
            Login
        </Link>
        </header>
    )
}