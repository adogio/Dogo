import React, {
  Component
} from 'react';
import './App.css';
import Logo from './logo';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo text="adog.iossssss"></Logo>
        </div>
        <div>
          <Logo text="adog.iosss"></Logo>
          <Logo text="adog.ios"></Logo>
          <Logo text="adog"></Logo>
        </div>
      </div>
    );
  }
}

export default App;