import React from 'react';
import { Link, useNavigate, useNavigation } from 'react-router';

const User = ({user}) => {

   
    const {name, id, phone,  email} = user
    // console.log(user);
    const style = {
        border: "1px solid red",
        padding: "10px",
        margin: "10px"
    }
    return (
        <div style={style}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Details</Link>
            
        </div>
    );
};

export default User;