import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import styles from './search.module.scss';
import Item from '../item/item';

function Search() {
  const [searchValue, setSearchValue] = useState(``);
  const dispatch = useDispatch();
  const { isLoading, results } = useSelector(store => store);

  const handleChange = evt => {
    const tmp = evt.target.value;
    setSearchValue(tmp);
    if (tmp.trim().length >= 3) dispatch({ type: `SEARCH`, payload: tmp });
  };

  return (
    <div className={styles.wrapper}>
      <div className={isLoading ? styles.searchingSearchRow : styles.searchRow}>
        <input
          className={styles.input}
          type="text"
          placeholder="City, attraction, museum, tour name..."
          onChange={handleChange}
          value={searchValue}
        />
        {isLoading && (
          <CircularProgress
            color="inherit"
            thickness={5}
            size="25"
            className={styles.loader}
          />
        )}
      </div>
      {!(
        results.tours.length ||
        results.cities.length ||
        results.attractions.length
      ) && isLoading === false ? (
        <Item
          type="notFound"
          title="No results"
          text={`It seems the are noting about “${searchValue}”`}
        />
      ) : (
        Object.keys(results).map(category =>
          results[category].slice(0, 5).map((item, index) => {
            switch (category) {
              case `tours`:
                return (
                  <Item
                    title={item.title}
                    text={`${item.city.name}, ${item.country.name}`}
                    type="tour"
                    searchWords={searchValue}
                    currency={item.currency}
                    price={item.price}
                    key={index.toString()}
                  />
                );
              case `attractions`:
                return (
                  <Item
                    title={item.name}
                    text={
                      (item.city ? `${item.city.name}, ` : ``) +
                      (item.country ? item.country.name : ``)
                    }
                    type="attraction"
                    searchWords={searchValue}
                    key={index.toString()}
                  />
                );
              case `cities`:
                return (
                  <Item
                    title={item.name}
                    type="city"
                    searchWords={searchValue}
                    key={index.toString()}
                  />
                );
              default:
                return null;
            }
          })
        )
      )}
    </div>
  );
}

export default Search;
