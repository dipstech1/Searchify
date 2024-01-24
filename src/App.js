import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import SearchifyRouter from './routes/routes';

function App() {
  return (
    <div>
      <Header />
      <div id="page-content">

        {
          SearchifyRouter()
        }
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
