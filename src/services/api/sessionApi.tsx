import axios from "axios";
import React from "react";

interface AverageSession {
    data: {
        userId: number,
        sessions: [
            {
                day: string,
                sessionLength: number,
            }
        ]
    }
}

export const UserSessionById = (userId: number) => {
    const [sessions, setSessions] = React.useState<AverageSession>();

    React.useEffect(() => {
        GetUserSessionById(userId);
    }, [])


    const GetUserSessionById = (userId: number) => {
        const url = `http://localhost:3000/user/${userId}/average-sessions`
    
        axios.get(`${url}`)
            .then((response) => {
                const data = response.data;
                setSessions(data);
                console.log('Sessions', data);
            })
            .catch(error => console.error(error));
    }

    return sessions;
}