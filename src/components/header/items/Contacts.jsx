import React from "react";
import styles from '../Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <a href='tel:+77777777'>
                <FontAwesomeIcon icon={faPhone} />
                +7( 777 ) 777-77-77
            </a>
        </div>
    );
};

export default Contacts;
