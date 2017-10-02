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
          <Logo text="Resume" sub=".adog.io" font="'Righteous', cursive"></Logo>
          <Logo text="Resume" sub=".adog.io" size="large" font="'Righteous', cursive"></Logo>
        </div>
      </div>
    );
  }
}

export default App;