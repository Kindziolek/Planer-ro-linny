import { useCallback } from "react";
import PlantListItem from "../components/PlantListItem";
import usePlants from "../hooks/usePlants";
import styles from "./PlantListContainer.module.css";

function PlantListContainer() {
  const { plants, onDrop } = usePlants();

  const onEdit = useCallback((id) => {}, [plants]);

  const listItems = plants.map(({ name, id }) => {
    return (
      <li key={id}>
        <PlantListItem
          id={id}
          name={name}
          onEdit={onEdit}
          onDrop={onDrop}
        ></PlantListItem>
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export default PlantListContainer;
