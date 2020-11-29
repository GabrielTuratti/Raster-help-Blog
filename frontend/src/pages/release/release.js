import React, {useState , useEffect} from 'react';
import api from '../../services/api';
import './styles.css';

export default function Release () {
   const [releases, setRelease] = useState([]);

   const acesso = localStorage.getItem('SAB_TIPO');
 

    useEffect (() => {
        api.get('posts', {
            headers: {
                Authorization: acesso
            }
        }).then(response => {
            setRelease(response.data)
        })
    },[acesso]);

    return (
        <div className="profile-container" >
            <h1>ATT PRINCIPAIS</h1>

                {releases.map(release => (
                    <ul>
                        <li>
                            <strong>{release.titulo}</strong>                 
                            <p>{release.link}</p>
                            <p>{release.data}</p>
                    
                        </li> 
                     </ul>
                ))}
            
        </div> 
    )
}