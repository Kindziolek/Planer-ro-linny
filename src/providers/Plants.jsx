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

const phSubstrates = [
  'Bardzo kwaśny (poniżej 4,5)',
  'Kwaśny (4,5 - 5,5)',
  'Lekko kwaśny (5,6 - 6,5)',
  'Obojętny (6,6 - 7,2)',
  'Zasadowy (powyżej 7,3)',
  'Nie wiem (do sprawdzenia)'
];

const places= [
  'Bezpośrednie słonce',
  'Jasne o rozproszonym świetle',
  'Cieniste lub półcieniste',
]; 

const wateringMetods = [
  'Równomiernie na całej powierzchni',
  'Umieszczenie doniczki w naczyniu z wodą',
  'Dolewanie wody do podstawki',
];

const waterings = [
  'Dopiero gdy przeschnie lub kiedy higrometr wskazuje 3',
  'Utrzymywanie stale wilgotnego podłoża (higromentr między 4 a 6)'
]
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

export { PlantsProvider, phSubstrates, places, wateringMetods, waterings };
