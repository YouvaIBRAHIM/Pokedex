import { useSelector } from 'react-redux';
import styles from "../styles/PokemonDetail.module.css";

const PokemonStats = () => {
    const { pokemonInfos } = useSelector((state) => state.pokemonInfos);
    
    let hp, attack, defense, specialAttack, specialDefense, speed;
    if (pokemonInfos) {
        const pokemonStats = pokemonInfos.stats
         if (pokemonStats) {
            hp = pokemonStats[0].base_stat;
            attack = pokemonStats[1].base_stat;
            defense = pokemonStats[2].base_stat;
            specialAttack = pokemonStats[3].base_stat;
            specialDefense = pokemonStats[4].base_stat;
            speed = pokemonStats[5].base_stat;
        }
    }
   

    return (
        <div className={styles.wrapper}>
            <div className={styles.skill}>
                <p>HP</p>
                <div style={{width: hp+'%'}} className={`${styles.skillBar} ${styles.skill1} ${styles.wow} ${styles.slideInLeft} ${styles.animated}`}>
                    <span className={styles.skillCount1}>{hp}</span>
                </div>
            </div>
            <div className={styles.skill}>
                <p>Attack</p>
                <div style={{width: attack+'%'}} className={`${styles.skillBar} ${styles.skill2} ${styles.wow} ${styles.slideInLeft} ${styles.animated}`}>
                    <span className={styles.skillCount2}>{attack}</span>
                </div>
            </div>
            <div className={styles.skill}>
                <p>Defense</p>
                <div style={{width: defense+'%'}} className={`${styles.skillBar} ${styles.skill3} ${styles.wow} ${styles.slideInLeft} ${styles.animated}`}>
                    <span className={styles.skillCount3}>{defense}</span>
                </div>
            </div>
            <div className={styles.skill}>
                <p>Speed</p>
                <div style={{width: speed+'%'}} className={`${styles.skillBar} ${styles.skill4} ${styles.wow} ${styles.slideInLeft} ${styles.animated}`}>
                    <span className={styles.skillCount4}>{speed}</span>
                </div>
            </div>
            <div className={styles.skill}>
                <p>Sp Atk</p>
                <div style={{width: specialAttack+'%'}} className={`${styles.skillBar} ${styles.skill5} ${styles.wow} ${styles.slideInLeft} ${styles.animated}`}>
                    <span className={styles.skillCount5}>{specialAttack}</span>
                </div>
            </div>
            <div className={styles.skill}>
                <p>Sp Def</p>
                <div style={{width: specialDefense+'%'}} className={`${styles.skillBar} ${styles.skill6} ${styles.wow} ${styles.slideInLeft} ${styles.animated}`}>
                    <span className={styles.skillCount6}>{specialDefense}</span>
                </div>
            </div>
        </div>
    );
};

export default PokemonStats;