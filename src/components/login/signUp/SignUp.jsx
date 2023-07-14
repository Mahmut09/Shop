import React from 'react'
import Styles from './SignUp.module.css'

const SignUp = ({ handleSubmit, handleInputChange, handleSetRegister }) => {
    return (
        <div className={Styles.container}>
            <h3>Зарегистрироваться</h3>

            <form onSubmit={(e) => {e.preventDefault();return handleSubmit("auth/register")}}>
                <input type="email" name='email' placeholder='Введите почту' onChange={handleInputChange}/>
                <input type="text" name='username' placeholder='Введите имя' onChange={handleInputChange}/>
                <input type="text" name='password' autoComplete="password" placeholder='Придумайте пароль' onChange={handleInputChange}/>
                <button>Зарегистрироваться</button>
                
                <span onClick={() => handleSetRegister()}>У меня есть аккаунт</span>
            </form>
        </div>
    )
}

export default SignUp