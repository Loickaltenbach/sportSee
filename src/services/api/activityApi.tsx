import axios from "axios";
import React from "react";

interface Activity {
    data: {
        userId: number,
        sessions: [
            {
                day: string,
                kilogram: string,
                calories: number
            }
        ]
    }
}

export const UserActivityById = (userId: number) => {
    const [activity, setActivity] = React.useState<Activity>();

    React.useEffect(() => {
        GetUserActivityById(userId);
    }, [])

    const GetUserActivityById = (userId: number) => {
        const url = `http://localhost:3000/user/${userId}/activity`
    
        axios.get(`${url}`)
            .then((response) => {
                const data = response.data;
                setActivity(data);
                console.log('Activity', data);
            })
            .catch(error => console.error(error));
    }

    return activity;
}