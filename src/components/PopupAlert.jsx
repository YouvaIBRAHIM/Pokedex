import styles from "../PokemonCard.module.css";

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