import React, { use } from 'react';

const Users2 = ({usersPromiss}) => {

    const users = use(usersPromiss)
    // console.log(users);
    
    return (
        <div>
            <p>this is users 2</p>

        </div>
    );
};

export default Users2;