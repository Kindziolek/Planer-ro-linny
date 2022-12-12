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

  const onUpsert = useCallback((form) => {
    if (form.id) {
      setPlants((value) =>
        value.map((plant) => {
          return plant.id === form.id ? form : plant;
        })
      );
    } else {
      setPlants((value) => [
        ...value,
        {
          ...form,
          id: new Date().getTime(),
        },
      ]);
    }
  }, []);

  const onDrop = useCallback((id) => {
    setPlants((value) => value.filter((element) => element.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      plants,
      onUpsert,
      onDrop,
    }),
    [plants]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { PlantsProvider };
