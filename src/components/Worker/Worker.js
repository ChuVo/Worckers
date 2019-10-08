import React from 'react';

class Worker extends React.Component {
  

  render() {
    const { list, selectWorker } = this.props;
    const age = () => {
      let age = list.birthday.slice(-4),
          currentYear =  new Date();   

      age = +age;
      currentYear = currentYear.getFullYear();
      
      return currentYear - age;
    };
    
    let isArchive = list.isArchive ? 'isArchive wrapper-td border-bottom border-white' : 'wrapper-td border-bottom border-white';    

    age();

    return (
      <tr className={isArchive}  onClick={ selectWorker } id={list.id}>      
        <td className='border-0 p-1'>{list.name}</td>
        <td className='border-0 p-1'>{list.role}</td>
        <td className='border-0 p-1'>{age()}</td>
        <td className='border-0 p-1'>{list.phone}</td>
      </tr>
    );
  }
}

export default Worker;
