import React from 'react';
import Worker from '../Worker/Worker';
import styles from './WorkersList.module.css';

class WorkersList extends React.Component {

  render () {
    const { list, selectWorker } = this.props;

    return (
      <div className='col-12 col-sm-8 col-md-9 p-0 pl-md-4 rounded'>
        <table className="user-list table table-striped text-white">
          <thead>
          <tr className={styles.titles}>
            <th>Image</th>
            <th>Name</th>
            <th>Role</th>
            <th>Phone</th>
          </tr>
          </thead>
          <tbody>
            { list.map(i => {
              return (
                <Worker 
                  id   = {i.id}
                  key  = {i.id}
                  name = {i.name}
                  role = {i.role}
                  list = {i}
                  phone={i.phone}                
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