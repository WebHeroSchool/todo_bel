import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({count, countActive, countDone, onClickFilter}) => {
  return(

  <div className={styles.footer}> 
   <button className={styles.btn} onClick={() => onClickFilter('all')}>
      Все ({count})
   </button>
   <button className={styles.btn} onClick={() => onClickFilter('active')}>
      Активные({countActive})
   </button>
   <button className={styles.btn} onClick={() => onClickFilter('done')}>
      Выполненные ({countDone})
   </button>
 </div>);

};

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number
};


export default Footer;
