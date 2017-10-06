import React, {
    Component
} from 'react';
import Angle from './triangle';

class AText extends Component {
    centerColor = null
    hoverColorList = ["FFD9D9", "FFE4D9", "FFEFD9", "F8FFD9", "DAFFD9", "D9FEFF", "D9E9FF", "D9E3FF", "E6D9FF", "FFD9FF", "FFD9EF"];
    antiColorList = ["690000", "006928", "0B0069", "690060", "310069", "944F00", "006964", "676900", "310069"];

    constructor(props) {
        super(props);
        this.animate = this.animate.bind(this);
        this.getRandColor = this.getRandColor.bind(this);
        if (this.props.center) {
            if (this.props.center.fill) {
                this.centerColor = this.props.center;
            } else {
                this.centerColor = { fill: this.props.center };
            }
        } else {
            this.centerColor = this.getRandColor(false);
        }
    }

    render() {
        return (
            <g>
                <Angle theme={this.props.theme} reverse={this.animate(12)} color={this.centerColor} points="75,49 100,68 127,50 100,0" />
                <Angle theme={this.props.theme} reverse={this.animate(2)} color={this.centerColor} points="50,100 75,49 100,67 100,100" />
                <Angle theme={this.props.theme} reverse={this.animate(7)} color={this.centerColor} points="100,100 100,67 127,49 152,100" />
                <Angle theme={this.props.theme} reverse={this.animate(10)} points="100,0 152,34 200,0" />
                <Angle theme={this.props.theme} reverse={this.animate(9)} anti allIn={this.props.allIn} allInColor={this.props.allInColor} points="152,34 152,100 200,0" />
                <Angle theme={this.props.theme} reverse={this.animate(8, 11)} points="100,0 152,100 152,34" />
                <Angle theme={this.props.theme} reverse={this.animate(14)} points="100,0 50,34 0,0" />
                <Angle theme={this.props.theme} reverse={this.animate(0)} points="50,33 50,100 0,0" />
                <Angle theme={this.props.theme} reverse={this.animate(1, 13)} anti allIn={this.props.allIn} allInColor={this.props.allInColor} points="100,0 50,100 50,33" />
                <Angle theme={this.props.theme} reverse={this.animate(4)} points="50,100 100,127 100,200" />
                <Angle theme={this.props.theme} reverse={this.animate(5)} anti allIn={this.props.allIn} allInColor={this.props.allInColor} points="100,127 152,100 100,200" />
                <Angle theme={this.props.theme} reverse={this.animate(3, 6)} points="50,100 152,100 100,128" />
            </g>
        );
    }


    getRandColor(isAnti) {
        let color = null;
        if (isAnti) {
            color = this.antiColorList[Math.floor(Math.random() * 1000) % this.antiColorList.length];
        } else {
            color = this.hoverColorList[Math.floor(Math.random() * 1000) % this.hoverColorList.length];
        }
        return { fill: "#" + color };
    }

    animate(...compare) {
        if (this.props.allIn) return true;
        for (let i = 0; i < compare.length; i++) {
            if (compare[i] === this.props.animate % 15) return true;
        }
        return false;
    }
}

export default AText;