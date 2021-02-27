import React from 'react';
import styles from './Contacts.module.css';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import GitHubIcon from '@material-ui/icons/GitHub';


const Contacts = () => (
	<div className={styles.paper}>
		   <a className={styles.contacts} href="mailto:evgeniya.kornako@mail.ru">
		   <MailTwoToneIcon />
		   evgeniya.kornako@mail.ru </a>
		 	 <a className={styles.contacts} href="+7 911 951 08 45">
		   <PhoneIphoneTwoToneIcon />
		   +7 911 951 08 45 </a> 
		   <a className={styles.contacts} href="github.com/Evgeshka1412" >
		   <GitHubIcon /> </a>
	</div>
);

export default Contacts;
