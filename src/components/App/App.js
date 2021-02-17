import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import styles from  './App.module.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';


const App = () => {
	const initialState = {
		  items : [
	  {
	  	value: 'Написать сайт',
	  	isDone: true,
	  	id: 1
	  }, 
	  {
	  	value: 'Погулять',
	  	isDone: true,
	  	id: 2
	  },
	  {
	  	value: 'Сделать задания',
	  	isDone: true,
	  	id:3
	  },
	 ],
	 count:3
	};

	const [items, setItems] = useState(initialState.items);

	const [count, setCount] =  useState(initialState.count);

	useEffect( () => {
    console.log("update");
  });

  useEffect( () => {
      console.log('mount');
    }, []);

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
  	setCount(count => count - 1);
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

	return (<Paper className={styles.paper} elevation={3}>
	<div className={styles.wrap}> 
	  <h1 className={styles.title}> Важные дела </h1> 
	  <InputItem onClickAdd={onClickAdd} />
	  <ItemList 
	    items={items} 
	    onClickDone={onClickDone}
	    onClickDelete={onClickDelete}
	  />
	 </div>
	 <div> 
	 <Divider />
	   <Footer count={count}/>
	 </div>
	</Paper> );
 };

App.propTypes = {
     onClickAdd: PropTypes.func
};

	export default App;
