import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "./Slices/cartSlice";
import axios from "axios";

export function usePatchCall(){
     const dispatch = useDispatch();
     const token = useSelector(state => state.auth.currentUser?.token);
     const makePatchRequest = (url, body) =>{
        axios.patch(url, body, {headers: {Authorization: `Bearer ${token}`}
        }).then(response =>{
            console.log("from usePatchCall", response);
            const items = response?.data?.cart || [];
            dispatch(setCartItems(items));
            // console.log("Success");
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
