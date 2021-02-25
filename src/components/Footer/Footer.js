// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Footer.module.css';

// const Footer = ({activeTaskCount, noActiveTaskCount}) => (<div className={styles.footer}> 
// 	<p> Осталось сделать: {activeTaskCount} </p>
// 	<p> Сделано: {noActiveTaskCount} </p>
//  </div>);

// Footer.propTypes = {
//      activeTaskCount: PropTypes.number , 
//      noActiveTaskCount: PropTypes.number
// };

// export default Footer;	



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
