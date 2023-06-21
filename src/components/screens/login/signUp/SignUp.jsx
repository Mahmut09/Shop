import React from 'react'
import Styles from './SignUp.module.css'

const SignUp = () => {
    return (
        <div className={Styles.container}>
            <h3>Зарегистрироваться</h3>

            <form>
                <input type="email" placeholder='Введите вашу почту' />
                <input type="text" placeholder='Введите ваш ник' />
                <input type="password" placeholder='Придумайте пароль' />
                <button>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default SignUp