import {
  useCallback,
  useState,
  createContext,
  useContext,
  useMemo,
} from 'react';
import data from '../plants.json';

const Context = createContext(data);

export default function usePlants() {
  const context = useContext(Context);

  return context;
}

const PlantsProvider = ({ children }) => {
  const [plants, setPlants] = useState(data);

  const onSend = useCallback((plant) => {
    setPlants((value) => [
      ...value,
      {
        ...plant,
        id: new Date().getTime(),
      },
    ]);
  }, []);

  const onDrop = useCallback((id) => {
    setPlants((value) => value.filter((element) => element.id !== id));
  }, []);

  const onEdit = useCallback((id) => {
    setPlants((value) => value.filter((element) => element.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      plants,
      onSend,
      onDrop,
      onEdit,
    }),
    [plants]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { PlantsProvider };
