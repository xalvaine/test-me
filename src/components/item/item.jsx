import PropTypes from 'prop-types';
import React from 'react';
import Highlighter from 'react-highlight-words';
import styles from './item.module.scss';
import { CATEGORY } from '../../config';

function Item(props) {
  const { title, text, category, searchWords, price, currency } = props;

  const categoryToClass = {};
  categoryToClass[CATEGORY.ATTRACTIONS] = styles.attraction;
  categoryToClass[CATEGORY.TOURS] = styles.row;
  categoryToClass[CATEGORY.CITIES] = styles.city;
  categoryToClass[CATEGORY.NOT_FOUND] = styles.row;

  return (
    <div className={categoryToClass[category]}>
      <>
        <Highlighter
          highlightClassName={styles.highlighted}
          className={
            category === CATEGORY.CITIES
              ? styles.highlightedPlace
              : styles.title
          }
          searchWords={searchWords.split(` `)}
          textToHighlight={title}
        />
        <span className={styles.place}>{text}</span>
        {category === CATEGORY.TOURS && (
          <span className={styles.price}>{currency + price}</span>
        )}
      </>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  category: PropTypes.string,
  searchWords: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string
};

Item.defaultProps = {
  title: ``,
  text: ``,
  category: ``,
  searchWords: ``,
  price: 0,
  currency: ``
};

export default Item;
