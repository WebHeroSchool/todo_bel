import React from 'react';
import Button from '@material-ui/core/Button';
import FilterList from '../FilterList/FilterList';
import styles from './Footer.module.css';

const Footer = ({count}) => (<div className={styles.footer}> 
   <Button variant="contained" color="secondary" size="small">
      Осталось дел:{count}
   </Button>
   <FilterList />
   <Button variant="outlined" color="secondary" size="small">
      Удалить выполненные
   </Button>
 </div>);

Footer.defaultProps = {
	  count:0
};

export default Footer;	