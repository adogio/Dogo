import React, {
    Component
} from 'react';

class Angle extends Component {
    bothColor = { transition: "0.2s all" }
    defaultColor = { fill: "#FFFC34" };
    hoverColor = { fill: "black" };

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.releaseHover = this.releaseHover.bind(this);
        this.state = {
            hover: false
        }
    }

    render() {
        return (
            <polygon
                onMouseOver={this.handleHover}
                onMouseLeave={this.releaseHover}
                style={
                    Object.assign({}, this.bothColor, this.props.reverse ?
                        this.hoverColor : this.state.hover ?
                            this.hoverColor : this.defaultColor)
                }
                points={this.props.points}
            />
        );
    }

    handleHover() {
        this.setState({
            hover: true
        })
    }

    releaseHover() {
        this.setState({
            hover: false
        })
    }
}

export default Angle;