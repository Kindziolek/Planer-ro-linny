import { Link } from 'react-router-dom';
import styles from './test.module.scss';
import EditIcon from './EditIcon';
import TrashIcon from './TrashIcon';


const defaultPhoto =
  'https://img.freepik.com/vector-premium/coleccion-ilustraciones-plantas-interior_464940-31.jpg?w=2000';


function PlantListItem({ id, name, photo }) {
  return (
    <div>
      <Link to={`/show/${id}`}>{name}</Link>
      <div className={styles.list_item}>
        <img className={styles.photo} src={photo || defaultPhoto} />
        <div className={styles.options}>
          <Link to={`/edit/${id}`}>
            <EditIcon />
          </Link>
          <Link to={`/del/${id}`}>
            <TrashIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlantListItem;
