import React, {
    Component
} from 'react';
import TextElement from './textElement';

class AText extends Component {

    constructor(props) {
        super(props);
        this.renderText = this.renderText.bind(this);
    }

    render() {
        return (
            <span>{this.props.text.split("").map(this.renderText)}</span>
        );
    }

    renderText(value, index) {
        return <TextElement
            char={value} key={"char" + index}
            reverse={this.props.animate % this.props.text.length === index}
            allIn={this.props.allIn}
            allInColor={this.props.allInColor}
        />
    }
}

export default AText;