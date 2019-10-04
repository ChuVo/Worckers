import React, {Component} from 'react';
import SortByRole from '../SortByRole/SortByRole';
import SortByStatus from '../SortByStatus/SortByStatus';

export default class SearchBar extends Component {
  changeValue = (e) => {
    this.props.changeValue(e.target.value);
  };

  render() {
    return (
      <div className="row justify-content-between">
        <div className="form-group col-12 col-sm-6 col-md-7 p-0">
          <input 
            type="text" className="form-control"
            placeholder="Search worker by name..."/>
        </div>
        <SortByRole />  
        <SortByStatus />     
      </div>      
    );
  }
};