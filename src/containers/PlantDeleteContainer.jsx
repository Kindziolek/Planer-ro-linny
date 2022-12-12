import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePlants from '../providers/Plants';

export default function PlantDeleteContainer() {
  const { id } = useParams();
  const { onDrop } = usePlants();
  const navigate = useNavigate();

  useEffect(() => {
    onDrop(Number(id));
    navigate('/');
  }, []);

  return null;
}
