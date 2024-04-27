import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
    const reDirectToExpense = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);

        const authInfo = {
            userID: result.user.uid,
            name: result.user.displayName,
            profilePhoto: result.user.photoURL,
            isAuth: true
        };

        localStorage.setItem("auth", JSON.stringify(authInfo));
        reDirectToExpense('/expense-tracker');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <div className="mt-8">
                    <div className="flex justify-center">
                        <button onClick={signInWithGoogle} type="button" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
