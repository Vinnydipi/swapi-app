// App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store/reduxStore';
// Pages
import Layout from './pages/Layout';
import Login from './pages/Login';
import Planets from './pages/Planets';
import HomePage from './pages/Home';
import Starships from './pages/Starships';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use PreLoginLayout for this route
    children: [
      { path: '/', element: <Login /> }, 
      { path: 'home', element: <HomePage /> },
      { path: 'planets', element: <Planets /> },
      { path: 'starships', element: <Starships />}
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
