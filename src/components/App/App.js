import React from 'react';
import Header from '../Header/Header';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SelectedWorker from '../SelectedWorker/SelectedWorker';
import WorkersList from '../WorkersList/WorkersList';

class App extends React.Component { 
  state = {
    list: [],
    searchValue: '',
    checkedWorker: null
  }

  componentDidMount() {
    fetch('db.json')
    .then(response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);

        return;
      } else {
        return response.json().then(data => {
          this.setState({
            list: data,
            isLoading: true,
            checkedWorker: data[0]
          });
          console.log('first worker ', data[0])
        });
      }
    }

    ).catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  selectWorker = (event) => {
    this.setState({
      checkedWorker: this.state.list[ event.currentTarget.id - 1]
    })
  }

  render () {

    return (
      <div className={styles.App}>
        <Header />
        <div className="container content p-4">
          <div className="col-12 mb-4">        
            <SearchBar />  
          </div>
          <div className='col-12 row m-0 p-0'>
            <SelectedWorker list={this.state.list}  checkedWorker={this.state.checkedWorker}/>
            <WorkersList list={this.state.list} selectWorker={this.selectWorker} />
          </div>
        </div>             
      </div>
    );
  }  
};

export default App;
