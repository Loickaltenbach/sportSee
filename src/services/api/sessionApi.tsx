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

export const GetUserSessionById = (userId: number) => {
    const [session, setSession] = React.useState<AverageSession>();
    const url = `http://localhost:3000/user/${userId}/average-sessions`

    axios.get(`${url}${userId}`)
        .then((response) => {
            const data = response.data;
            setSession(data);
        })
        .catch(error => console.error(error));
        return session?.data;
}