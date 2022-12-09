import { useCallback } from 'react';
import PlantListItem from '../components/PlantListItem';
import usePlants from '../providers/Plants';
import styles from './PlantListContainer.module.css';

function PlantListContainer() {
  const { plants, onDrop, onEdit } = usePlants();

  const listItems = plants.map(({ name, id }) => {
    return (
      <li key={id}>
        <PlantListItem id={id} name={name} onEdit={onEdit} onDrop={onDrop} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export default PlantListContainer;
