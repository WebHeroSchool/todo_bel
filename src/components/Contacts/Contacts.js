import React from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './Contacts.module.css';

const title = (<h1 className={styles.title}>Контакты: </h1>);

const Contacts = () => (
	<Paper className={styles.paper} elevation={3} >
		 <div>
		   {title}
		 </div>  
	</Paper>
);

export default Contacts;
