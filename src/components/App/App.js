import React from 'react'; 
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import styles from  './App.module.css';
import Paper from '@material-ui/core/Paper';
import FilterList from '../FilterList/FilterList';
import Divider from '@material-ui/core/Divider';


class App extends React.Component {
  render () {
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

	return (<Paper className={styles.paper} elevation={3}>
	<div className={styles.wrap}> 
	  <h1 className={styles.title}> Важные дела </h1> 
	  <InputItem />
	  <ItemList items={items} />
	 </div>
	 <div> 
	 <Divider />
	   <Footer count={10} />
	 </div>
	</Paper> );
  }
};

	export default App;
