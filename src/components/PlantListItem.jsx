import { useCallback } from "react";

function PlantListItem({ id, name, onDrop, onEdit }) {
  const edit = useCallback(() => {
    onEdit(id);
  }, [id]);
  const drop = useCallback(() => {
    onDrop(id);
  }, [id]);

  return (
    <div>
      {name}
      <div>
        <span onClick={edit}>edycja</span>
        <span onClick={drop}>usun</span>
      </div>
    </div>
  );
}

export default PlantListItem;
