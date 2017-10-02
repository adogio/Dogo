import React, {
    Component
} from 'react';

class TextElement extends Component {
    bothColor = { transition: "0.2s all" }
    defaultColor = { color: "black" };
    hoverColor = { color: "red" };

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.releaseHover = this.releaseHover.bind(this);
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
                    Object.assign({}, this.bothColor, this.props.reverse ?
                        this.hoverColor : this.state.hover ?
                            this.hoverColor : this.defaultColor)
                }
                points={this.props.points}
            >{this.props.char}</span>
        );
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