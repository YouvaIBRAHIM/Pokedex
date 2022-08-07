import { useSelector } from 'react-redux';
import styles from "../styles/PokemonDetail.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons'

/**
 * 
 * @returns les caractéristiques du pokemon 
 */
const PokemonProfile = () => {
    const { pokemonInfos, pokemonSpecies } = useSelector((state) => state.pokemonInfos);
    const eggGroupsName = [];
    const abilitiesName = [];
    let female_ratio,male_ratio;

    if (pokemonSpecies) {
        //calcule le ratio male/femelle du pokemon
        female_ratio = (pokemonSpecies.gender_rate / 8) * 100
        male_ratio = 100 - female_ratio
        
        const eggGroups = pokemonSpecies.egg_groups;

        if (eggGroups) {
            for (let i = 0; i < eggGroups.length; i++) {
                const eggGroup = eggGroups[i];
                const eggGroupName = eggGroup.name;
                eggGroupsName.push(eggGroupName)
            }
        }
    }

    if (pokemonInfos) {
        const abilities = pokemonInfos.abilities;
        if (abilities) {
            for (let i = 0; i < abilities.length; i++) {
                const ability = abilities[i];
                const abilityName = ability.ability.name;
                abilitiesName.push(abilityName)
            }
        }
    }

    return (
        <div className={styles.tablesContainer}>
            <div>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trContainer} >
                            <th scope="row">Height</th>
                            <td>{pokemonInfos && pokemonInfos.height/10} m</td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">Weight</th>
                            <td>{pokemonInfos && pokemonInfos.weight/10} kg</td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">Egg Groups</th>
                            <td className={styles.eggGroups}>{eggGroupsName.join(', ')}</td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">Abilities</th>
                            <td className={styles.abilities}>{abilitiesName.join(', ')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trContainer} >
                            <th scope="row">Habitat</th>
                            <td>{pokemonSpecies && pokemonSpecies.habitat.name}</td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">Catch Rate</th>
                            <td>{pokemonSpecies && pokemonSpecies.capture_rate}%</td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">Base Happiness</th>
                            <td>{pokemonSpecies && pokemonSpecies.base_happiness}%</td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">Gender Ration</th>
                            <td>{male_ratio}% <FontAwesomeIcon icon={faMars}/>  {female_ratio}% <FontAwesomeIcon icon={faVenus} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PokemonProfile;