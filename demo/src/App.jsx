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
          <Logo text="adog.io" size="medium" font="'Times New Roman', Times, serif"></Logo>
        </div>
      </div>
    );
  }
}

export default App;