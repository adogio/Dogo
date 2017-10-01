import React, {
    Component
} from 'react';

class Angle extends Component {
    defaultColor = { fill: "#505050" };
    render() {
        return (
            <polygon style={this.defaultColor} points={this.props.points} />
        );
    }
}

export default Angle;