import React, {
    Component
} from 'react';
import AText from './animteText';
import AngleList from './triangleList';

class SmallLogo extends Component {
    isloading = false;

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.releaseHover = this.releaseHover.bind(this);
        this.state = {
            hover: false
        }
    }

    render() {
        const text = { position: "relative", fontSize: "35px" };
        const paddings = { left: "49px", top: "-45px", cursor: "pointer" };
        const subtext = { position: "relative", fontSize: "15px" };
        const subpaddings = { right: "0px", top: "-73px", cursor: "pointer" };
        return (
            <div style={{ height: "60px", width: "auto", overflow: "", display: "block", userSelect: "none" }}>
                <svg
                    width="60px"
                    height="60px"
                    viewBox="0 0 201 200"
                    style={{ display: "block", cursor: "pointer" }}
                    onClick={this.props.onclick}
                    onMouseOver={this.handleHover}
                    onMouseLeave={this.releaseHover}
                >
                    <polygon style={this.props.defaultColor} points="0,0 200,0 100,200" />
                    <AngleList animate={this.props.animate} />
                </svg>
                <div style={{
                    visibility: (this.state.hover || this.props.animate !== -1) ? "visible" : "hidden",
                    opacity: (this.state.hover || this.props.animate !== -1) ? "1" : "0",
                    transition: "0.4s all"
                }}>
                    <span style={Object.assign({}, paddings, text, { fontFamily: this.props.font })} onClick={this.props.onclick}>
                        <AText text={this.props.text} animate={this.props.animate} />
                    </span>
                    <span style={Object.assign({}, subpaddings, subtext, { fontFamily: this.props.font })} onClick={this.props.onclick}>
                        <AText text={this.props.sub} />
                    </span>
                </div>
            </div>
        );
    }

    handleHover() {
        this.setState({
            hover: true
        })
    }

    releaseHover() {
        if (this.props.animate !== -1) return;
        this.setState({
            hover: false
        })
    }
}

export default SmallLogo;