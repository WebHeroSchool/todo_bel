import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import FilterList from '../FilterList/FilterList';
import FilterListItem from '../FilterListItem/FilterListItem';
import styles from  './Todo.module.css';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';


const Todo = () => {
	const initialState = {
		  count:0,
		  items: [],
		  sortList: [],
		  filterName: '' ,
		  FilterListItem: [
	  {
	  	value: "Завершенные",
	  	isActive: false,
	  	id: 1
	  }, 
	  {
	  	value: "Незавершенные",
	  	isActive: false,
	  	id: 2
	  },
	  {
	  	value: "Все",
	  	isActive: true,
	  	id: 3
	  },
	 ],
	 
	}

	const [items, setItems] = useState(initialState.items);
	const [filterListItem, setFilterListItem] = useState(initialState.filterListItem);
	const [filterName, setFilterName] = useState(initialState.filterName);
	const [count, setCount] =  useState(initialState.count);


	const onClickDone = id => {
		const newItemList = items.map(item => {
			  const newItem = { ...item};

			  if (item.id === id) {
			  	  newItem.isDone = !item.isDone;
			  }

			  return newItem;
		});

		  setItems(newItemList);
	};
  
  const onClickDelete = id => {
  	const newItemList = items.filter( item => item.id !== id);

  	setItems(newItemList);
  	setCount(count => count);
  };

  const onClickAdd = value => {
    const newItems = [
        {
        	  value,
        	  isDone: true,
        	  id: count + 1,
        },
        ...items,
  	  ];
  
  	setItems(newItems);
  	setCount(count => count + 1);	  
  };

  const onClickFilterActive = (id) => {
  	const newFilterList = FilterListItem.map(item => {
  		const newFilter = {... item};
  		if (item.id === id) {
  			newFilter.isActive = true;
  			setFilterName(item.value);
  		}
  		else {
  			newFilter.isActive = false;
  		}
  		return newFilter;
  	});
  	setFilterListItem(newFilterList);
  };

  let sortList = [... items];

  if (filterName === 'Завершенные')  {
  	sortList = items.filter(item => item.isDone);
  } else if (filterName === 'Незавершенные') {
  	sortList = items.filter(item => !item.isDone);
  } else if (filterName === 'Все') {
  	sortList = items;
  } else {
  	sortList = items;
  }

	return (<Paper className={styles.paper} elevation={3}>
	<div className={styles.wrap}> 
	  <h1 className={styles.title}> Список моих дел </h1> 

	  <InputItem onClickAdd={onClickAdd} items={items} count={ count } />
	  <ItemList 
	    items={items} 
	    onClickDone={onClickDone}
	    onClickDelete={onClickDelete}
	  />
	 </div>
	 <div> 
	   <Footer
	    activeTaskCount={items.filter(item => !item.isDone).length}
      noActiveTaskCount={items.filter(item => item.isDone).length}
	   />
	 </div>
	</Paper> );
 };

Todo.propTypes = {
     onClickAdd: PropTypes.func
};

	export default Todo;
