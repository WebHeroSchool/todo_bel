import React from 'react'; 
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const todoItem = 'Написать сайт';

const App = () => { 
	const items = [
	  {
	  	value: 'Написать сайт'
	  }, 
	  {
	  	value: 'Погулять'
	  },
	  {
	  	value: 'Сделать задания'
	  }
	];

	return (
	<div className="wrap"> 
	  <h1 className="wrap__title"> Важные дела </h1> 
	  <ItemList items={items} />
	  <Footer count={10} />
	</div>);
}

	export default App;