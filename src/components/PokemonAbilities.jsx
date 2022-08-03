import styles from "../PokemonDetail.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons'

const PokemonAbilities = ({ pokemonInfos, pokemonSpecies }) => {

    const eggGroups = pokemonSpecies.egg_groups;
    const eggGroupsName = [];
    if (eggGroups) {
        for (let i = 0; i < eggGroups.length; i++) {
            const eggGroup = eggGroups[i];
            const eggGroupName = eggGroup.name.charAt(0).toUpperCase() + eggGroup.name.slice(1);
            eggGroupsName.push(eggGroupName)
        }
    }

    const abilities = pokemonInfos.abilities;
    const abilitiesName = [];
    if (abilities) {
        for (let i = 0; i < abilities.length; i++) {
            const ability = abilities[i];
            const abilityName = ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1);
            abilitiesName.push(abilityName)
        }
    }


    return (
        <div className={styles.tablesContainer}>
            <div>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trContainer} >
                            <th scope="row">Height</th>
                            <td>{pokemonInfos.height/10} m</td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">Weight</th>
                            <td>{pokemonInfos.weight/10} kg</td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">Egg Groups</th>
                            <td>{eggGroupsName.join(', ')}</td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">Abilities</th>
                            <td>{abilitiesName.join(', ')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trContainer} >
                            <th scope="row">Catch Rate</th>
                            <td>{pokemonSpecies.capture_rate} %</td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">Gender Ration</th>
                            <td>87.5% <FontAwesomeIcon icon={faMars}/>  12.5% <FontAwesomeIcon icon={faVenus} /></td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">Hatch Steps</th>
                            <td>5100</td>
                        </tr>
                        <tr className={styles.trContainer} >
                            <th scope="row">EVs</th>
                            <td>3 Sp Att</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PokemonAbilities;