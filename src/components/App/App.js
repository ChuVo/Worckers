import React from 'react';
import Header from '../Header/Header';
import styles from './App.module.css';
import GetData from '../GetData/GetData';
import SearchBar from '../SearchBar/SearchBar';
import WorkersList from '../WorkersList/WorkersList';
import SelectedWorker from '../SelectedWorker/SelectedWorker';

class App extends React.Component {
  state = {
    list: [],
    sortUp: false,
    isLoading: false,
    searchValue: '',
    checkedWorker: 0,
    showArchive: false
  }

  componentDidMount() {
    this.getListWorkers();
  }

  getListWorkers = () => {
    GetData().then(data => {
      if (data !== 0) {
        this.setState({
          list: data,
          isLoading: true,
          checkedWorker: data[0]
        });
      }
    })
  }

  setList = (newList) => {
    this.setState({ list: newList});
  }

  selectWorker = (event) => {
    this.setState({
      checkedWorker: event.currentTarget.id - 1
    })
  }

  onClickSort = (e) => {
    let list = [...this.state.list];

    list = list.sort(this.dynamicSort(e.target.id));
    this.setState({ list: list });
  };

  dynamicSort = (property) => {
    let sortOrder = 1;

    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return (a, b) => {
      let result = undefined;

      if (this.state.sortUp === true ) {
        result = (a[property] > b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        this.setState({sortUp: false });
      } else {
        result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        this.setState({sortUp: true });
      }

      return result * sortOrder;
    };
  };

  onClickSortAge = () => {
    const list = this.state.list.sort((a, b) => a.age > b.age ? 1 : -1);

    this.setState({ list: list });
  }

  onClickFilterStatus = () => {
    if (this.state.showArchive !== true) {
      let newList = this.state.list.filter(i => {
        if (i.isArchive === true) { return i }
      });
      this.setList(newList);
    } else this.getListWorkers();

    this.setState({ showArchive: !this.state.showArchive });
  }

  render () {

    return (
      <div className={styles.App}>
        <Header />
        <div className="container content p-4">
          <div className="col-12 mb-4">
            <SearchBar onClickFilterStatus={this.onClickFilterStatus} />
          </div>
          <div className='col-12 row m-0 p-0'>
            <SelectedWorker list={this.state.list}  checkedWorker={this.state.checkedWorker}/>
            <WorkersList
              list={this.state.list}
              selectWorker={this.selectWorker}
              onClickSort={this.onClickSort}
              onClickSortAge={this.onClickSortAge}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default App;