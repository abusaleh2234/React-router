import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData()
    // console.log(users);
    
    return (
        <div>
            <p>this is users</p>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;