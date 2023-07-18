import React, { useState } from 'react'
import Styles from './Item.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import ActiveMenu from '../activeMenu/ActiveMenu';
import { useDispatch } from 'react-redux';

const Item = ({ title, thumbnail, categories, handleSetContainer }) => {

    if (!thumbnail) thumbnail = "./thumbnails/dozer.png";
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    let activeItem;
    if (activeItem) activeItem = categories.length > 0 ? true : false;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryClick = (e) => {
        const target = e.target;
        let categoryName;
        if (activeItem) {
            toggleMenu();
            activeItem = false;
            return;
        }
        handleSetContainer();
        if (target.tagName === "IMG") {
            categoryName = target.nextElementSibling.textContent;
            dispatch({ type: "SET_CATEGORY_NAME", payload: categoryName});
            return;
        }
        categoryName = target.textContent;
        dispatch({ type: "SET_CATEGORY_NAME", payload: categoryName });
    };

    return (
        <div
            className={Styles.item}
            onClick={handleCategoryClick}>
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
                    handleCategoryClick={handleCategoryClick}
                />
            )}
        </div>
    )
}

export default Item