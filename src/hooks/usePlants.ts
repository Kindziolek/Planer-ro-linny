import { useCallback, useState } from 'react'
import data from '../plants.json'

export default function usePlants() {
    const [plants, setPlants] = useState(data)
    const onSend = (plant) => {
      setPlants([...plants,plant])
    }

    const onDrop = useCallback(id => {
        setPlants(value => value.filter(element => element.id !== id))
    }, [])

    const onEdit = useCallback(id => {
        setPlants(value => value.filter(element => element.id !== id))
    }, [])

    return {
        onDrop, plants, onSend, onEdit
    }
};
