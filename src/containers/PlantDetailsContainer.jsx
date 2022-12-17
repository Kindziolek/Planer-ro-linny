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
    <div>
      <h2>{name}</h2>
      <div>
        <p>Data zakupu:</p>
        {dateOfPurchase}
      </div>
      <div>
        <p>Miejsce zakupu:</p>
        {placeOfPurchase}
      </div>
      <div>
        <p>Cena:</p>
        {price}
      </div>
      <div>
        <p>Bezpieczne dla zwierząt:</p>
        {safeOfAnimals}
      </div>
      <div>
        <p>Notatki:</p>
        {notes}
      </div>
      <div>
        <p>Zdjęcie:</p>
        {photo}
      </div>
      <div>
        <p>Podłoże:</p>
        {substrate}
      </div>
            <div>
        <p>Rozmiar doniczki:</p>
        {sizePot}
      </div>
      <div>
        <p>Rozmiar rośliny:</p>
        {sizePlant}
      </div>
      <div>
        <p>Data nowego liścia:</p>
        {newLeafDate}
      </div>
      <div>
        <p>Temperatura:</p>
        {temperature}
      </div>
      <div>
        <p>Nasłonecznienie</p>
        {place}
      </div>
      <div>
        <p>Częstotliwość podelwania:</p>
        {watering}
      </div>
      <div>
        <p>Wilgotność powietrza:</p>
        {airHumidity}
      </div>
      <div>
        <p>Metoda podlewania:</p>
        {wateringMetod}
      </div>
      <div>
        <p>pH podłoża:</p>
        {phSubstrate}
      </div>
      <div>
        <p>Doświetlanie:</p>
        {lighting}
      </div>
      <div>
        <p>Metoda rozmnażania:</p>
        {reproduction}
      </div>
      <div>
        <p>Nawóz:</p>
        {fretlizner}
      </div>
      <div>
        <p>Data ostatniego nawożenia:</p>
        {fretliznerDate}
      </div>
      <div>
        <p>Obserwacje:</p>
        {obserwations}
      </div>
    </div>
  );
}
