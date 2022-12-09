import styles from './App.module.css';
import PlantListContainer from './containers/PlantListContainer';
import PlantFormContainer from './containers/PlantFormContainer';
import { PlantsProvider } from './providers/Plants';

function App() {
  return (
    <PlantsProvider>
      <PlantListContainer />
      <PlantFormContainer />
    </PlantsProvider>
  );
}

export default App;
