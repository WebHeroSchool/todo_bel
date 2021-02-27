import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import styles from  './Todo.module.css';
import PropTypes from 'prop-types';
import ErrorBlock from '../ErrorBlock/ErrorBlock';


const Todo = () => {
   const [items, setItems] = useState([  ]);

  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState('all');

  let itemsFilter;

  const countActive = (items.filter((item) => item.isDone === true)).length;
  const countDone = (items.filter((item) => item.isDone === false)).length;

  // const [items, setItems] = useState(initialState.items);
  // const [count, setCount] =  useState(initialState.count);


  const onClickDone = id => {
    const newItemList = items.map(item => {
        const newItem = { ...item};

        if (item.id === id) {
            newItem.isDone = !item.isDone;
        }

        return newItem;
    });

      setItems(newItemList);
  };
  
  const onClickDelete = id => {
    const newItemList = items.filter( item => item.id !== id);

    setItems(newItemList);
    setCount(count => count-1);
  };

  const onClickAdd = value => {
    const newItems = [
        {
            value,
            isDone: true,
            id: count + 1,
        },
        ...items,
      ];
  
    setItems(newItems);
    setCount(count => count + 1);   
  };

   const onClickFilter = filtered => setFilter(filtered);

  switch (filter) {
    case 'done':
      itemsFilter = items.filter(item => !item.isDone);
      break;
    case 'active':
      itemsFilter = items.filter(item => item.isDone);
      break;
    default:
      itemsFilter = items;
  }

  return (
  <div className={styles.wrap}> 
    <div className={styles.one}>
      <h1 className={styles.title}> Список моих дел </h1> 
      <Footer 
        count={count}
        filtered={filter}
        countActive={countActive}
        countDone={countDone}
        onClickFilter={onClickFilter}
      />
    </div>   
       {(count === 0) ?
        <ErrorBlock />
        : <ItemList
          items={itemsFilter} 
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />      
       }
    <InputItem items={items} onClickAdd={onClickAdd} />
 </div>
   );
  
 };

Todo.propTypes = {
     onClickAdd: PropTypes.func
};

  export default Todo;
