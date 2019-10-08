import React from 'react';
import SortByRole from '../SortByRole/SortByRole';
import SortByStatus from '../SortByStatus/SortByStatus';

class SearchBar extends React.Component {

  changeValue = (e) => {
    this.props.changeValue(e.target.value);
  };

  render() {
    const { onClickFilterStatus, onClickFilterRole } = this.props;

    return (
      <div className="row justify-content-between">
        <div className="form-group col-12 col-sm-6 col-md-7 p-0">
          <input
            type="text" className="form-control"
            placeholder="Search worker by name..."/>
        </div>
        <SortByRole onClickFilterRole={onClickFilterRole} />
        <SortByStatus onClickFilterStatus={onClickFilterStatus} />
      </div>
    );
  }
};

export default SearchBar;