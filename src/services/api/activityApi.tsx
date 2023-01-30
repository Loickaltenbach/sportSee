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

export const GetUserActivityById = (userId: number) => {
    const [activity, setActivity] = React.useState<Activity>();
    const url = `http://localhost:3000/user/${userId}/activity`

    axios.get(`${url}${userId}`)
        .then((response) => {
            const data = response.data;
            setActivity(data);
        })
        .catch(error => console.error(error));
        return activity?.data;
}