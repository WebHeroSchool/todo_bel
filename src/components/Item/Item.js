import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const transition = {
  transition: 'opacity .4s ease-out',
};

class Item extends React.Component {
	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate () {
		console.log('componentDidUpdate');
	}

	componentWillUnmount(){
		console.log('componentWillUnmount');
	}

 	  render() {
	  	    const {value, isDone, onClickDone, id, onClickDelete} = this.props;
			  	return (
			  		<div className={styles.itemWrap}>
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
						        color="secondary"
						        onClick={() => onClickDelete(id)}
						        >
						       >
						          <DeleteIcon />
						        </IconButton>
						      </Tooltip>     
						 </span>
						 </div>);
	  }
}

Item.propTypes = {
	  isDone: PropTypes.bool ,
	  id: PropTypes.number,
	  value: PropTypes.string
};

export default Item;
