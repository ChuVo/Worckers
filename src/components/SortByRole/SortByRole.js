import React from 'react';

class SortByRole extends React.Component {
  render() {
    const { onClickFilterRole } = this.props;

    return (
      <div  className='col-7 col-sm-3 col-md-2 p-0'>
        <select className="custom-select" id="inlineFormCustomSelectPref" onChange={onClickFilterRole}>
          <option value="all" defaultValue>All...</option>
          <option value="driver">Deriver</option>
          <option value="waiter">Waiter</option>
          <option value="cook">Cook</option>
        </select>
      </div>
    )
  };
};

export default SortByRole;