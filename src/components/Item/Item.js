import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const transition = {
  transition: 'opacity .4s ease-out',
};

const Item = ({value, isDone, onClickDone, id}) => (<div className={styles.itemWrap}>
	<div className={styles.checkbox}>
  <Checkbox
     defaultChecked
     color="primary"
     inputProps={{ 'aria-label': 'secondary checkbox' }}
     onClick={() => onClickDone(id)}
  />
  </div>
	<span className={
     classnames({
     	  [styles.item]: false,
     	  [styles.done]: isDone
     })
}> 
  {value}
       <Tooltip title="Delete">
        <IconButton aria-label="delete"
        style={transition}
        className={styles.deleteBtn}
        variant="contained"
        color="secondary">
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>     
 </span>
 </div>);

export default Item;