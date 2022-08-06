import {useState} from "react";
import styles from "../Tabs.module.css";
import PokemonProfile from "./PokemonProfile";
import PokemonStats from "./PokemonStats";
import PokemonEvolution from "./PokemonEvolution";

const Tabs = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className={styles.container}>
      <ul className={styles.tabList}>
        <li
          className={`${styles.tabs} ${getActiveClass(1, styles.activeTabs)}`}
          onClick={() => toggleTab(1)}
        >
          PROFILE
        </li>
        <li
          className={`${styles.tabs} ${getActiveClass(2, styles.activeTabs)}`}
          onClick={() => toggleTab(2)}
        >
          STATS
        </li>
        <li
          className={`${styles.tabs} ${getActiveClass(3, styles.activeTabs)}`}
          onClick={() => toggleTab(3)}
        >
          EVOLUTION
        </li>
      </ul>
      <div className={styles.contentContainer}>
        <div className={`${styles.content} ${getActiveClass(1, styles.activeContent)}`}>
            <PokemonProfile/>
        </div>
        <div className={`${styles.content} ${getActiveClass(2, styles.activeContent)}`}>
            <PokemonStats/>
        </div>
        <div className={`${styles.content} ${getActiveClass(3, styles.activeContent)}`}>
            <div style={styles.slide}></div>
            <PokemonEvolution/>
        </div>
      </div>
    </div>
  );
};

export default Tabs;