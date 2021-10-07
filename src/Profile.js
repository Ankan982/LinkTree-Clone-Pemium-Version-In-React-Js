import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import './profile.css';


function Profile() {
    
    return (
        <div className="logo">
           
            <div className="profile__pic">
                 <Avatar style={{ height: '100px', width: '100px' }} 
                 alt="Avatar Image" 
                src= {'./dp.jpg'} />
                
            </div>
            
            <div  className="user__name">
                  <h2>Ankan Das</h2>
            </div> 
       
        
        </div>
    )
}

export default Profile
