import { useCallback } from 'react';
import { Link } from 'react-router-dom';

function PlantListItem({ id, name }) {
  return (
    <div>
      {name}
      <div>
        <Link to={`/edit/${id}`}>edycja</Link>
        <Link to={`/del/${id}`}>usun</Link>
      </div>
    </div>
  );
}

export default PlantListItem;
