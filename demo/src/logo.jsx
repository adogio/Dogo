import React, {
    Component
} from 'react';
import Angle from './triangle';

class Logo extends Component {
    defaultColor = { fill: "#505050" };
    rotateLogo = {transform:"rotate(180deg)"}
    render() {
        return (
            <svg style={this.rotateLogo} width="200" height="200">
                <polygon style={this.defaultColor} points="0,0 200,0 100,200" />
                <Angle points="75,49 100,68 127,50 100,0" />
                <Angle points="50,100 75,49 100,67 100,100" />
                <Angle points="100,100 100,67 127,49 152,100" />
                <Angle points="100,0 152,34 200,0" />
                <Angle points="150,33 152,100 200,0" />
                <Angle points="100,0 152,100 154,33" />
                <Angle points="100,0 50,34 0,0" />
                <Angle points="50,33 50,100 0,0" />
                <Angle points="100,0 50,100 50,33" />
                <Angle points="50,100 100,127 100,200" />
                <Angle points="100,127 152,100 100,200" />
                <Angle points="50,100 152,100 100,128" />
            </svg>
        );
    }
}

export default Logo;