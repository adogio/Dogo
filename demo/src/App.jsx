import React, {
  Component
} from 'react';
import './App.css';
import Logo from './logo';

class App extends Component {
  constructor(props) {
    super(props);
    this.triggerAnimate = this.triggerAnimate.bind(this);
  }
  render() {
    return (
      <div>
        <Logo text="Resume" sub=".adog.io" font="'Righteous', cursive" num="medium" onClick={this.triggerAnimate}></Logo>
        <Logo text="Resume" sub=".adog.io" size="large" font="'Righteous', cursive" num="large" onClick={this.triggerAnimate}></Logo>
        <Logo text="Resume" sub=".adog.io" size="small" font="'Righteous', cursive" num="small" onClick={this.triggerAnimate}></Logo>
        <br />
      </div>
    );
  }
  triggerAnimate() {
    for (let i in window.adog.logo) {
      window.adog.logo[i].load();
    }
    setTimeout(function () {
      for (let i in window.adog.logo) {
        window.adog.logo[i].unload();
      }
    }, 2000);
  }
}

export default App;