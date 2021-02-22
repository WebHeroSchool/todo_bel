import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({activeTaskCount, noActiveTaskCount}) => (<div className={styles.footer}> 
	<p> Осталось сделать: {activeTaskCount} </p>
	<p> Сделано: {noActiveTaskCount} </p>
 </div>);

Footer.propTypes = {
     activeTaskCount: PropTypes.number , 
     noActiveTaskCount: PropTypes.number
};

export default Footer;	