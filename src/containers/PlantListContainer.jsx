import { Link } from 'react-router-dom';
import PlantListItem from '../components/PlantListItem';
import usePlants from '../providers/Plants';
import styles from './PlantListContainer.module.css';

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
    <div>
      <ul>{listItems}</ul>
      <Link to="/add">Dodaj nową roślinę</Link>
    </div>
  );
}

export default PlantListContainer;
