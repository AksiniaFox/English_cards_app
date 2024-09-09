
import { Dispatch } from "redux";
import serverAuth from "../api/api";

export const setAuth = (bool: boolean) => ({
    type: 'SET_AUTH',
    payload: bool
})

export const setUser = (user: any) => ({
    type: 'SET_USER',
    payload: user
})


export const setLoading = (bool: boolean) => ({
    type: 'SET_LOADING',
    payload: bool
})


export const checkAuth = () => (dispatch: Dispatch) => {
    dispatch(setLoading(true) );
    const token :string|null = localStorage.getItem('token');
    const email :string|null = localStorage.getItem('email');
    if (token) {
        dispatch(setAuth(true));
        dispatch(setUser({ email }));
        dispatch(setLoading(false));
        return true;
    }
    dispatch(setLoading(false));
    return false;
}

export const logout = () => (dispatch: Dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    dispatch(setAuth(false));
    dispatch(setUser({}));
};

export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));


    const res = await serverAuth(email,password)

    console.log(res);
    
    if (!res) {
        dispatch(setLoading(false));
        return false
    }
    localStorage.setItem('token', 'true') ;
    localStorage.setItem('email', email) ;
    dispatch(setAuth(true));
    dispatch(setUser({ email }));
    dispatch(setLoading(false));
    return true;
}