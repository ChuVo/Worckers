import React from 'react';

const SortByRole = () => {

  return (
    <div  className='col-7 col-sm-3 col-md-2 p-0'>
      <select className="custom-select" id="inlineFormCustomSelectPref">
        <option defaultValue>Все...</option>
        <option value="1">Водитель</option>
        <option value="2">Официант</option>
        <option value="3">Повар</option>
      </select>
    </div>    
  )
};

export default SortByRole;