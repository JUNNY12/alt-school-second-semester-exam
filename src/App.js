import './App.css';
import {  Routes, Route } from 'react-router-dom';
import { Home, NotFound, Repository, SingleRepo } from './pages';
import SharedNav from './components/SharedNav';
import { DataProvider } from './context/dataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path='/' element={<SharedNav />} >
            <Route index element={<Home />} />
            <Route path='repository' element ={<Repository/>} />
            <Route path='/repo' element ={<SingleRepo />} />
          </Route>
          <Route path='*' element ={<NotFound />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
