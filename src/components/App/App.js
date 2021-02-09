import React from 'react'; 
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

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
	<div> 
	  <h1> Важные дела </h1> 
	  <ItemList items={items} />
	  <Footer count={10} />
	</div>);
}

	export default App;