import React, {Component} from 'react';

export default class WorkerData extends Component {

  render() {
    return (
      <div className="bg-secondary col-12 col-sm-4 col-md-3 p-0">
        <p className='bg-dark p-2'>user name</p>
        <div>
          <img src='images/owl.svg' alt='Workers avatar'></img>
        </div>
        <p class='text-left pl-4'>user role</p>
        <p class='text-left pl-4'>user phone</p>
        <p class='text-left pl-4'>user birthday</p>
      </div>
    );
  }
};