
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import VideoPage from './components/VideoPage';

function App() {
  const browserrouter = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/room/:id",
      element:<VideoPage/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={browserrouter}/>
      
    </div>
  );
}

export default App;
