
import styles from './Home.module.css';
import data from './assets/Incidents.json';
import IncidentList from './IncidentList';
import Welcome1 from './Welcome1';
import {useState,useReducer, useContext } from 'react';// useState remove
import ThemeContext from './ThemeContext';
import {Routes,Route,Link} from 'react-router-dom';
//Its home method
function Home({ toggleDarkmode }) {
  // const [pageContent, setPageContent] = useState('Home');
  const [incidents, dispatch] = useReducer(incidentsReducer, data);

  const theme = useContext(ThemeContext);

  function handleClick(e) {
    setPageContent(e.target.innerText);
  }
  //Incident Reducer for switch casing for add and delete the methods
  function incidentsReducer(state, action) {
    switch (action.type) {
      case 'add':
        return [...state, action.payload];
      case 'delete':
        return state.filter(incident => incident.incident_id !== action.payload);
      default:
        return state;
    }
  }
  //delete method for deleteing the incidents
  function handleDelete(id) {
    dispatch({ type: 'delete', payload: id });
  }
  //add method for adding the incidents
  function handleAdd(newIncident) {
    dispatch({ type: 'add', payload: newIncident });
  }

  const user = {
    prefix: 'Mr',
    FirstName: 'Sudheer',
    LastName: 'Raghava',
    Time: '8 pm',
  };

  return (
    <>
      <div className={theme === "dark" ? styles.dark : styles.light}>
        <header className={styles.header}>
          <h2 className={styles.Info}>
            Hello {user.prefix} {user.FirstName} {user.LastName}
          </h2>
          <h3 className={styles.Info}>
            Time since last incident: {user.Time}
          </h3>

          <nav>
            <ul className={styles.navItem}>
              <Link to='/' className={styles.Link}>Home</Link>
              <Link to='/incidents' className={styles.Link}>Incidents</Link>
              {/* <li><button >Home</button></li>
              <li><button >Incidents</button></li> */}
              <button onClick={toggleDarkmode} className={styles.themes}>{theme} </button>
            </ul>

          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Welcome1 />} />
          <Route path='/incidents' element={<IncidentList Incidents={incidents} onAdd={handleAdd} onDelete={handleDelete} />} />
        </Routes>


        {/* {pageContent === 'Home' ? <Welcome1 /> : <IncidentList Incidents={incidents} onAdd={handleAdd} onDelete={handleDelete} />} */}
      </div>
    </>
  );
}

export default Home;
