/*
import React from 'react';
import {Link, Route, Router} from 'react-router-dom';

const navLinks = [
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Release',
        path:'/release'
    },
    {
        title:'Adm',
        path:'/adm'
    }
]
export default function Navigation () {
    return (
    <nav className='site-navigation'>
        <span> Help Blog</span>

        <ul>
            { navLinks.map((link, index) =>( 

                <li key={index}>
                    <Router>
                        <Route>
                            <Link to={link.path}> {link.title} </Link>
                        </Route>
                    </Router>
                </li>
            ))}
        </ul>
    </nav>
    )
};

*/