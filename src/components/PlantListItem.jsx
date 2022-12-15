import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './PlantListItem.module.css'

function PlantListItem({ id, name }) {
  return (
    <div>
      {name}
      <div className={styles.test}>
        <Link to={`/edit/${id}`}>edycja</Link>
        <Link to={`/del/${id}`}>usun</Link>
      </div>
    </div>
  );
}

export default PlantListItem;
