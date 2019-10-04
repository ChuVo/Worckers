import React, {Component} from 'react';

export default class SelectedWorker extends Component {
  
  render() {
    const {checkedWorker} = this.props;

    const worker = {
      ...checkedWorker
    };

    return (
      <div className="col-12 col-sm-4 col-md-3 mb-4 p-0">
        <div className="bg-secondary p-0 pb-2 rounded">          
          <div>
            <img src='images/owl.svg' alt='Workers avatar'></img>
          </div>
          <p className='bg-dark p-2'>{worker.name}</p>
          <p>{worker.role}</p>
          <p>{worker.phone}</p>
          <p>{worker.birthday}</p>
        </div>        
      </div>
    );
  }
};