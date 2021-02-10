import React from 'react'; 
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from  './App.module.css';

const todoItem = 'Написать сайт';

const App = () => { 
	const items = [
	  {
	  	value: 'Написать сайт',
	  	isDone: false
	  }, 
	  {
	  	value: 'Погулять',
	  	isDone: false
	  },
	  {
	  	value: 'Сделать задания',
	  	isDone: true
	  }
	];

	return (
	<div className={styles.wrap}> 
	  <h1 className={styles.title}> Важные дела </h1> 
	  <ItemList items={items} />
	  <Footer count={10} />
	</div>);
}

	export default App;