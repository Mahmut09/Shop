import React, { useEffect } from 'react'

const Menu = () => {
    const URL = "http://127.0.1.1/db/db.json";

    useEffect(() => {
        async function fetchData() {
            const response = await getData(URL);
            console.log(response);
        };
        fetchData();
    }, []);

    const getData = async (url) => {
        const res = await fetch(url, {
            method: "GET",
            mode: "no-cors"
        });
        if (!res.ok) {
            return console.log("Error")
        }
        return await res.json();
    }
    

    return (
    <div></div>
  )
}

export default Menu