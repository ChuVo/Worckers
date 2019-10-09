import React from 'react';
import SortByRole from '../SortByRole/SortByRole';
import SortByStatus from '../SortByStatus/SortByStatus';

class SearchBar extends React.Component {

  render() {
    const { onFilterByStatus, onFilterByRole, onFilterByName, request } = this.props;

    return (
      <div className="row justify-content-between">
        <div className="form-group col-12 col-sm-6 col-md-7 p-0">
          <input id='search'
            defaultValue={request}
            onChange={onFilterByName}
            type="text" className="form-control"
            placeholder="Search worker by name..."/>
        </div>
        <SortByRole onFilterByRole={onFilterByRole} />
        <SortByStatus onFilterByStatus={onFilterByStatus} />
      </div>
    );
  }
};

export default SearchBar;