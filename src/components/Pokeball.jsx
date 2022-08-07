import React from 'react';
import styles from "../styles/Pokeball.module.css";

const Pokeball = ({loader}) => {

    return (
        <div className={styles.pokeball}>
            <div className={loader == true ? `${styles.loader}`  : `${styles.ballWrapper}`}>
                <div className={loader == true ? `${styles.lowerLoader}`  : `${styles.lower}`}></div>
                <div className={loader == true ? `${styles.upperLoader}`  : `${styles.upper}`}></div>
            </div>
        </div>
    );
};

export default Pokeball;