import { useParams } from 'react-router-dom';
import usePlants from '../providers/Plants';
import styles from './PlantDetalisContainer.module.scss';

export default function PlantDeleteContainer() {
  const { id } = useParams();
  const { plants } = usePlants();

  const {
    name,
    dateOfPurchase,
    placeOfPurchase,
    price,
    safeOfAnimals,
    notes,
    photo,
    substrate,
    sizePot,
    sizePlant,
    newLeafDate,
    place,
    temperature,
    airHumidity,
    watering,
    wateringMetod,
    phSubstrate,
    lighting,
    reproduction,
    fretlizner,
    fretliznerDate,
    obserwations,
  } = plants.find((plant) => plant.id === Number(id)) || emptyForm;
  return (
    <div className={styles.detalis}>
      <h2 className={styles.detalis_header}>{name}</h2>
      <div className={styles.box}>
      <div className={styles.container}>
        {' '}
        <h3 className={styles.container_header}>Zakup</h3>
        <div className={styles.row}>
          <p className={styles.list}>Data</p>
          <p className={styles.plant}>{dateOfPurchase}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.list}>Miejsce</p>
          <p className={styles.plant}>{placeOfPurchase}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.list}>Cena</p>
          <p className={styles.plant}>{price}</p>
        </div>
      </div>
      <div className={styles.notes}>
        <p className={styles.list}>Notatki</p>
        <p className={styles.plant}>{notes}</p>
      </div>
      </div>
      {/* <div>
        <p className={styles.list}>Zdjęcie</p>
        <p className={styles.plant}>{photo}</p>
      </div> */}
      <div className={styles.box_left}>
      <div className={styles.container}>
        <h3 className={styles.container_header}>Aktualnie</h3>
        <div>
        <p className={styles.list}>Podłoże</p>
        <p className={styles.plant}>{substrate}</p>
      </div>
        <div>
          <p className={styles.list}>Rozmiar doniczki</p>
          <p className={styles.plant}>{sizePot}</p>
        </div>
        <div>
          <p className={styles.list}>Rozmiar rośliny</p>
          <p className={styles.plant}>{sizePlant}</p>
        </div>
      </div>
      <div className={styles.container_left}>
      <div>
        <p className={styles.list}>Data nowego liścia</p>
        <p className={styles.plant}>{newLeafDate}</p>
      </div>
      <div>
        <p className={styles.list}>Metoda rozmnażania</p>
        <p className={styles.plant}>{reproduction}</p>
      </div>
      <div>
        <p className={styles.list}>Bezpieczne dla zwierząt:</p>
        <p className={styles.plant}>{safeOfAnimals}</p>
      </div>
      </div>
      </div>
      <div className={styles.box}>
      <div className={styles.container}>
        <h3 className={styles.container_header}>Dobrze się czuje, jeśli mam:</h3>
        <div>
          <p className={styles.list}>Temperatura</p>
          <p className={styles.plant}>{temperature}</p>
        </div>
        <div>
          <p className={styles.list}>Nasłonecznienie</p>
          <p className={styles.plant}>{place}</p>
        </div>
        <div>
          <p className={styles.list}>Wilgotność powietrza</p>
          <p className={styles.plant}>{airHumidity}</p>
        </div>
        <div>
          <p className={styles.list}>pH podłoża</p>
          <p className={styles.plant}>{phSubstrate}</p>
        </div>
        </div>
      
    <div className={styles.a}>
      <div>
        <p className={styles.list}>Metoda podlewania</p>
        <p className={styles.plant}>{wateringMetod}</p>
      </div>
      <div>
        <p className={styles.list}>Częstotliwość podelwania</p>
        <p className={styles.plant}>{watering}</p>
      </div>

      <div>
        <p className={styles.list}>Doświetlanie</p>
        <p className={styles.plant}>{lighting}</p>
      </div>

      <div>
        <p className={styles.list}>Nawóz</p>
        <p className={styles.plant}>{fretlizner}</p>
      </div>
      <div>
        <p className={styles.list}>Data ostatniego nawożenia</p>
        <p className={styles.plant}>{fretliznerDate}</p>
      </div>
      </div>
      </div>
      <div>
      <div className={styles.notes}>
        <p className={styles.list}>Obserwacje</p>
        <p className={styles.plant}>{obserwations}</p>
      </div>
      </div>
    </div>
  );
}
