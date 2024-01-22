import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div>
        <Header />
        <div>
          <Routes>
            <Route path='' element={<Search />}></Route>
            <Route path='/result' element={<SearchResult />} ></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
