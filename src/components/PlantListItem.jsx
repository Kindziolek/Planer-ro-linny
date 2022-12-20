import { Link } from 'react-router-dom';
import styles from './PlantListItem.module.scss';

function PlantListItem({ id, name, photo }) {
  return (
    <div>
      <Link to={`/show/${id}`}>{name}</Link>
      <div className={styles.list_item}>
        <img className={styles.photo} src={photo} />
        <div className={styles.options}>
          <Link to={`/edit/${id}`}>Edycja</Link>
          <Link to={`/del/${id}`}>Usuń</Link>
        </div>
      </div>
    </div>
  );
}

export default PlantListItem;
