import React, {
    Component
} from 'react';
import AText from './animteText';
import AngleList from './triangleList';
import SmallLogo from './smallLogo';

class Dogo extends Component {

    defaultColor = { fill: "#FFFC34" };
    timeoutClearer = 0;

    constructor(props) {
        super(props);
        this.animate = this.animate.bind(this);
        this.sussessAnimate = this.sussessAnimate.bind(this);
        this.failedAnimate = this.failedAnimate.bind(this);
        this.stopAnimate = this.stopAnimate.bind(this);
        this.renderLarge = this.renderLarge.bind(this);
        this.renderMedium = this.renderMedium.bind(this);
        this.renderSmall = this.renderSmall.bind(this);
        this.state = {
            animateNext: -1,
            allIn: false,
            allInColor: "919191"
        }
    }

    componentWillMount() {
        const load = this.animate;
        const success = this.sussessAnimate;
        const failed = this.failedAnimate;
        const unload = this.stopAnimate;
        if (!window.adog) window.adog = {};
        if (!window.adog.logo) window.adog.logo = {};
        if (this.props.num) {
            if (window.adog.logo[this.props.num]) throw new Error("Same num exist, plase use different number");
            window.adog.logo[this.props.num] = {
                load: load,
                success: success,
                failed: failed,
                unload: unload
            };
        } else {
            if (window.adog.logo.load) throw new Error("Only there is one logo component in most parent can use without num assign");
            window.adog.logo.load = load;
            window.adog.logo.success = success;
            window.adog.logo.failed = failed;
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
                allInColor={this.state.allInColor}
                width={this.props.width}
                height={this.props.height}
                center={this.props.center}
            />
        );
    }

    renderMedium() {
        const text = { position: "relative", fontSize: "35px" };
        const paddings = {
            left: this.props.width ? (this.props.width - 11 + "px") : "49px",
            top: "-45px",
            cursor: "pointer"
        };
        const subtext = { position: "relative", fontSize: "15px" };
        const subpaddings = { right: "0px", top: "-73px", cursor: "pointer" };
        return (
            <div
                style={{
                    height: (this.props.height ? this.props.height : "60") + "px",
                    width: this.props.width ? (this.props.width + "px") : "auto",
                    overflow: "",
                    display: "block",
                    userSelect: "none"
                }}
            >
                <svg
                    width={(this.props.width ? this.props.width : "60") + "px"}
                    height={(this.props.height ? this.props.height : "60") + "px"}
                    viewBox="0 0 201 200"
                    style={{ display: "block", cursor: "pointer" }}
                    onClick={this.props.onClick}>
                    <polygon style={this.defaultColor} points="0,0 200,0 100,200" />
                    <AngleList
                        animate={this.state.animateNext}
                        allIn={this.state.allIn}
                        allInColor={this.state.allInColor}
                        center={this.props.center} />
                </svg>
                <span style={Object.assign({}, paddings, text, { fontFamily: this.props.font })} onClick={this.props.onClick}>
                    <AText text={this.props.text} animate={this.state.animateNext} allIn={this.state.allIn} allInColor={this.state.allInColor} />
                </span>
                <span style={Object.assign({}, subpaddings, subtext, { fontFamily: this.props.font })} onClick={this.props.onClick}>
                    <AText text={this.props.sub} allIn={this.state.allIn} allInColor={this.state.allInColor} />
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
            <div style={{
                height: (this.props.height ? this.props.height : "200") + "px",
                width: (this.props.width ? this.props.width : "200") + "px",
                overflow: "",
                display: "block",
                userSelect: "none"
            }}>
                <svg
                    width={(this.props.width ? this.props.width : "200") + "px"}
                    height={(this.props.height ? this.props.height : "200") + "px"}
                    viewBox="0 0 201 200"
                    stroke="black"
                    style={{ display: "block", cursor: "pointer" }}
                    onClick={this.props.onClick}
                >
                    <polygon style={this.defaultColor} points="0,0 200,0 100,200" />
                    <AngleList animate={this.state.animateNext} allIn={this.state.allIn} allInColor={this.state.allInColor} center={this.props.center} />
                </svg>
                <div style={Object.assign({}, paddings, text, { fontFamily: this.props.font })} onClick={this.props.onClick}>
                    <AText text={this.props.text} animate={this.state.animateNext} allIn={this.state.allIn} allInColor={this.state.allInColor} />
                </div>
                <div style={Object.assign({}, subpaddings, subtext, { fontFamily: this.props.font })} onClick={this.props.onClick}>
                    <AText text={this.props.sub} allIn={this.state.allIn} allInColor={this.state.allInColor} />
                </div>
            </div >
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
            allIn: true,
            allInColor: "#919191"
        });
        setTimeout(() => {
            this.setState({ allIn: false });
        }, 350);
    }

    failedAnimate() {
        clearTimeout(this.timeoutClearer);
        this.setState({
            animateNext: -1,
            allIn: true,
            allInColor: "#CC0000"
        });
        setTimeout(() => {
            this.setState({ allIn: false });
        }, 350);
    }

    sussessAnimate() {
        clearTimeout(this.timeoutClearer);
        this.setState({
            animateNext: -1,
            allIn: true,
            allInColor: "#29CC00"
        });
        setTimeout(() => {
            this.setState({ allIn: false });
        }, 350);
    }
}

export default Dogo;