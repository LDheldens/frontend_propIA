import React, { createContext, useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import api from "../settings/api";
import useSWR from "swr";
import Swal from "sweetalert2";
import { get } from "react-hook-form";

const UserContext = createContext();

const UserProvider = ({ children }) => {


    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(
        localStorage.getItem('AUTH_TOKEN_PROPIA') ? true : false
    );

    const register = async (data, setErrores) => {
        try {
            const response = await api.post('/auth/register/', data); 
            const {data:user} = response
            console.log(user)
            const {token,...userAuth} = user
            localStorage.setItem('AUTH_TOKEN_PROPIA',JSON.stringify(token))
            setUser(userAuth)
            setIsAuth(true)
            return true
        } catch (error) {
            if (error.response) {
                console.log(error.response.data)
                setErrores(Object.values(error.response.data))
            }

            return false
        };
    }

    const getUser = async () => {
        const token = localStorage.getItem('AUTH_TOKEN_PROPIA')
        console.log(token)
        try {
            const response = await api.get('/auth/profile/', {token});
            console.log(response)
            if (response.status === 200) {
                const data = response.data;
                setUser(data); // Suponiendo que setUser es una función que actualiza el estado del usuario en tu componente
            } else {
                console.error(`Error al obtener el usuario: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error fetching user:', error.message);
        }
    };

    useEffect(()=>{
        getUser()
    },[])

    return (
        <UserContext.Provider
            value={{
                register,
            }}
        >
        {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
