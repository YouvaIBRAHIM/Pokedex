import { useState } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import PokemonAbilities from "./PokemonAbilities";
import PokemonStats from "./PokemonStats";

const styles = {
    container:{
        marginTop:'6rem',
    },
    slide: {
        padding: 15,
    },
};

function PokemonDetailSwiper({pokemonInfos, pokemonSpecies }) {
    const [index, setIndex] = useState(0);



    const handleChange = (event, value) => {
        setIndex(value);
    };

    const handleChangeIndex = index => {
        setIndex(index);
    };

    return (
      <div style={styles.container}>
        <Tabs centered value={index}  onChange={handleChange}>
          <Tab label="Profile" />
          <Tab label="Stats" />
          <Tab label="Evolution" />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
          <div style={styles.slide}><PokemonAbilities pokemonInfos={pokemonInfos} pokemonSpecies={pokemonSpecies} /></div>
          <div style={styles.slide}><PokemonStats pokemonStats={pokemonInfos.stats}/></div>
          <div style={styles.slide}>slide n°3</div>
        </SwipeableViews>
      </div>
    );
}

export default PokemonDetailSwiper;