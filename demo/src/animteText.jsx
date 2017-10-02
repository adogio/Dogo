import React, {
    Component
} from 'react';

class AText extends Component {
    defaultColor = { color: "black" };
    hoverColorList = [];
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
        console.log(value, index)
    }
}

export default AText;