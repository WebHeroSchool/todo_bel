import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';


// const transition = {
//   transition: 'opacity .4s ease-out',
// };

class Item extends React.Component {

 	  render() {
	  	    const {value, isDone, onClickDone, id, onClickDelete} = this.props;
			  	return (
			  		<ListItem className={styles.itemList} >
			  		<div className={styles.itemWrap}>
							<div className={styles.checkbox}>
						  <Checkbox
			           name="checkedB"
			           color="primary"
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
	          <IconButton aria-label="delete">
	            <DeleteIcon onClick={() => onClickDelete(id)}/>	            
	          </IconButton>	           
						 </span>
						 </div>
						 </ListItem>
						 );

	  }
}

Item.propTypes = {
	  isDone: PropTypes.bool ,
	  id: PropTypes.number,
	  value: PropTypes.string
};

export default Item;
