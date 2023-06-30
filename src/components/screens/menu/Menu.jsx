import React, { useEffect, useState } from 'react'
// import data from '../../../assets/db/db.json'
import Item from './item/Item';
import Styles from './Menu.module.css'
import { useSelector } from 'react-redux';

const Menu = () => {

    const [productСategories, setProductСategories] = useState([]);

    const URL = useSelector(state => state.URL);

    useEffect(() => {
        const data = fetchData();
        setProductСategories(data.categories);
    }, []);

    const fetchData = async () => {
        try {
            const response = await getData();
            console.log(response);
            return response;
        } catch (error) {
            console.log("Error:", error);
        }
    };

    const getData = async () => {
        const res = await fetch(URL + "products/category", {
            method: "GET",
        });
        if (!res.ok) {
            throw new Error("Error");
        }
        return await res.json();
    }

    return (
        <div className={Styles.menu}>
            {
                productСategories.map(category => (
                    <Item
                        key={category.id}
                        title={category.title}
                        thumbnail={category.thumbnail}
                        categories={category.categories}
                    />
                ))
            }
        </div>
    )
}

export default Menu