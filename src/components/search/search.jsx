import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { ReactComponent as SearchIcon } from './img/search.svg';
import styles from './search.module.scss';
import Item from '../item/item';
import { CATEGORY } from '../../config';

function Search() {
  const [searchValue, setSearchValue] = useState(``);
  const dispatch = useDispatch();
  const { isLoading, results, notFound, lastRequest } = useSelector(
    store => store
  );

  const handleChange = evt => {
    const tmp = evt.target.value;
    setSearchValue(tmp);
    if (tmp.trim().length >= 3) dispatch({ type: `SEARCH`, payload: tmp });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchRow}>
        <input
          className={styles.input}
          type="text"
          placeholder="City, attraction, museum, tour name..."
          onChange={handleChange}
          value={searchValue}
        />
        {isLoading ? (
          <CircularProgress
            color="inherit"
            thickness={5}
            size="25"
            className={styles.icon}
          />
        ) : (
          <SearchIcon className={styles.icon} />
        )}
      </div>
      {notFound ? (
        <Item
          category={CATEGORY.NOT_FOUND}
          title="No results"
          text={`It seems the are noting about “${lastRequest}”`}
        />
      ) : (
        Object.keys(results).map(category =>
          results[category].slice(0, 5).map((item, index) => {
            return (
              <Item
                title={category === CATEGORY.TOURS ? item.title : item.name}
                text={
                  (item.city ? `${item.city.name}, ` : ``) +
                  (item.country ? item.country.name : ``)
                }
                category={category}
                searchWords={lastRequest}
                currency={item.currency}
                price={item.price}
                key={index.toString()}
              />
            );
          })
        )
      )}
    </div>
  );
}

export default Search;
