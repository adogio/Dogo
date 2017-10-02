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
          <Logo text="TexT" font="'Righteous', cursive"></Logo>
        </div>
      </div>
    );
  }
}

export default App;