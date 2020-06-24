import React from 'react';
import styles from './search.module.scss';
import Item from '../item/item';

function Search() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchRow}>
        <input
          className={styles.input}
          type="text"
          placeholder="City, attraction, museum, tour name..."
        />
      </div>
      <Item
        title="Louvre Museum: Fast-track Ticket"
        place="Paris, France"
        type="price"
        searchWords="Louvre"
      />
      <Item
        title="Louvre Museum"
        place="Paris, France"
        type="museum"
        searchWords="Louvre"
      />
      <Item place="Paris, France" type="geo" searchWords="Louvre" />
    </div>
  );
}

export default Search;
