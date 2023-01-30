import axios from "axios";
import React from "react";

interface Performance {
    data: {
        userId: number,
        kind: {
            1: "cardio",
            2: "energy",
            3: "endurance",
            4: "strength",
            5: "speed",
            6: "intensity"
        },
        data: [
            {
                value: number,
                kind: number,
            }
        ]
    }
}

export const GetUserPerformanceById = (userId: number) => {
    const [performance, setPerformance] = React.useState<Performance>();
    const url = `http://localhost:3000/user/${userId}/performance`

    axios.get(`${url}${userId}`)
        .then((response) => {
            const data = response.data;
            setPerformance(data);
        })
        .catch(error => console.error(error));
        return performance?.data;
}