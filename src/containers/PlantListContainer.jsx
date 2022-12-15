import { Link } from 'react-router-dom';
import PlantListItem from '../components/PlantListItem';
import usePlants from '../providers/Plants';
import styles from './PlantListContainer.module.scss';

function PlantListContainer() {
  const { plants } = usePlants();

  const listItems = plants.map(({ name, id }) => {
    return (
      <li key={id}>
        <PlantListItem id={id} name={name} />
      </li>
    );
  });

  return (
    <div className={styles.plant_container}>
      <h2 className={styles.header}>Moje rośliny</h2>
      <ul className={styles.plant_list}>{listItems}</ul>
      <Link to="/add">Dodaj nową roślinę</Link>
    </div>
  );
}

export default PlantListContainer;
