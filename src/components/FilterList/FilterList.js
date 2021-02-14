import React from 'react';
import styles from './FilterList.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const FilterList = () => (<div className={styles.filter}>
	 <ButtonGroup size="small" aria-label="small outlined button group">
        <Button>Все</Button>
        <Button>Активные</Button>
        <Button>Выполненные</Button>
   </ButtonGroup>
	</div>)

export default FilterList;