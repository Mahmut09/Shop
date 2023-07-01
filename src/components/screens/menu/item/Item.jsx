import React, { useState } from 'react'
import Styles from './Item.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import ActiveMenu from '../activeMenu/ActiveMenu';

const Item = ({ title, thumbnail, categories }) => {

    if (!thumbnail) thumbnail = "./thumbnails/dozer.png";

    let activeItem = categories.length > 0 ? true : false;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div
            className={Styles.item}
            onClick={activeItem ? toggleMenu : null}
        >
            <img
                src={thumbnail}
                alt={title} />
            <span>
                {title}
            </span>
            { 
                activeItem ?
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    :
                    ""
            }
            {isOpen && (
                <ActiveMenu
                    categories={categories}
                />
            )}
        </div>
    )
}

export default Item