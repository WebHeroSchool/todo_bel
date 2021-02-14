import React from 'react'; 
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import styles from  './App.module.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';


class App extends React.Component {
	state = {
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
	  }
	 ],
	 count:3

	};
	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			  const newItem = { ...item};

			  if (item.id === id) {
			  	  newItem.isDone = !item.isDone;
			  }

			  return newItem;
		})

		this.setState({ items: newItemList});
	} ;
  
  onClickDelete = id => {
  	const newItemList = this.state.items.filter( item => item.id !== id);
  	this.setState({ items: newItemList});
  }

  onClickAdd = value => this.setState(state => ({
  	  items: [
        ...state.items,
        {
        	  value,
        	  isDone: true,
        	  id: state.count + 1
        }
  	  ],
  	  count: state.count +1
  }));

  render () {

	return (<Paper className={styles.paper} elevation={3}>
	<div className={styles.wrap}> 
	  <h1 className={styles.title}> Важные дела </h1> 
	  <InputItem onClickAdd={this.onClickAdd} />
	  <ItemList 
	    items={this.state.items} 
	    onClickDone={this.onClickDone}
	    onClickDelete={this.onClickDelete}
	  />
	 </div>
	 <div> 
	 <Divider />
	   <Footer count={10} />
	 </div>
	</Paper> );
  }
};

	export default App;
