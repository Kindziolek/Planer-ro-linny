import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './PlantListItem.module.scss'

function PlantListItem({ id, name, photo }) {
  return (
    <div>
      {name}
      <div className={styles.list_item}>
        <img className={styles.photo} src={photo}/>
        <Link to={`/edit/${id}`}>edycja</Link>
        <Link to={`/del/${id}`}>usuń</Link>
      </div>
    </div>
  );
}

export default PlantListItem;
