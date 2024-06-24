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

    // funciones de authenticación
    const register = async (data, setErrores) => {
        try {
            const response = await api.post('/auth/register/', data); 
            const {data:user} = response
            console.log(user)
            const {token,...userAuth} = user
            localStorage.setItem('AUTH_TOKEN_PROPIA',token)
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
    const login = async (data) =>{
        try {
            const response = await api.post('/auth/login/',data)
            console.log(response)
        } catch (error) {
            if (error.response) {
                console.log(error.response.data)
            }
        }
    }

    const logout = async () =>{
        const token = localStorage.getItem('AUTH_TOKEN_PROPIA');
        try {
            const response = await api.post('/auth/logout/',{},{
                headers:{
                    Authorization: `Token ${token}`
                }
            }); 
            
            console.log(response)
        } catch (error) {
            console.error(error)
        };
    }

    // funcion para obtener al usurio authenticado
    const getUser = async () => {
        const token = localStorage.getItem('AUTH_TOKEN_PROPIA');
        console.log(token);
        try {
            const response = await api.get('/auth/profile/', {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
            console.log(response);
            if (response.status === 200) {
                const data = response.data;
                setUser(data);
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
                isAuth,
                logout,
                login
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
