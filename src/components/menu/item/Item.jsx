import React from 'react'
import Styles from './Item.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import ActiveMenu from '../activeMenu/ActiveMenu';
import { useDispatch } from 'react-redux';

const Item = ({ title, thumbnail, categories }) => {

    if (!thumbnail) thumbnail = "./thumbnails/dozer.png";
    const dispatch = useDispatch();


    let activeItem = categories.length > 0 ? true : false;
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };

    const handleCategoryClick = (e) => {
        const categoryName = e.target.textContent 
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
            {/* {isOpen && (
                <ActiveMenu
                    categories={categories}
                />
            )} */}
        </div>
    )
}

export default Item