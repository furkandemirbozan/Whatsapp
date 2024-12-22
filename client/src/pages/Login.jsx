import React from 'react'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
const Login = () => {

    const dispatch = useDispatch();



    const singInGoogleFunc = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("Firebase User:", user);
                dispatch({ type: 'LOGIN', payload: user })
                console.log(result, "result")
            }).catch((error) => {
                console.log("denemee hata", error)

            });


    }
    return (
        <div className='h-screen bg-gray-50 flex items-center justify-center'>
            <div className='w-1/3 h-2/3 bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center space-y-4'>
                <img className='w-48' src="https://thumbs.dreamstime.com/b/basic-rgb-134797129.jpg" alt="logowp" />
                <div className='font-bold text-3xl'>WhatsApp Login Page</div>
                <div onClick={singInGoogleFunc} className='border p-2 rounded-lg bg-green-600 text-white cursor-pointer hover:opacity-90'>Google ile Giriş Yap</div>
            </div>
        </div>
    )
}

export default Login