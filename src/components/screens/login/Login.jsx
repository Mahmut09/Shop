import React, { useState } from 'react'
import SignUp from './signUp/SignUp'
import SignIn from './signIn/SignIn';
import Styles from './Login.module.css'

const Login = () => {

    const [isRegistred, setIsRegistred] = useState(false);

    return (
        <div className={Styles.login}>
            {
                isRegistred ?
                    <SignIn />
                    :
                    <SignUp />
            }
        </div>
    )
}

export default Login