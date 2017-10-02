import React, {
    Component
} from 'react';
import Angle from './triangle';
import AText from './animteText';

class Logo extends Component {
    defaultColor = { fill: "#FFFC34" };
    timeoutClearer = 0;

    constructor(props) {
        super(props);
        this.animate = this.animate.bind(this);
        this.renderLarge = this.renderLarge.bind(this);
        this.renderMedium = this.renderMedium.bind(this);
        this.renderSmall = this.renderSmall.bind(this);
        this.state = {
            mark: "null"
        }
    }

    render() {
        switch (this.props.size) {
            case "large": return this.renderLarge();
            case "medium": return this.renderMedium();
            case "small": return this.renderSmall();
            default: return this.renderMedium();
        }
    }

    renderSmall() {
        return (
            <div style={{ height: "80px", width: "80px", overflow: "", display: "block", cursor: "pointer", userSelect: "none" }} onClick={this.animate}>
                <svg width="60px" height="60px" viewBox="0 0 201 200" stroke="black" style={{ display: "block" }}>
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
            </div>
        );
    }

    renderMedium() {
        const text = { position: "relative", fontSize: "35px" };
        const paddings = { left: "55px", top: "-55px", cursor: "pointer" };
        return (
            <div style={{ height: "60px", width: "auto", overflow: "", display: "block", userSelect: "none" }}>
                <svg width="60px" height="60px" viewBox="0 0 201 200" stroke="black" style={{ display: "block", cursor: "pointer" }} onClick={this.animate}>
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
                <span style={Object.assign({}, paddings, text, { fontFamily: this.props.font })} onClick={this.animate}>
                    <AText text={this.props.text} />
                </span>
            </div>
        );
    }

    renderLarge() {
        const text = { transform: "rotate(297deg)", position: "relative", fontSize: "40px" };
        const paddings = { left: "73px", top: "-122px", cursor: "pointer" };
        return (
            <div style={{ height: "200px", width: "200px", overflow: "", display: "block", userSelect: "none" }}>
                <svg width="200px" height="200px" viewBox="0 0 201 200" stroke="black" style={{ display: "block" }} onClick={this.animate}>
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
                <div style={Object.assign({}, paddings, text)} onClick={this.animate}>{this.props.text}</div>
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
            switch (animateNext % 15) {
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
                    break;
                default:
                    mark = "lt";
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