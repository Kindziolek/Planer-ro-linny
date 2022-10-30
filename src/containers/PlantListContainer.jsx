import PlantListItem from '../components/PlantListItem';
import styles from './PlantListContainer.module.css';

const plants = [
    {
        name: "Filodendron Pink Princess",
        dateOfPurchase: "10.10.2021",
        placeOfPurchase: "Allegro",
        price: "70 zł",
        safeOfAnimals: "Nie",
        photo: "https://a.allegroimg.com/s512/11726a/367c34d242bcb236da62dc4a6657/Philodendron-PINK-PRINCESS-filodendron-MALUCH",
        notes: "xx",
        substrate: "Hydroponika",
        sizePot: "15cm",
        sizePlant: "30cm",
        newLeafDate: "25.10.2022",
        place: "Jasne o rozproszonym świetle",
        temperature: "16-25º C",
        airHumidity: "60%",
        watering: "Dopiero gdy przeschnie lub kiedy higrometr wskazuje 3",
        wateringMetod: "Równomiernie na całej powierzchni",
        phSubstrate: "5,5-6,0",
        lighting: "Tak, ok. 6400K i minimum 500 lumenów",
        reproduction: "Ukorzenianie odciętego szczytu rośliny, węzła lub łodygi, koniecznie koniecznie chociaż z jednym liściem, roślina musi też posiadać korzenie powietrzne. Ukorzenianie można przeprowadzić w wodzie z węglem",
        fretilizer: "Nawóz do roślin zielonych",
        fretilizerDate: "Data ostatniego nawożenia: 15.10.2022",
        observations: "Preferuje luźne, dobrze przepuszczalne podłoże.",
    },
    {
        name: "Filodendron Pink Princess",
        dateOfPurchase: "10.10.2021",
        placeOfPurchase: "Allegro",
        price: "70 zł",
        safeOfAnimals: "Nie",
        photo: "https://a.allegroimg.com/s512/11726a/367c34d242bcb236da62dc4a6657/Philodendron-PINK-PRINCESS-filodendron-MALUCH",
        notes: "xx",
        substrate: "Hydroponika",
        sizePot: "15cm",
        sizePlant: "30cm",
        newLeafDate: "25.10.2022",
        place: "Jasne o rozproszonym świetle",
        temperature: "16-25º C",
        airHumidity: "60%",
        watering: "Dopiero gdy przeschnie lub kiedy higrometr wskazuje 3",
        wateringMetod: "Równomiernie na całej powierzchni",
        phSubstrate: "5,5-6,0",
        lighting: "Tak, ok. 6400K i minimum 500 lumenów",
        reproduction: "Ukorzenianie odciętego szczytu rośliny, węzła lub łodygi, koniecznie koniecznie chociaż z jednym liściem, roślina musi też posiadać korzenie powietrzne. Ukorzenianie można przeprowadzić w wodzie z węglem",
        fretilizer: "Nawóz do roślin zielonych",
        fretilizerDate: "Data ostatniego nawożenia: 15.10.2022",
        observations: "Preferuje luźne, dobrze przepuszczalne podłoże.",
    },
    {
        name: "Filodendron Pink Princess",
        dateOfPurchase: "10.10.2021",
        placeOfPurchase: "Allegro",
        price: "70 zł",
        safeOfAnimals: "Nie",
        photo: "https://a.allegroimg.com/s512/11726a/367c34d242bcb236da62dc4a6657/Philodendron-PINK-PRINCESS-filodendron-MALUCH",
        notes: "xx",
        substrate: "Hydroponika",
        sizePot: "15cm",
        sizePlant: "30cm",
        newLeafDate: "25.10.2022",
        place: "Jasne o rozproszonym świetle",
        temperature: "16-25º C",
        airHumidity: "60%",
        watering: "Dopiero gdy przeschnie lub kiedy higrometr wskazuje 3",
        wateringMetod: "Równomiernie na całej powierzchni",
        phSubstrate: "5,5-6,0",
        lighting: "Tak, ok. 6400K i minimum 500 lumenów",
        reproduction: "Ukorzenianie odciętego szczytu rośliny, węzła lub łodygi, koniecznie koniecznie chociaż z jednym liściem, roślina musi też posiadać korzenie powietrzne. Ukorzenianie można przeprowadzić w wodzie z węglem",
        fretilizer: "Nawóz do roślin zielonych",
        fretilizerDate: "Data ostatniego nawożenia: 15.10.2022",
        observations: "Preferuje luźne, dobrze przepuszczalne podłoże.",
    },
]

function PlantListContainer() {
    const listItems = plants.map((plant => {
    return (<li key={plant.name}><PlantListItem name={plant.name}></PlantListItem></li>
    )}))
    return (
       <ul>{listItems}</ul>
    )
  }
  
  export default PlantListContainer