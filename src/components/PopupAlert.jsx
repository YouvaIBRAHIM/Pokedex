import styles from "../styles/PokemonCard.module.css";

/**
 * Pop up d'alerte pour confirmer la suppression d'un pokemon du pokedex
 * @param {String} pokemonName nom du pokemon
 * @param {Function} onRemoveFromPokedex fonction qui supprime le pokemon du pokedex
 * @param {Function} setShowPopup fonction qui fait disparaitre la pop up
 * @returns 
 */
const PopupAlert = ({pokemonName, onRemoveFromPokedex, setShowPopup}) => {
    return (
        <>
            <div className={styles.modal}>
              <div className={styles.customBox}>
                <p>Do you really want to release {pokemonName} ?</p>
                <button onClick={onRemoveFromPokedex}>RELEASE</button>
                <button onClick={() => setShowPopup(false)}>CANCEL</button>
              </div>
          </div>
        </>
    );
};

export default PopupAlert;