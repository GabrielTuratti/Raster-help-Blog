import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

export default function Release () {
    const Nav = () => {
        return (
           <nav className="site-navigation">
               <span>Help Blog</span>
               <ul>
                   <li>
                        <Link to="/"> home </Link>
                        <Link to="/adm"> Administração</Link>
                        <Link to="release"> Release</Link>
                        
                    </li>
                </ul>
            </nav>
        )
    }
   
return (
    <nav className='site-navigation'>
        <Nav/>
    </nav>
    )
}