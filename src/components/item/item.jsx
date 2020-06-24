import PropTypes from 'prop-types';
import React from 'react';
import Highlighter from 'react-highlight-words';
import styles from './item.module.scss';

function Item(props) {
  const { title, place, type, searchWords, price, currency } = props;

  const typeToClass = {
    tour: styles.row,
    attraction: styles.attraction,
    city: styles.city,
    notFound: styles.row
  };

  return (
    <div className={typeToClass[type]}>
      {type === `city` ? (
        <Highlighter
          highlightClassName={styles.highlighted}
          className={styles.highlightedPlace}
          searchWords={searchWords.split(` `)}
          textToHighlight={place}
        />
      ) : (
        <>
          <Highlighter
            highlightClassName={styles.highlighted}
            className={styles.title}
            searchWords={searchWords.split(` `)}
            textToHighlight={title}
          />
          <span className={styles.place}>{place}</span>
          {type === `tour` && (
            <p className={styles.price}>{currency + price}</p>
          )}
        </>
      )}
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  place: PropTypes.string,
  type: PropTypes.string,
  searchWords: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string
};

Item.defaultProps = {
  title: ``,
  place: ``,
  type: ``,
  searchWords: ``,
  price: 0,
  currency: ``
};

export default Item;
