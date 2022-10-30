import styles from './App.module.css'
import PlantListContainer from './containers/PlantListContainer'
import PlantFormContainer from './containers/PlantFormContainer'
import data from './plants.json'
import { useState } from 'react'


function App() {
  const [plants, setPlants] = useState(data)
  const onSend = (plant) => {
    setPlants([...plants,plant])
  }
  return (
    <div>
      <PlantListContainer plants={plants}></PlantListContainer>
      <PlantFormContainer onSend={onSend}></PlantFormContainer>
    </div>
  )
}

export default App
