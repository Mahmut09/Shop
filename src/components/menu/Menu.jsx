import React, { useEffect, useState } from 'react'
import Item from './item/Item';
import Styles from './Menu.module.css'
import HeaderMenu from '../header/items/HeaderMenu';
import { useSelector } from 'react-redux';

const Menu = ({ handleSetCart, handleSetLogin, handleSetContainer }) => {

    const [productСategories, setProductСategories] = useState([]);

    const URL = useSelector(state => state.URL);

    const getData = async () => {
        const res = await fetch(URL + "products/category", {
            method: "GET",
        });
        if (!res.ok) {
            throw new Error("Error");
        }
        return await res.json();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setProductСategories(data.categories);
            } catch (error) {
                console.log("Error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={Styles.menu}>
            {
                <HeaderMenu
                    handleSetCart={handleSetCart}
                    handleSetLogin={handleSetLogin}
                />
            }
            {
                productСategories ?
                    productСategories.map(category => (
                        <Item
                            key={category.id}
                            title={category.name}
                            thumbnail={category.thumbnail}
                            categories={category.subcategories}
                            handleSetContainer={handleSetContainer}
                        />
                    ))
                    :
                    "Категорий нет : ( "
            }
        </div>
    )
}

export default Menu