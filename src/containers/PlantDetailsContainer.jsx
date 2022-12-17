import { useParams } from 'react-router-dom';
import usePlants from '../providers/Plants';
import styles from './PlantDetalisContainer.module.scss';

export default function PlantDeleteContainer() {
  const { id } = useParams();
  const { plants } = usePlants();

  const plant = plants.find((plant) => plant.id === Number(id)) || emptyForm;
  return <span>hellllooo</span>;
}
