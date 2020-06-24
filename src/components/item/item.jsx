import PropTypes from 'prop-types';
import React from 'react';
import Highlighter from 'react-highlight-words';
import styles from './item.module.scss';

function Item(props) {
  const { title, text, type, searchWords, price, currency } = props;

  const typeToClass = {
    tour: styles.row,
    attraction: styles.attraction,
    city: styles.city,
    notFound: styles.row
  };

  return (
    <div className={typeToClass[type]}>
      <>
        <Highlighter
          highlightClassName={styles.highlighted}
          className={type === `city` ? styles.highlightedPlace : styles.title}
          searchWords={searchWords.split(` `)}
          textToHighlight={title}
        />
        <span className={styles.place}>{text}</span>
        {type === `tour` && (
          <span className={styles.price}>{currency + price}</span>
        )}
      </>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  searchWords: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string
};

Item.defaultProps = {
  title: ``,
  text: ``,
  type: ``,
  searchWords: ``,
  price: 0,
  currency: ``
};

export default Item;
