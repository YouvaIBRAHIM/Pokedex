import React from 'react';
import styles from "../Pokeball.module.css";

const Pokeball = () => {

    return (
        <div className={`${styles.Reactemoji} ${styles.pokeball}`}>
            <div className={styles.ballWrapper}>
                <div className={styles.lower}></div>
                <div className={styles.upper}></div>
            </div>
        </div>
    );
};

export default Pokeball;