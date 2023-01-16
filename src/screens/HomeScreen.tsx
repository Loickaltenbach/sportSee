import React from 'react';
import getInstance from '../services/services';

const HomeScreen = () => {
    const user = getInstance.GetUserDataById(18);
    const activity = getInstance.GetUserActivityById(18);
    return (
        <div>
            <p>{user?.score}</p>
            <p>{activity?.sessions[0].day}</p>
        </div>
    );
}

export default HomeScreen;