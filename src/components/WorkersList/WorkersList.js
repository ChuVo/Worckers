import React from 'react';
import Worker from '../Worker/Worker';
import styles from './WorkersList.module.css';

class WorkersList extends React.Component {

  render () {
    const { list, selectWorker, onClickSort, onClickSortAge } = this.props;

    return (
      <div className='col-12 col-sm-8 col-md-9 p-0 pl-sm-4 rounded'>
        <table className="user-list table table-striped text-white">
          <thead>
          <tr className={styles.titles}>
            <th className='cursor-hend' id='name' onClick={onClickSort} >Name</th>
            <th className='cursor-hend' id='role' onClick={onClickSort}>Role</th>
            <th className='cursor-hend' id='age' onClick={onClickSortAge}>age</th>
            <th>Phone</th>
          </tr>
          </thead>
          <tbody>
            { list.map(i => {
              return (
                <Worker
                  key  = {i.id}
                  list = {i}                
                  selectWorker={selectWorker}
                />
              )})
            }
          </tbody>
        </table>
      </div>
    )
  }
};

export default WorkersList;