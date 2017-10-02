import React, {
    Component
} from 'react';
import AText from './animteText';
import AngleList from './triangleList';

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
            animateNext: -1
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
                <svg width="60px" height="60px" viewBox="0 0 201 200" style={{ display: "block" }}>
                    <polygon style={this.defaultColor} points="0,0 200,0 100,200" />
                    <AngleList animate={this.state.animateNext} />
                </svg>
            </div>
        );
    }

    renderMedium() {
        const text = { position: "relative", fontSize: "35px" };
        const paddings = { left: "55px", top: "-55px", cursor: "pointer" };
        return (
            <div style={{ height: "60px", width: "auto", overflow: "", display: "block", userSelect: "none" }}>
                <svg width="60px" height="60px" viewBox="0 0 201 200" style={{ display: "block", cursor: "pointer" }} onClick={this.animate}>
                    <polygon style={this.defaultColor} points="0,0 200,0 100,200" />
                    <AngleList animate={this.state.animateNext} />
                </svg>
                <span style={Object.assign({}, paddings, text, { fontFamily: this.props.font })} onClick={this.animate}>
                    <AText text={this.props.text} animate={this.state.animateNext} />
                </span>
            </div>
        );
    }

    renderLarge() {
        const text = { transform: "rotate(297deg)", position: "relative", fontSize: "40px" };
        const paddings = { left: "73px", top: "-122px", cursor: "pointer" };
        return (
            <div style={{ height: "200px", width: "200px", overflow: "", display: "block", userSelect: "none" }}>
                <svg width="200px" height="200px" viewBox="0 0 201 200" stroke="black" style={{ display: "block", cursor: "pointer" }} onClick={this.animate}>
                    <polygon style={this.defaultColor} points="0,0 200,0 100,200" />
                    <AngleList animate={this.state.animateNext} />
                </svg>
                <div style={Object.assign({}, paddings, text, { fontFamily: this.props.font })} onClick={this.animate}>
                    <AText text={this.props.text} animate={this.state.animateNext} />
                </div>
            </div>
        );
    }

    animate() {
        clearTimeout(this.timeoutClearer);
        const nextAnimate = () => {
            this.state.animateNext++;
            this.setState({
                animateNext: this.state.animateNext
            })
            this.timeoutClearer = setTimeout(nextAnimate, 200);
        }
        nextAnimate();
    }
}

export default Logo;