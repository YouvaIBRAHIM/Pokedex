import React from 'react';
import styles from "../styles/Pokeball.module.css";

const Pokeball = () => {

    return (
        <div className={styles.pokeball}>
            <div className={styles.ballWrapper}>
                <div className={styles.lower}></div>
                <div className={styles.upper}></div>
            </div>
        </div>
    );
};

export default Pokeball;