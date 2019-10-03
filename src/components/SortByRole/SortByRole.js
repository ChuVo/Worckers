import React from 'react';

const SortByRole = () => {

  return (
    <div  className='col-7 col-sm-3 pl-3'>
      <select class="custom-select" id="inlineFormCustomSelectPref">
        <option selected>Все...</option>
        <option value="1">Водитель</option>
        <option value="2">Официант</option>
        <option value="3">Повар</option>
      </select>
    </div>    
  )
};

export default SortByRole;