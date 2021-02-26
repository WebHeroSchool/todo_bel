import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';
import logo from './Img/logo.svg';

const App = () =>
  (<Router>
	  	<div className={styles.wrap} >
		  	<Card style={{minWidth: '100%'}} className={styles.card}>
		  	    <MenuList className={styles.menu} >
		  	      <a href='https://webheroschool.ru/' target='_blank' rel='noopener noreferrer'> 
		  	      <img src={logo} width="100" height="40" alt="logo" />
		  	      </a>
			          <NavLink className={styles.link} activeClassName={styles.linkActive} exact to='/' > <MenuItem>Обо мне</MenuItem></NavLink>
			          <NavLink to='/todo' className={styles.link} activeClassName={styles.linkActive} ><MenuItem>Дела</MenuItem></NavLink>
			          
		        </MenuList>
		  	</Card>

		  	<Card>
		  	  <Route path='/' exact component={About} />
		  	  <Route path='/todo' component={Todo} />
		  	  
		  	</Card> 
	  </div>
  </Router>);

  export default App;