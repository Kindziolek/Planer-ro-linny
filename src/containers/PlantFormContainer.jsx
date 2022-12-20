import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import usePlants, {
  phSubstrates,
  places,
  wateringMetods,
  waterings,
  safeOfAnimals,
} from '../providers/Plants';
import styles from './PlantFormContainer.module.scss';

const emptyForm = {
  name: '',
  dateOfPurchase: new Date().toISOString().substring(0, 10),
  placeOfPurchase: '',
  price: 0,
  safeOfAnimal: '1',
  notes: '',
  photo: '',
  substrate: '',
  sizePot: 0,
  sizePlant: 0,
  newLeafDate: new Date().toISOString().substring(0, 10),
  place: '1',
  temperature: 0,
  airHumidity: 0,
  watering: '1',
  wateringMetod: '1',
  phSubstrate: '1',
  lighting: '',
  reproduction: '',
  fretilizer: '',
  fretilizerDate: new Date().toISOString().substring(0, 10),
  observations: '',
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function PlantFormContainer() {
  const { id } = useParams();
  const { onUpsert, plants } = usePlants();
  const navigate = useNavigate();
  const fileRef = useRef();

  const [form, setForm] = useState(
    plants.find((plant) => plant.id === Number(id)) || emptyForm
  );

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const file = fileRef.current.files[0];
      const base64 = file ? await getBase64(file) : form.photo ?? '';

      onUpsert({
        ...form,
        photo: base64,
      });

      navigate('/');
    },
    [form, fileRef]
  );

  const onUpdate = useCallback((event) => {
    const { name, value } = event.currentTarget;
    setForm((formValues) => ({
      ...formValues,
      [name]: value,
    }));
  }, []);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.contener}>
        <div className={styles.ask}>
          <label>Nazwa rośliny</label>

          <input name="name" value={form.name} onChange={onUpdate} required />
        </div>
        <div className={styles.ask}>
          <label>Data zakupu</label>
          <input
            name="dateOfPurchase"
            type="date"
            value={form.dateOfPurchase}
            onChange={onUpdate}
          />
        </div>
        <div className={styles.ask}>
          <label>Miejsce zakupu</label>
          <input
            name="placeOfPurchase"
            value={form.placeOfPurchase}
            onChange={onUpdate}
          />
        </div>
        <div className={styles.ask}>
          <label>Cena [zł]</label>
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={onUpdate}
          />
        </div>
      </div>

      <div className={styles.contener}>
        <div className={styles.box}>
          <div className={styles.ask}>
            <label>Notatki</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={onUpdate}
              className={styles.notes}
            />
          </div>



          <div className={styles.ask}>
            <div className={styles.ask}>
              <label>Rozmiar doniczki [cm]</label>
              <input
                name="sizePot"
                type="number"
                value={form.sizePot}
                onChange={onUpdate}
              />{' '}
            </div>

            <div className={styles.ask}>
              <label>Wielkość rośliny [cm]</label>
              <input
                name="sizePlant"
                type="number"
                value={form.sizePlant}
                onChange={onUpdate}
              />{' '}
            </div>
            <div className={styles.ask}>
              <label>Podłoże</label>
              <input
                name="substrate"
                value={form.substrate}
                onChange={onUpdate}
              />
            </div>
          </div>
        </div>
      </div>



      <div className={styles.ask}>
        <label>Bezpieczne dla zwierząt</label>
        <select
          name="safeOfAnimal"
          value={form.safeOfAnimal}
          onChange={onUpdate}
        >
          <optgroup label="Opcje wyboru">
            {safeOfAnimals.map((value, key) => (
              <option value={key}>{value}</option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className={styles.ask}>
        <label>Data nowego liścia</label>
        <input
          name="newLeafDate"
          type="date"
          value={form.newLeafDate}
          onChange={onUpdate}
        />
      </div>

      <div className={styles.ask}>
      <label>Zdjęcie</label>
      {form.photo && <img src={form.photo} width="50%"/>}
      <input
        name="photo_uri"
        type="file"
        accept="image/jpeg, image/png"
        onChange={onUpdate}
        ref={fileRef}
      />
      </div>


      <div className={styles.ask}>
      <label>Temperatura [°C]</label>
      <input
        name="temperature"
        type="number"
        value={form.temperature}
        onChange={onUpdate}
      /></div>
          <div className={styles.ask}>
      <label>Wilgotność potwietrza [%]</label>
      <input
        name="airHumidity"
        type="number"
        value={form.airHumidity}
        onChange={onUpdate}
      /></div>
       <div className={styles.ask}>
      <label>Doświetlanie</label>
      <input
        name="lighting"
        placeholder="Jeśli doświetlasz, możesz podać np. godziny, w których doświetlasz"
        value={form.lighting}
        onChange={onUpdate}
      /></div>
       <div className={styles.ask}>
      <label>Sposób rozmnażania</label>
      <input
        name="reproduction"
        value={form.reproduction}
        onChange={onUpdate}
      /></div>

<div className={styles.ask}>
      <label>Nasłonecznienie</label>
      <select name="place" value={form.place} onChange={onUpdate}>
        <optgroup label="Opcje wyboru">
          {places.map((value, key) => (
            <option value={key}>{value}</option>
          ))}
        </optgroup>
      </select>
      </div>
      <div className={styles.ask}>
      <label>Częstotliwość podlewania</label>
      <select name="watering" value={form.watering} onChange={onUpdate}>
        <optgroup label="Opcje wyboru">
          {waterings.map((value, key) => (
            <option value={key}>{value}</option>
          ))}
        </optgroup>
      </select></div>
      <div className={styles.ask}>
      <label>Sposób podlewania</label>
      <select
        name="wateringMetod"
        value={form.wateringMetod}
        onChange={onUpdate}
      >
        <optgroup label="Opcje wyboru">
          {wateringMetods.map((value, key) => (
            <option value={key}>{value}</option>
          ))}
        </optgroup>
      </select></div>
      <div className={styles.ask}>
      <label>pH podłoża</label>
      <select name="phSubstrate" value={form.phSubstrate} onChange={onUpdate}>
        <optgroup label="Opcje wyboru">
          {phSubstrates.map((value, key) => (
            <option value={key}>{value}</option>
          ))}
        </optgroup>
      </select>
      </div>
      <div className={styles.ask}>
      <label>Doświetlanie</label>
      <input
        name="lighting"
        placeholder="Jeśli doświetlasz, możesz podać np. godziny, w których doświetlasz"
        value={form.lighting}
        onChange={onUpdate}
      /></div>
       <div className={styles.ask}>
      <label>Sposób rozmnażania</label>
      <input
        name="reproduction"
        value={form.reproduction}
        onChange={onUpdate}
      /></div>
       <div className={styles.ask}>
      <label>Nawóz</label>
      <input name="fretilizer" value={form.fretilizer} onChange={onUpdate} /></div> <div className={styles.ask}>
      <label>Data ostatniego nawożenia</label>
      <input
        name="fretilizerDate"
        type="date"
        value={form.fretilizerDate}
        onChange={onUpdate}
      /></div> 
      <label>Moje obserwacje</label>
      <textarea
        name="observations"
        placeholder="Możesz w tym miejscu zapisać to, co udało Ci się zaobserwować. Na przykład to, co lubi roślina, a co jej szkodzi."
        value={form.observations}
        onChange={onUpdate}
        className={styles.notes}
      />

      <button className={styles.button}>Zapisz</button>
      <Link className={styles.back} to="/">
        Powrót do listy roślin
      </Link>
    </form>
  );
}

export default PlantFormContainer;
