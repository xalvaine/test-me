import React from 'react';
import styles from './app.module.scss';
import Search from '../search/search';

function App() {
  return (
    <div className={styles.container}>
      <Search />
    </div>
  );
}

export default App;
