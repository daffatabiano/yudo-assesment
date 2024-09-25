import { useRouter } from 'react-router-dom';
import { routesLists } from './routes/routes';

function App() {
  const elements = useRouter(routesLists);

  return elements;
}

export default App;
