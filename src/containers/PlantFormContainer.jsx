import { useCallback } from 'react';
import usePlants from '../providers/Plants';

function PlantFormContainer() {
  const { onSend } = usePlants();

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const plant = Object.fromEntries(formData);

    event.currentTarget.reset();
    onSend(plant);
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <input name="name" />
      <input type="date" name="dateOfPurchase" />
      <input name="placeOfPurchase" />
      <input type="number" name="price" />
      <input type="checkbox" name="safeOfAnimals" />
      <textarea name="notes"></textarea>
      <input type="file" name="photo" />
      <input name="substrate" />
      <input type="number" name="sizePot" />
      <input type="number" name="sizePlant" />
      <input type="date" name="newLeafDate" />
      {/* Poszukać pełnej daty do powyższego */}
      <select name="place">
        <optgroup label="Opcje wyboru">
          <option value="opcja1">Bezpośrednie słońce</option>
          <option value="opcja2">Jasne o rozproszonym świetle</option>
          <option value="opcja3">Cieniste lub półcieniste</option>
        </optgroup>
      </select>
      <input type="number" name="temperature" />
      <input type="number" name="airHumidity" />
      <select name="watering">
        <optgroup label="Opcje wyboru">
          <option value="opcja1">
            Dopiero gdy przeschnie lub kiedy higrometr wskazuje 3
          </option>
          <option value="opcja2">
            Utrzymywanie stale wilgotnego podłoża (higromentr między 4 a 6)
          </option>
          <option value="opcja3">Dolewanie wody do podstawki</option>
        </optgroup>
      </select>
      <select name="wateringMetod">
        <optgroup label="Opcje wyboru">
          <option value="opcja1">Równomiernie na całej powierzchni</option>
          <option value="opcja2">
            Umieszczenie doniczki w naczyniu z wodą
          </option>
          <option value="opcja3">Dolewanie wody do podstawki</option>
        </optgroup>
      </select>
      <select name="phSubstrate">
        <optgroup label="Opcje wyboru">
          <option value="opcja1">Bardzo kwaśny (poniżej 4,5)</option>
          <option value="opcja2">Kwaśny (4,5 - 5,5)</option>
          <option value="opcja3">Lekko kwaśny (5,6 - 6,5)</option>
          <option value="opcja2">Obojętny (6,6 - 7,2)</option>
          <option value="opcja3">Zasadowy (powyżej 7,3)</option>
          <option value="opcja3">Nie wiem (do sprawdzenia)</option>
        </optgroup>
      </select>
      <input name="lighting" />
      <input name="reproduction" />
      <input name="fretilizer" />
      <input type="date" name="fretilizerDate" />
      <input name="observations" />
      <button>Zapisz</button>
    </form>
  );
}

export default PlantFormContainer;

// name: "Filodendron Pink Princess",
//         dateOfPurchase: "10.10.2021",
//         placeOfPurchase: "Allegro",
//         price: "70 zł",
//         safeOfAnimals: "Nie",
//         photo: "https://a.allegroimg.com/s512/11726a/367c34d242bcb236da62dc4a6657/Philodendron-PINK-PRINCESS-filodendron-MALUCH",
//         notes: "xx",
//         substrate: "Hydroponika",
//         sizePot: "15cm",
//         sizePlant: "30cm",
//         newLeafDate: "25.10.2022",
//         place: "Jasne o rozproszonym świetle",
//         temperature: "16-25º C",
//         airHumidity: "60%",
//         watering: "Dopiero gdy przeschnie lub kiedy higrometr wskazuje 3",
//         wateringMetod: "Równomiernie na całej powierzchni",
//         phSubstrate: "5,5-6,0",

//         lighting: "Tak, ok. 6400K i minimum 500 lumenów",
//         reproduction: "Ukorzenianie odciętego szczytu rośliny, węzła lub łodygi, koniecznie koniecznie chociaż z jednym liściem, roślina musi też posiadać korzenie powietrzne. Ukorzenianie można przeprowadzić w wodzie z węglem",
//         fretilizer: "Nawóz do roślin zielonych",
//         fretilizerDate: "Data ostatniego nawożenia: 15.10.2022",
//         observations: "Preferuje luźne, dobrze przepuszczalne podłoże.",
