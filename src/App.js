import './App.css';
import {  Routes, Route } from 'react-router-dom';
import { Home, NotFound, Repository, SingleRepo, Solution, TestError} from './pages';
import SharedNav from './components/SharedNav';
import { DataProvider } from './context/dataContext'
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
     <ErrorBoundary>
      <DataProvider>
          <Routes>
            <Route path='/' element={<SharedNav />} >
              <Route index element={<Home />} />
              <Route path='/solution' element = {<Solution />}>
                <Route index path='/solution/repository' element ={<Repository/>} />
                <Route path='/solution/repository/:id' element ={<SingleRepo />} />
                <Route path='/solution/error-boundary' element ={<TestError />} />
              </Route>
            </Route>
            <Route path='*' element ={<NotFound />} />
          </Routes>
        </DataProvider>
     </ErrorBoundary>
    </div>
  );
}

export default App;
