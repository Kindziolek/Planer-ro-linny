import { useParams } from 'react-router-dom';
import usePlants, {
  phSubstrates,
  places,
  wateringMetods,
  waterings,
} from '../providers/Plants';
import { Link } from 'react-router-dom';
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
    fretilizerDate,
    observations,
  } = plants.find((plant) => plant.id === Number(id)) || emptyForm;
  return (
    <div className={styles.detalis}>
      <h2 className={styles.detalis_header}>{name}</h2>
      <div className={styles.box}>
        <div className={styles.container}>
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
      <div className={photo}>
        <img className={styles.photo} src={photo} />
      </div>
      <div className={styles.box}>
        <div className={styles.container_text}>

          <div className={styles.row}>
            <p className={styles.list}>Data nowego liścia</p>
            <p className={styles.plant}>{newLeafDate}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.list}>Metoda rozmnażania</p>
            <p className={styles.plant}>{reproduction}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.list}>Bezpieczne dla zwierząt:</p>
            <p className={styles.plant}>{safeOfAnimals ? 'Tak' : 'Nie'}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.list}>Podłoże</p>
            <p className={styles.plant}>{substrate}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.list}>Rozmiar doniczki</p>
            <p className={styles.plant}>{sizePot}cm</p>
          </div>
          <div className={styles.row}>
            <p className={styles.list}>Rozmiar rośliny</p>
            <p className={styles.plant}>{sizePlant}cm</p>
          </div>
          <div className={styles.row}>
            <p className={styles.list}>Data ostatniego nawożenia</p>
            <p className={styles.plant}>{fretilizerDate}</p>
          </div>
        </div>
        <div className={styles.container}>
          <h3 className={styles.container_header}>Jak o mnie dbać:</h3>
          <div className={styles.row}>
            <p className={styles.list}>Metoda podlewania</p>
            <p className={styles.plant}>{wateringMetods[wateringMetod]}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.list}>Częstotliwość podelwania</p>
            <p className={styles.plant}>{waterings[watering]}</p>
          </div>

          <div className={styles.row}>
            <p className={styles.list}>Doświetlanie</p>
            <p className={styles.plant}>{lighting}</p>
          </div>

          <div className={styles.row}>
            <p className={styles.list}>Nawóz</p>
            <p className={styles.plant}>{fretlizner}</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.container}>
          <h3 className={styles.container_header}>
            Dobrze się czuje, jeśli mam:
          </h3>
          <div className={styles.row}>
            <p className={styles.list}>Temperatura</p>
            <p className={styles.plant}>{temperature}°C</p>
          </div>
          <div className={styles.row}>
            <p className={styles.list}>Nasłonecznienie</p>
            <p className={styles.plant}>{places[place]}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.list}>Wilgotność powietrza</p>
            <p className={styles.plant}>{airHumidity}%</p>
          </div>
          <div className={styles.row}>
            <p className={styles.list}>pH podłoża</p>
            <p className={styles.plant}>{phSubstrates[phSubstrate]}</p>
          </div>
        </div>

        <div className={styles.notes}>
          <p className={styles.list}>Obserwacje</p>
          <p className={styles.plant}>{observations}</p>
        </div>
      </div>
      <div className={styles.bottom}></div>

      <Link className={styles.back} to="/">
        Powrót do listy roślin
      </Link>
    </div>
  );
}
