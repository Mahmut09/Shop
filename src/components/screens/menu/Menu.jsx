import React, { useEffect, useState } from 'react'
import data from '../../../assets/db/db.json'
import Item from './item/Item';
import Styles from './Menu.module.css'

const Menu = () => {

    const [productСategories, setProductСategories] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await getData(URL);
    //         console.log(response);
    //     } catch (error) {
    //         console.log("Error:", error);
    //     }
    // };

    const fetchData = async () => {
        try {
            setProductСategories(data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    const getData = async (url) => {
        const res = await fetch(url, {
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