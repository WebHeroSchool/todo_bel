import React from 'react';
import Item from '../Item/Item';
import PropTypes from 'prop-types';

const ItemList = ({items, onClickDone, onClickDelete}) => (<div>
	  {items.map(item => 
	  	<div key={item.id}>
	    <Item
	       value={item.value}  
	       isDone={item.isDone} 
	       id={item.id}
	       onClickDone={onClickDone} 
	       onClickDelete={onClickDelete}
	    /> 
	    </div>)}
	</div>);

ItemList.propTypes = {
     items: PropTypes.array,
     onClickDone: PropTypes.func,
     onClickDelete:PropTypes.func
};	  

export default ItemList;