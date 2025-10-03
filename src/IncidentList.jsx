import data from './assets/Incidents.json';
import Incident from './Incident.jsx';
import styles from './IncidentList.module.css';
import { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';
import { FormControl, Button } from '@mui/material';
function IncidentList({ Incidents, onAdd, onDelete }) {
    // const { darkmode } = useContext(ThemeContext);
    const theme = useContext(ThemeContext);
    const [form, setForm] = useState({
        incId: '',
        priority: '1',
        severity: 'low',
        status: 'open'

    })
    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAdd(form);
        setForm({ incId: "", priority: "low", severity: "1", status: "open" });
    }

    return (
        <>
            <div className={theme === "dark" ? styles.dark : styles.light}>
                <div>
                    <form onSubmit={handleSubmit} className={styles.forms} >
                        <label for="incId">Incident_Id:
                            <input type="text" id="incId" name="incId" placeholder='INC-11111' onChange={handleChange} />
                        </label>
                        <label for="priority">Priority:
                            <select id="priority" name="priority" onChange={handleChange}>
                                <option value="low">LOW</option>
                                <option value="medium">MEDIUM</option>
                                <option value="high">HIGH</option>
                                <option value="critical">CRITICAL</option>
                            </select>
                        </label>

                        <label for="severity">Severity:
                            <select id="severity" name="severity" onChange={handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </label>

                        <label for="status">Status:
                            <select id="status" name="status" onChange={handleChange}>
                                <option value="Open">Open</option>
                                <option value="Resolved">Resolved</option>
                                <option value="Under Process">Under Process</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </label>


                        <Button variant="contained" color="success" type='submit'>Save</Button>

                    </form>

                </div>


                <div className={styles.IncidentList}>
                    {Incidents.map((incident) => <Incident
                        key={incident.incident_id}
                        incident={incident}
                        handleClick={() => onDelete(incident.incident_id)}></Incident>)}
                </div>

            </div>



        </>

    )
}
export default IncidentList;