import React from 'react';

import styles from './ErrorBlock.module.css';
import errorPic from './img/Group.svg';

const ErrorBlock = () => (

  <div className={styles.wrapper}>

    <img src={errorPic} alt='Error' className={styles.errorPic} />

    {window.location.pathname === '/todo' ? 
      <div className={styles.text}>
        <h2>Вы ещё не добавили ни одной задачи</h2>
        <p>Сделайте это прямо сейчас!</p>
      </div> :

      <div className={styles.text}>
        <h2>Что-то пошло не так...</h2>
        <p>Попробуйте 
            <button className={styles.btnLink} onClick={() => window.location.reload()}> загрузить </button> 
        еще раз</p>
      </div>
    }
  </div>
);


export default ErrorBlock;
