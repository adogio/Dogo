import React, {
    Component
} from 'react';
import Angle from './triangle';

class Logo extends Component {
    defaultColor = { fill: "#FFFC34" };
    text = { position: "absolute", fontSize: "20px" };
    paddings = { left: "0px", top: "0px" };
    timeoutClearer = 0;

    constructor(props) {
        super(props);
        this.animate = this.animate.bind(this);
        this.state = {
            mark: "null"
        }
    }

    render() {
        return (
            <div style={{ height: "200px", width: "200px", overflow: "hidden", display: "block" }} onClick={this.animate}>
                <svg width="200px" height="200px" viewBox="0 0 201 200" stroke="black" style={{ display: "block" }}>
                    <polygon style={this.defaultColor} points="0,0 200,0 100,200" />
                    <Angle reverse={this.state.mark === "ct"} points="75,49 100,68 127,50 100,0" />
                    <Angle reverse={this.state.mark === "cl"} points="50,100 75,49 100,67 100,100" />
                    <Angle reverse={this.state.mark === "cr"} points="100,100 100,67 127,49 152,100" />
                    <Angle reverse={this.state.mark === "rt"} points="100,0 152,34 200,0" />
                    <Angle reverse={this.state.mark === "rr"} points="152,34 152,100 200,0" />
                    <Angle reverse={this.state.mark === "rl"} points="100,0 152,100 152,34" />
                    <Angle reverse={this.state.mark === "lt"} points="100,0 50,34 0,0" />
                    <Angle reverse={this.state.mark === "ll"} points="50,33 50,100 0,0" />
                    <Angle reverse={this.state.mark === "lr"} points="100,0 50,100 50,33" />
                    <Angle reverse={this.state.mark === "bl"} points="50,100 100,127 100,200" />
                    <Angle reverse={this.state.mark === "br"} points="100,127 152,100 100,200" />
                    <Angle reverse={this.state.mark === "bt"} points="50,100 152,100 100,128" />
                </svg>
                <span style={Object.assign({}, this.paddings, this.text)}>{this.props.text}</span>
            </div>
        );
    }

    animate() {
        clearTimeout(this.timeoutClearer);
        this.setState({
            mark: "ll"
        })
        let animateNext = 1
        const nextAnimate = () => {
            let mark = null
            switch (animateNext) {
                case 0:
                    mark = "ll";
                    break;
                case 1:
                    mark = "lr";
                    break;
                case 2:
                    mark = "cl";
                    break;
                case 3:
                    mark = "bt";
                    break;
                case 4:
                    mark = "bl";
                    break;
                case 5:
                    mark = "br";
                    break;
                case 6:
                    mark = "bt";
                    break;
                case 7:
                    mark = "cr";
                    break;
                case 8:
                    mark = "rl";
                    break;
                case 9:
                    mark = "rr";
                    break;
                case 10:
                    mark = "rt";
                    break;
                case 11:
                    mark = "rl";
                    break;
                case 12:
                    mark = "ct";
                    break;
                case 13:
                    mark = "lr";
                    break;
                case 14:
                    mark = "lt";
                    animateNext = -1;
                    break;

            }
            animateNext++;
            this.setState({
                mark: mark
            })
            this.timeoutClearer = setTimeout(nextAnimate, 200);
        }
        this.timeoutClearer = setTimeout(nextAnimate, 200);
    }
}

export default Logo;