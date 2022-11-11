import styles from "./App.module.css";
import PlantListContainer from "./containers/PlantListContainer";
import PlantFormContainer from "./containers/PlantFormContainer";

function App() {
  return (
    <div>
      <PlantListContainer />
      <PlantFormContainer />
    </div>
  );
}

export default App;
