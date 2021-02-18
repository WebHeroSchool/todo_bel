import React from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './About.module.css';

const title = (<h1 className={styles.title}>Обо мне: </h1>);

const About = () => (
	<Paper className={styles.paper} elevation={3} >
    <div>
	    {title}
	  </div> 
	</Paper>
);

export default About;
