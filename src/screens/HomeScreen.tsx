import React from 'react';
import getInstance from '../services/services';

const HomeScreen = () => {
    const user = getInstance.GetUserDataById(18);
    return (
        <div>
            <p>{user?.id}</p>
        </div>
    );
}

export default HomeScreen;