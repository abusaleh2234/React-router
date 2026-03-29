import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const userDetails = useLoaderData()
    const navigation = useNavigate()
    const {name, id, phone,  email,username,website} = userDetails
    
    return (
        <div>
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{username}</p><br />
            <small>{website}</small>
            
            <button onClick={() => navigation(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;