import React from 'react'
import Styles from '../signUp/SignUp.module.css'

const SignIn = ({ handleSubmit, handleInputChange }) => {
  return (
    <div className={Styles.container}>
            <h3>Войти в аккаунт</h3>

            <form onSubmit={(e) => {e.preventDefault();return handleSubmit("auth/login")}}>
                <input type="email" name='email' placeholder='Введите вашу почту' onChange={handleInputChange}/>
                {/* <input type="text" name='username' placeholder='Введите ваш ник' onChange={handleInputChange}/> */}
                <input type="password" name='password' autoComplete="password" placeholder='Придумайте пароль' onChange={handleInputChange}/>
                <button>Зарегистрироваться</button>
            </form>
        </div>
  )
}

export default SignIn