import PlantListItem from '../components/PlantListItem';
import styles from './PlantListContainer.module.css';



function PlantListContainer({
    plants
}) {
    const listItems = plants.map((plant => {
    return (<li key={plant.name}><PlantListItem name={plant.name}></PlantListItem></li>
    )}))
    return (
       <ul>{listItems}</ul>
    )
  }
  
  export default PlantListContainer