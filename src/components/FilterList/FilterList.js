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

const FilterList = ({FilterListItem, onClickFilterActive}) => (
	       {FilterListItem.map(item => 
            <FilterListItem
              key={item.id}
              id={item.id}
              value={item.value}
              isActive={item.isActive}
              onClickFilterActive={onClickFilterActive}
            />
           )}
	);

export default FilterList;
