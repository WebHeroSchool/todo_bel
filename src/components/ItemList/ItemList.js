import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItem}) => (<ul>
	  <li> <Item todoItem={todoItem} /> </li>
	  <li> <Item todoItem={'Погулять'} /> </li>
	  <li> <Item todoItem={'Сделать задания'} /> </li>
	</ul>);

export default ItemList;