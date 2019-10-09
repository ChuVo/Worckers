import React from 'react';

class Header extends React.Component {

  render() {

    return (
      <div>
        <img className='col-4 col-md-3 col-lg-1' src='images/logo.png' alt='Workers search' />
        <h1>Workers search</h1>
        <p>Поиск и сортировка сотрудников</p>
      </div>
    ); 
  }
}

export default Header;