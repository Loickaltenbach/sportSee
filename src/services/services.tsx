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

const GetUserSessionById = (userId: number) => {
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

const GetUserPerformanceById = (userId: number) => {
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

const getInstance = {
    GetUserDataById,
    GetUserActivityById,
    GetUserSessionById,
    GetUserPerformanceById,

}

export default getInstance;
