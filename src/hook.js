import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "./Slices/cartSlice";
import axios from "axios";
import { useState } from "react";


function axiosAuthConfig(method, token, url, body) {
    return {
        method: method,
        url: url,
        data: body,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}

export function useRetryCall(method) {
    const [loading, setLoading] = useState(false);
    const call = async (url, body) => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            return await axios.request(axiosAuthConfig(method, token, url, body));
        } catch (err) {
            const errorMessage = err?.response?.data?.message;
            console.log("Error message", err.response.data);
            if (errorMessage !== 'jwt expired') {
                throw err;
            }
            const refreshToken = localStorage.getItem('refresh-token');
            console.log("Refresh token", refreshToken);
            const response = await axios.post('http://localhost:4070/token', { token: refreshToken });
            console.log("from useRetryCall", response.data);
            const { new_access_token: newToken } = response.data;
            localStorage.setItem('token', newToken);
            return await axios.request(axiosAuthConfig(method, newToken, url, body));
        } finally {
            setLoading(false);
        }
    }
    return [loading, call];
}
export function usePatchCall(){
     const dispatch = useDispatch();
     const token = useSelector(state => state.auth.currentUser?.token);
     const makePatchRequest = (url, body) =>{
        axios.patch(url, body, {headers: {Authorization: `Bearer ${token}`}
        }).then(response =>{
            console.log("from usePatchCall", response);
            const items = response?.data?.cart || [];
            dispatch(setCartItems(items));
        }).catch(err => console.error(err)

        )
     }
     return makePatchRequest;

}

export function useDeleteCall(){
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.currentUser?.token);
    const makeDeleteRequest = (url, body) =>{
       axios.delete(url, {
            headers: 
            {
                Authorization: `Bearer ${token}`,
                data: body
            }  

       }).then(response =>{
            console.log("Headers token", token);
           const items = response?.data?.cart || [];
           dispatch(setCartItems(items));
           console.log("Success");
       }).catch(err => console.error(err)

    )}
    return makeDeleteRequest;
}
