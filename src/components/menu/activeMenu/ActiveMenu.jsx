import React from 'react'
import Styles from './ActiveMenu.module.css'

function ActiveMenu({ categories, handleCategoryClick }) {
    
    return (
        <div className={Styles.container}>
            {
                categories.map(category => (
                    <div key={category.id} className={Styles.item} onClick={handleCategoryClick}>
                        <img src={categories.thumbnail ? './' + category.thumbnail : "./thumbnails/dozer.png"} alt="#" />
                        <span>{category.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ActiveMenu