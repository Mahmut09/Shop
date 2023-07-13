import React from 'react'
import Styles from './ActiveMenu.module.css'

function ActiveMenu({ categories }) {
    return (
        <div className={Styles.container}>
            {
                categories.map(category => (
                    <div key={category.id} className={Styles.item}>
                        <img src={'./' + category.thumbnail} alt="#" />
                        <span>{category.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ActiveMenu