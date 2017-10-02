import React, {
  Component
} from 'react';
import './App.css';
import Logo from './logo';

class App extends Component {
  constructor(props) {
    super(props);
    this.triggerAnimate = this.triggerAnimate.bind(this);
    this.stopAnimate = this.stopAnimate.bind(this);
  }
  render() {
    return (
      <div>
        <div>
          <Logo text="Resume" sub=".adog.io" font="'Righteous', cursive" num="medium" onClick={this.triggerAnimate}></Logo>
          <Logo text="Resume" sub=".adog.io" size="large" font="'Righteous', cursive" num="large" onClick={this.triggerAnimate}></Logo>
          <Logo text="Resume" sub=".adog.io" size="small" font="'Righteous', cursive" num="small" onClick={this.triggerAnimate}></Logo>
          <br />
          <button onClick={this.stopAnimate}>stop</button>
        </div>
      </div>
    );
  }
  triggerAnimate() {
    for (let i in window.adog.logo) {
      window.adog.logo[i].load();
    }
  }
  stopAnimate() {
    for (let i in window.adog.logo) {
      window.adog.logo[i].unload();
    }
  }
}

export default App;