import React from 'react';
import FilterListItem from '../FilterListItem/FilterListItem';
import styles from './FilterList.module.css';


// export default function FilterList( { FilterListItem, onClickFilterActive }) {

//     return (
      
//         {FilterListItem.map((item) => {
//           return (
//             <FilterListItem
//               key={item.id}
//               id={item.id}
//               value={item.value}
//               isActive={item.isActive}
//               onClickFilterActive={onClickFilterActive}
//             />
//           )
//         })}
      
//     );

// } 

const FilterList = ({items, FilterListItem, onClickFilterActive, onClickDone, onClickDelete}) => (
	       <div className={styles.filters} >
	       {FilterListItem.map((item) => (<li key={FilterListItem.id} >)
            <FilterListItem
              id={FilterListItem.id}
              value={FilterListItem.value}
              isActive={FilterListItem.isActive}
              onClickFilterActive={onClickFilterActive}
              onClickDone={onClickDone}
              onClickDelete={onClickDelete}
            />
            </li>
           ))}
	</div>);

export default FilterList;
