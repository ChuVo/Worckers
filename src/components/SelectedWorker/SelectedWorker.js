import React, {Component} from 'react';

export default class SelectedWorker extends Component {

  render() {
    const {list, checkedWorker} = this.props;

    let newList = getId(list, checkedWorker +1)[0],
        data = {...newList},
        imgSrc = (data.image === undefined) ? 'images/react.svg' : 'images/' + data.image + '.svg';

    function getId(array, search) {

      return array.filter(function(item) {

        return Object.keys(item).some(function(key) {

          return item[key] === search
        });
      });
    }

    return (
      <div className="col-12 col-sm-4 col-md-3 mb-4 p-0">
        <div className="bg-secondary p-0 pb-2 rounded">
          <div>
            <img src={imgSrc} alt='Workers avatar' className='col-8 col-sm-12'></img>
          </div>
          <p className='bg-dark p-2'>{data.name}</p>
          <p>{data.role}</p>
          <p>{data.phone}</p>
          <p>{data.birthday}</p>
        </div>
      </div>
    );
  }
};