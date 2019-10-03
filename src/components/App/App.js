import React from 'react';
import Header from '../Header/Header';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import WorkerData from '../WorkerData/WorkerData';

function App() { 

  return (
    <div className={styles.App}>
      <Header />
      <div className="container content p-4">
        <div className="col-12">        
          <SearchBar />  
        </div>
        <div className='col-12'>
          <WorkerData />
        </div>
      </div>             
    </div>
  );
};

export default App;
