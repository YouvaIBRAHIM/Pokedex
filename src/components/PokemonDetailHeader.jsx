import styles from "../PokemonDetail.module.css";

export default function PokemonDetailHeader({ pokemonName, pokemonImage }) {
  return (
    <div className={styles.coverContainer}>
      <h1>{pokemonName}</h1>
      <div  className={styles.coverContent}>
        <img src={pokemonImage} alt={pokemonName} />
      </div>
    </div>
  )
}