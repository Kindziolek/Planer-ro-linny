import { useEffect } from 'react';
import {
  useCallback,
  useState,
  createContext,
  useContext,
  useMemo,
} from 'react';
import data from '../plants.json';

const Context = createContext(data);

const readLocalStorage = (key) => {
  let state;
  try {
    state = JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    console.error(error);
    state = [];
  }

  return state;
};

const setLocalStorage = (key, value) => {
  let result;
  try {
    result = localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
    result = false;
  }

  return result;
};

export default function usePlants() {
  const context = useContext(Context);

  return context;
}

const localStorageKey = 'plants';

const PlantsProvider = ({ children }) => {
  const [plants, setPlants] = useState(readLocalStorage(localStorageKey));

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

  useEffect(() => {
    setLocalStorage(localStorageKey, plants);
  }, [plants]);

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
