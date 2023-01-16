import axios from "axios";
import React from "react";

interface User {
    data: {
        id: number,
        userInfos: {
            firstName: string,
            lastname: string,
            age: number
        },
        score: number,
        keyData: {
            calorieCount: number,
            proteinCount: number,
            carbohydrateCount: number,
            lipidCount: number
        }
    }
}

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

const GetUserDataById = (userId: number) => {
    const [user, setUser] = React.useState<User>();
    const url = "http://localhost:3000/user/"

    axios.get(`${url}${userId}`)
        .then((response) => {
            const data = response.data;
            setUser(data);
        })
        .catch(error => console.error(error));
        return user?.data;
}

const GetUserActivityById = (userId: number) => {
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

const getInstance = {
    GetUserDataById,
    GetUserActivityById,
}

export default getInstance;
