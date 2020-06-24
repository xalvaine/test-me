import PropTypes from 'prop-types';
import React from 'react';
import Highlighter from 'react-highlight-words';
import styles from './item.module.scss';

function Item(props) {
  const { title, place, type, searchWords } = props;

  const typeToClass = {
    price: styles.row,
    museum: styles.museum,
    geo: styles.geo
  };

  return (
    <div className={typeToClass[type]}>
      {type === `geo` ? (
        <p className={styles.highlightedPlace}>{place}</p>
      ) : (
        <>
          <Highlighter
            highlightClassName={styles.highlighted}
            className={styles.title}
            searchWords={[searchWords]}
            textToHighlight={title}
          />
          <Highlighter
            className={styles.place}
            searchWords={[searchWords]}
            textToHighlight={place}
          />
        </>
      )}
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  place: PropTypes.string,
  type: PropTypes.string,
  searchWords: PropTypes.string
};

Item.defaultProps = {
  title: ``,
  place: ``,
  type: ``,
  searchWords: ``
};

export default Item;
