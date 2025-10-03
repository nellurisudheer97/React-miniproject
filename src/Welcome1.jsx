import { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import styles from './Welcome.module.css';
import axios from 'axios';
function Welcome1() {
  const [data, setData] = useState();
  const { darkmode } = useContext(ThemeContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        let results = await axios.get('https://api.chucknorris.io/jokes/random', { signal });
        setData(results.data.value);
      } catch (err) {
        console.error(err);
      }

      return () => {
        controller.abort();
      }
    }
    fetchData();

  }, []);


  return (
    <div className={styles.homeC}>
      <h2>Welcome to Home Page</h2>
      <h3>Here the Random Jokes are.....</h3>
      <p>{data}</p>
    </div>
  );
}

export default Welcome1;
