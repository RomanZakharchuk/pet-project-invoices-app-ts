import { useAppDispatch, useAppSelector } from "./redux.hook";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { removeUser, setUser } from "../redux/slices/user.slice";
import { FirebaseError } from '@firebase/util'
import { useNavigate } from 'react-router-dom';

export function useAuth() {
    const [error, setError] = useState<null | FirebaseError>();
    const { email, id } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const auth = getAuth();

    const signUp = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid
                }));

                // @ts-ignore
                localStorage.setItem('token', user.accessToken);
                navigate('/dashboard/invoice');
            })
            .catch((error) => setError(error));
    };

    const signIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid
                }));

                // @ts-ignore
                localStorage.setItem('token', user.accessToken);
                navigate('/dashboard/invoice');
            })
            .catch((error) => setError(error));
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                localStorage.removeItem('token');
            })
            .catch((error) => setError(error));
    };

    return {
        email,
        id,
        signIn,
        signUp,
        error,
        setError,
        logOut
    };
}