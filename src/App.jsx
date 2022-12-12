import styles from './App.module.css';
import PlantListContainer from './containers/PlantListContainer';
import PlantFormContainer from './containers/PlantFormContainer';
import { PlantsProvider } from './providers/Plants';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PlantDeleteContainer from './containers/PlantDeleteContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PlantListContainer />,
  },
  {
    path: '/add',
    element: <PlantFormContainer />,
  },
  {
    path: '/edit/:id',
    element: <PlantFormContainer />,
  },
  {
    path: '/del/:id',
    element: <PlantDeleteContainer />,
  },
]);

function App() {
  return (
    <PlantsProvider>
      <RouterProvider router={router} />
    </PlantsProvider>
  );
}

export default App;
