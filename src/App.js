import './App.css';
import { DataProvider } from './context/dataContext'
import ErrorBoundary from './components/ErrorBoundary';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"
import { Provider } from 'react-redux';
import { store } from './state/store';
import { Routes } from './config/routes';
import { Suspense } from 'react';
import { PreLoader } from './components/Loader';


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh()
  },[])
  return (
    <div className="App">
     <ErrorBoundary>
      <Provider store={store}>
         <Suspense fallback={<PreLoader />}>
          <Routes /> 
         </Suspense>
        </Provider>
     </ErrorBoundary>
     
    </div>
  );
}

export default App;
