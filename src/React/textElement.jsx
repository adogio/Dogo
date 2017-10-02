import React, {
    Component
} from 'react';

class TextElement extends Component {
    bothColor = { transition: "0.2s all" }
    defaultColor = { color: "black" };
    hoverColor = null;
    hoverColorList = ["FF3939", "FF7139", "BAFF39", "FFB039", "39FFA3", "39A6FF", "3978FF", "4639FF", "9539FF", "D739FF", "FF39BD"];

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.releaseHover = this.releaseHover.bind(this);
        this.getHoverColor = this.getHoverColor.bind(this);
        this.hoverColor = this.getHoverColor();
        this.state = {
            hover: false
        }
    }

    render() {
        return (
            <span
                onMouseOver={this.handleHover}
                onMouseLeave={this.releaseHover}
                style={
                    Object.assign({}, this.bothColor,
                        this.props.allIn ? { color: this.props.allInColor } :
                            this.props.reverse ? this.hoverColor :
                                this.state.hover ? this.hoverColor :
                                    this.defaultColor)
                }
                points={this.props.points}
            >{this.props.char}</span>
        );
    }

    getHoverColor() {
        let color = null;
        color = this.hoverColorList[Math.floor(Math.random() * 1000) % this.hoverColorList.length];
        return { color: "#" + color };
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

export default TextElement;