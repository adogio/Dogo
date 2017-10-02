import React, {
    Component
} from 'react';

class Angle extends Component {
    bothColor = { transition: "0.2s all" }
    defaultColor = null;
    hoverColor = { fill: "#250000" };
    hoverColorList = ["FFD9D9", "FFE4D9", "FFEFD9", "F8FFD9", "DAFFD9", "D9FEFF", "D9E9FF", "D9E3FF", "E6D9FF", "FFD9FF", "FFD9EF"];
    antiColorList = ["690000", "006928", "0B0069", "690060", "310069", "944F00", "006964", "676900", "310069"];

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.releaseHover = this.releaseHover.bind(this);
        this.getRandColor = this.getRandColor.bind(this);
        this.defaultColor = this.getRandColor();
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
                            this.hoverColor :
                            this.props.color ? this.props.color : this.defaultColor)
                }
                points={this.props.points}
            />
        );
    }

    getRandColor() {
        let color = null;
        if (this.props.anti) {
            color = this.antiColorList[Math.floor(Math.random() * 1000) % this.antiColorList.length];
        } else {
            color = this.hoverColorList[Math.floor(Math.random() * 1000) % this.hoverColorList.length];
        }
        return { fill: "#" + color };
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