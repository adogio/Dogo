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
        const paddings = {
            left: this.props.width ? (this.props.width - 11 + "px") : "49px",
            top: "-45px",
            cursor: "pointer"
        };
        const subtext = { position: "relative", fontSize: "15px" };
        const subpaddings = { right: "0px", top: "-73px", cursor: "pointer" };
        return (
            <div style={{
                height: (this.props.height ? this.props.height : "60") + "px",
                width: (this.props.width ? this.props.width + "px" : "auto"),
                overflow: "",
                display: "block",
                userSelect: "none"
            }}>
                <svg
                    width={(this.props.width ? this.props.width : "60") + "px"}
                    height={(this.props.height ? this.props.height : "60") + "px"}
                    viewBox="0 0 201 200"
                    style={{ display: "block", cursor: "pointer" }}
                    onClick={this.props.onclick}
                    onMouseOver={this.handleHover}
                    onMouseLeave={this.releaseHover}
                >
                    <polygon style={this.props.defaultColor} points="0,0 200,0 100,200" />
                    <AngleList
                        theme={this.props.theme}
                        animate={this.props.animate}
                        allIn={this.props.allIn}
                        allInColor={this.props.allInColor}
                        center={this.props.center} />
                </svg>
                <div
                    style={{
                        visibility: (this.state.hover || this.props.animate !== -1) ? "visible" : "hidden",
                        opacity: (this.state.hover || this.props.animate !== -1) ? "1" : "0",
                        transition: "0.3s all"
                    }}
                >
                    <span style={Object.assign({}, paddings, text, { fontFamily: this.props.font })} onClick={this.props.onclick}>
                        <AText
                            theme={this.props.theme}
                            text={this.props.text}
                            animate={this.props.animate}
                            allIn={this.props.allIn}
                            allInColor={this.props.allInColor} />
                    </span>
                    <span style={Object.assign({}, subpaddings, subtext, { fontFamily: this.props.font })} onClick={this.props.onclick}>
                        <AText
                            theme={this.props.theme}
                            text={this.props.sub}
                            allIn={this.props.allIn}
                            allInColor={this.props.allInColor} />
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