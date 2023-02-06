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

export const UserPerformanceById = (userId: number) => {
    const [performance, setPerformance] = React.useState<Performance>();

    React.useEffect(() => {
        GetUserPerformanceById(userId);
    }, [])

    const GetUserPerformanceById = (userId: number) => {
        const url = `http://localhost:3000/user/${userId}/performance`
    
        axios.get(`${url}`)
            .then((response) => {
                const data = response.data;
                setPerformance(data);
                console.log('Performance', data);
            })
            .catch(error => console.error(error));
    }

    return performance;
}