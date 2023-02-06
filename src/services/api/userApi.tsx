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

export const UserDataById = (userId: number) => {
    const [user, setUser] = React.useState<User>();

    React.useEffect(() => {
        GetUserDataById(userId);
    }, [])

    const GetUserDataById = (userId: number) => {
        const url = "http://localhost:3000/user/"
    
        axios.get(`${url}${userId}`)
            .then((response) => {
                const data = response.data;
                setUser(data);
                console.log('User', data);
            })
            .catch(error => console.error(error));
    }

    return user;
}