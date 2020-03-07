import React from 'react';
import './App.css';

import Clicker from './components/Clicker';
import Backdrop from './components/SlideDrawer/Backdrop';
import SlideDrawer from './components/SlideDrawer/SlideDrawer';


interface IState {
  drawerOpen: boolean;
}

class App extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      drawerOpen: false
    }

    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          <SlideDrawer show={this.state.drawerOpen} />
          { this.state.drawerOpen && <Backdrop close={this.backdropClickHandler}/> }
          <Clicker toggle={this.drawerToggleClickHandler} />
        </div>
      </div>
    );
  }

  private drawerToggleClickHandler() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  private backdropClickHandler() {
    this.setState({
      drawerOpen: false
    });
  }
}

export default App;
