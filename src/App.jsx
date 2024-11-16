import './App.css'
import { GlobalState } from '../context/context.js';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {

  const user = {
    username: "salman"
  }

  return (
    <div className="App">
      <GlobalState.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalState.Provider>
    </div>


  );
}

export default App;
