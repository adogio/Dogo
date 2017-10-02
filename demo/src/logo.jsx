import React, {
    Component
} from 'react';
import AText from './animteText';
import AngleList from './triangleList';
import SmallLogo from './smallLogo';

class Logo extends Component {
    defaultColor = { fill: "#FFFC34" };
    timeoutClearer = 0;

    constructor(props) {
        super(props);
        this.animate = this.animate.bind(this);
        this.stopAnimate = this.stopAnimate.bind(this);
        this.renderLarge = this.renderLarge.bind(this);
        this.renderMedium = this.renderMedium.bind(this);
        this.renderSmall = this.renderSmall.bind(this);
        this.state = {
            animateNext: -1,
            allIn: false
        }
    }

    componentWillMount() {
        const load = this.animate;
        const unload = this.stopAnimate;
        if (!window.adog) window.adog = {};
        if (!window.adog.logo) window.adog.logo = {};
        if (this.props.num) {
            window.adog.logo[this.props.num] = {
                load: load,
                unload: unload
            }
        } else {
            window.adog.logo.load = load;
            window.adog.logo.unload = unload;
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
            <SmallLogo
                text={this.props.text}
                sub={this.props.sub}
                font={this.props.font}
                defaultColor={this.defaultColor}
                animate={this.state.animateNext}
                onclick={this.props.onClick}
                allIn={this.state.allIn}
            />
        );
    }

    renderMedium() {
        const text = { position: "relative", fontSize: "35px" };
        const paddings = { left: "49px", top: "-45px", cursor: "pointer" };
        const subtext = { position: "relative", fontSize: "15px" };
        const subpaddings = { right: "0px", top: "-73px", cursor: "pointer" };
        return (
            <div style={{ height: "60px", width: "auto", overflow: "", display: "block", userSelect: "none" }}>
                <svg width="60px" height="60px" viewBox="0 0 201 200" style={{ display: "block", cursor: "pointer" }} onClick={this.props.onClick}>
                    <polygon style={this.defaultColor} points="0,0 200,0 100,200" />
                    <AngleList animate={this.state.animateNext} allIn={this.state.allIn} />
                </svg>
                <span style={Object.assign({}, paddings, text, { fontFamily: this.props.font })} onClick={this.props.onClick}>
                    <AText text={this.props.text} animate={this.state.animateNext} allIn={this.state.allIn} />
                </span>
                <span style={Object.assign({}, subpaddings, subtext, { fontFamily: this.props.font })} onClick={this.props.onClick}>
                    <AText text={this.props.sub} allIn={this.state.allIn} />
                </span>
            </div>
        );
    }

    renderLarge() {
        const text = { transform: "rotate(297deg)", position: "relative", fontSize: "40px" };
        const paddings = { left: "65px", top: "-118px", cursor: "pointer" };
        const subtext = { transform: "rotate(297deg)", position: "relative", fontSize: "18px" };
        const subpaddings = { left: "90px", top: "-152px", cursor: "pointer" };
        return (
            <div style={{ height: "200px", width: "200px", overflow: "", display: "block", userSelect: "none" }}>
                <svg width="200px" height="200px" viewBox="0 0 201 200" stroke="black" style={{ display: "block", cursor: "pointer" }} onClick={this.props.onClick}>
                    <polygon style={this.defaultColor} points="0,0 200,0 100,200" />
                    <AngleList animate={this.state.animateNext} allIn={this.state.allIn} />
                </svg>
                <div style={Object.assign({}, paddings, text, { fontFamily: this.props.font })} onClick={this.props.onClick}>
                    <AText text={this.props.text} animate={this.state.animateNext} allIn={this.state.allIn} />
                </div>
                <div style={Object.assign({}, subpaddings, subtext, { fontFamily: this.props.font })} onClick={this.props.onClick}>
                    <AText text={this.props.sub} allIn={this.state.allIn} />
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
            });
            this.timeoutClearer = setTimeout(nextAnimate, 200);
        }
        nextAnimate();
    }

    stopAnimate() {
        clearTimeout(this.timeoutClearer);
        this.setState({
            animateNext: -1,
            allIn: true
        });
        setTimeout(() => {
            this.setState({ allIn: false });
        }, 300);
    }
}

export default Logo;