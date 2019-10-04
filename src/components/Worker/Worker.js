import React from 'react';

class Worker extends React.Component {
  

  render() {
    const { list, id, name, phone, role, selectWorker } = this.props;   

    return (
      <tr className='wrapper-td' onClick={ selectWorker } id={id} data={[id, name, role, phone]}>
        <td className='p-0 pt-2 wrapper-img'>
          <img src={`images/pig.svg`} alt='workers avatar' />
        </td>        
        <td>{name}</td>
          <td>{role}</td>
          <td>{phone}</td>
      </tr>
    );
  }
}

export default Worker;
