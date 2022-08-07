import { useSelector } from 'react-redux';
import styles from "../styles/PokemonDetail.module.css";

const PokemonDescription = () => {
    const { pokemonSpecies } = useSelector((state) => state.pokemonInfos);
    const descriptions = [];

    if (pokemonSpecies) {

        for (let i = 0; i < pokemonSpecies.flavor_text_entries.length; i++) {
            const description = pokemonSpecies.flavor_text_entries[i].flavor_text;
            const isDescriptionAlreadyPushed = descriptions.find(desc => desc == description);
            if (pokemonSpecies.flavor_text_entries[i].language.name == 'en' && !isDescriptionAlreadyPushed) {
                descriptions.push(description)
            }
        }
    }


    return (
        <div className={styles.descriptionsContainer}>
            <ul>
            {
                descriptions.map((description, index) => {
                    return <li key={index}>{description}</li>
                })
            }
            </ul>
        </div>
    );
};

export default PokemonDescription;