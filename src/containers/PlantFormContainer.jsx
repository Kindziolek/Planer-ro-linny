import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import usePlants from '../providers/Plants';

const emptyForm = {
  name: '',
  dateOfPurchase: new Date().toISOString().substring(0, 10),
  placeOfPurchase: '',
  price: 0,
  safeOfAnimals: false,
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

  useEffect(() => {
    if (form.photo) {
      let list = new DataTransfer();

      const file = new File([new Blob([form.photo])], 'output_file_name');

      list.items.add(file);

      fileRef.current.files = list.files;
    }
  }, [form.photo]);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const file = fileRef.current.files[0];
      const base64 = file ? await getBase64(file) : '';

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
    <form onSubmit={onSubmit}>
      <input name="name" value={form.name} onChange={onUpdate} />
      <input
        name="dateOfPurchase"
        type="date"
        value={form.dateOfPurchase}
        onChange={onUpdate}
      />
      <input
        name="placeOfPurchase"
        value={form.placeOfPurchase}
        onChange={onUpdate}
      />
      <input
        name="price"
        type="number"
        value={form.price}
        onChange={onUpdate}
      />
      <input
        name="safeOfAnimals"
        type="checkbox"
        value={form.safeOfAnimals}
        onChange={onUpdate}
      />
      <textarea name="notes" value={form.notes} onChange={onUpdate} />
      <input
        name="photo_uri"
        type="file"
        accept="image/jpeg, image/png"
        onChange={onUpdate}
        ref={fileRef}
      />
      <input name="substrate" value={form.substrate} onChange={onUpdate} />
      <input
        name="sizePot"
        type="number"
        value={form.sizePot}
        onChange={onUpdate}
      />
      <input
        name="sizePlant"
        type="number"
        value={form.sizePlant}
        onChange={onUpdate}
      />
      <input
        name="newLeafDate"
        type="date"
        value={form.newLeafDate}
        onChange={onUpdate}
      />
      <select name="place" value={form.place} onChange={onUpdate}>
        <optgroup label="Opcje wyboru">
          <option value="1">Bezpośrednie słońce</option>
          <option value="2">Jasne o rozproszonym świetle</option>
          <option value="3">Cieniste lub półcieniste</option>
        </optgroup>
      </select>
      <input
        name="temperature"
        type="number"
        value={form.temperature}
        onChange={onUpdate}
      />
      <input
        name="airHumidity"
        type="number"
        value={form.airHumidity}
        onChange={onUpdate}
      />
      <select name="watering" value={form.watering} onChange={onUpdate}>
        <optgroup label="Opcje wyboru">
          <option value="1">
            Dopiero gdy przeschnie lub kiedy higrometr wskazuje 3
          </option>
          <option value="2">
            Utrzymywanie stale wilgotnego podłoża (higromentr między 4 a 6)
          </option>
          <option value="3">Dolewanie wody do podstawki</option>
        </optgroup>
      </select>
      <select
        name="wateringMetod"
        value={form.wateringMetod}
        onChange={onUpdate}
      >
        <optgroup label="Opcje wyboru">
          <option value="1">Równomiernie na całej powierzchni</option>
          <option value="2">Umieszczenie doniczki w naczyniu z wodą</option>
          <option value="3">Dolewanie wody do podstawki</option>
        </optgroup>
      </select>
      <select name="phSubstrate" value={form.phSubstrate} onChange={onUpdate}>
        <optgroup label="Opcje wyboru">
          <option value="1">Bardzo kwaśny (poniżej 4,5)</option>
          <option value="2">Kwaśny (4,5 - 5,5)</option>
          <option value="3">Lekko kwaśny (5,6 - 6,5)</option>
          <option value="4">Obojętny (6,6 - 7,2)</option>
          <option value="5">Zasadowy (powyżej 7,3)</option>
          <option value="6">Nie wiem (do sprawdzenia)</option>
        </optgroup>
      </select>
      <input name="lighting" value={form.lighting} onChange={onUpdate} />
      <input
        name="reproduction"
        value={form.reproduction}
        onChange={onUpdate}
      />
      <input name="fretilizer" value={form.fretilizer} onChange={onUpdate} />
      <input
        name="fretilizerDate"
        type="date"
        value={form.fretilizerDate}
        onChange={onUpdate}
      />
      <input
        name="observations"
        value={form.observations}
        onChange={onUpdate}
      />
      <button>Zapisz</button>
      <Link to="/">Powrót do listy roślin</Link>
    </form>
  );
}

export default PlantFormContainer;
