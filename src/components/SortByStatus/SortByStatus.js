import React from 'react';

class SortByStatus extends React.Component {
  render () {
    const { onFilterByStatus } = this.props;

    return (
      <div className="custom-control custom-switch col-5 col-sm-3 col-md-2 pt-2 pr-0" >      
        <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={onFilterByStatus}/>
        <label className="custom-control-label cursor-hend" htmlFor="customSwitch1">
          В архиве
        </label>
      </div>
    )
  }
};

export default SortByStatus;