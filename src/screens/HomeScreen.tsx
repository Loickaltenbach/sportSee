import React from 'react';
import getInstance from '../services/services';

const HomeScreen = () => {
    const user = getInstance.GetUserDataById(18);
    return (
        <div>
            
        </div>
    );
}

export default HomeScreen;